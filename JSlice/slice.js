const fs = require('fs');
const esprima = require('esprima');
const esrecurse = require('esrecurse');

// 读取并解析JavaScript代码
// const code = fs.readFileSync('yourfile.js', 'utf8');
// const targetLineNumber = 10; // 替换为您的目标行号
const code = fs.readFileSync('testfiles/processBoxShadow.js', 'utf8');
const targetLineNumber = 129; // 替换为您的目标行号
// const code = fs.readFileSync('testfiles/emulation.js', 'utf8');
// const targetLineNumber = 14; // 替换为您的目标行号
const ast = esprima.parseScript(code, { loc: true });

// 控制变量：设置为true时，输出完整的程序调用图；设置为false时，仅输出目标函数的调用链
const outputFullCallGraph = false; // 根据需要设置为true或false

// 存储函数定义和调用关系
const functionCalls = new Map();       // key: 函数名，value: 调用的函数集合
const functionDefinitions = new Map(); // key: 函数名，value: { node, startLine, endLine }

// 遍历AST，构建函数调用图
esrecurse.visit(ast, {
  currentFunction: null,
  FunctionDeclaration(node) {
    const functionName = node.id.name;
    const startLine = node.loc.start.line;
    const endLine = node.loc.end.line;
    functionDefinitions.set(functionName, { node, startLine, endLine });
    functionCalls.set(functionName, new Set());
    const previousFunction = this.currentFunction;
    this.currentFunction = functionName;
    this.visit(node.body);
    this.currentFunction = previousFunction;
  },
  FunctionExpression(node) {
    let functionName = null;
    if (
      node.parent &&
      node.parent.type === 'VariableDeclarator' &&
      node.parent.id &&
      node.parent.id.name
    ) {
      functionName = node.parent.id.name;
    } else if (
      node.parent &&
      node.parent.type === 'AssignmentExpression' &&
      node.parent.left.type === 'Identifier'
    ) {
      functionName = node.parent.left.name;
    } else {
      functionName = `anonymous_${node.loc.start.line}`;
    }

    const startLine = node.loc.start.line;
    const endLine = node.loc.end.line;
    functionDefinitions.set(functionName, { node, startLine, endLine });
    functionCalls.set(functionName, new Set());

    const previousFunction = this.currentFunction;
    this.currentFunction = functionName;
    this.visit(node.body || node.right);
    this.currentFunction = previousFunction;
  },
  ArrowFunctionExpression(node) {
    let functionName = null;
    if (
      node.parent &&
      node.parent.type === 'VariableDeclarator' &&
      node.parent.id &&
      node.parent.id.name
    ) {
      functionName = node.parent.id.name;
    } else {
      functionName = `anonymous_${node.loc.start.line}`;
    }

    const startLine = node.loc.start.line;
    const endLine = node.loc.end.line;
    functionDefinitions.set(functionName, { node, startLine, endLine });
    functionCalls.set(functionName, new Set());

    const previousFunction = this.currentFunction;
    this.currentFunction = functionName;
    this.visit(node.body);
    this.currentFunction = previousFunction;
  },
  CallExpression(node) {
    let callerFunction = this.currentFunction || '<global>';
    let calleeName = '';

    if (node.callee.type === 'Identifier') {
      calleeName = node.callee.name;
    } else if (node.callee.type === 'MemberExpression') {
      if (node.callee.property.type === 'Identifier') {
        calleeName = node.callee.property.name;
      }
    } else if (
      node.callee.type === 'FunctionExpression' ||
      node.callee.type === 'ArrowFunctionExpression'
    ) {
      // 处理立即执行函数（IIFE）
      calleeName = `anonymous_${node.callee.loc.start.line}`;
      const startLine = node.callee.loc.start.line;
      const endLine = node.callee.loc.end.line;
      functionDefinitions.set(calleeName, { node: node.callee, startLine, endLine });
      functionCalls.set(calleeName, new Set());
    }

    if (calleeName) {
      if (!functionCalls.has(callerFunction)) {
        functionCalls.set(callerFunction, new Set());
      }
      functionCalls.get(callerFunction).add(calleeName);
    }

    this.visit(node.callee);
    this.visit(node.arguments);
  }
});

// 找到包含指定行的目标函数
function findFunctionContainingLine(ast, lineNumber) {
  let targetFunction = null;

  esrecurse.visit(ast, {
    FunctionDeclaration(node) {
      if (node.loc.start.line <= lineNumber && node.loc.end.line >= lineNumber) {
        targetFunction = node;
      }
    },
    FunctionExpression(node) {
      if (node.loc.start.line <= lineNumber && node.loc.end.line >= lineNumber) {
        targetFunction = node;
      }
    },
    ArrowFunctionExpression(node) {
      if (node.loc.start.line <= lineNumber && node.loc.end.line >= lineNumber) {
        targetFunction = node;
      }
    }
  });

  return targetFunction;
}

const targetFunctionNode = findFunctionContainingLine(ast, targetLineNumber);

let targetFunctionName = null;
if (targetFunctionNode) {
  if (targetFunctionNode.id && targetFunctionNode.id.name) {
    targetFunctionName = targetFunctionNode.id.name;
  } else {
    // 对于匿名函数，使用其起始行号命名
    targetFunctionName = `anonymous_${targetFunctionNode.loc.start.line}`;
  }
} else {
  console.log('未找到包含指定行的函数。');
  process.exit(1);
}

// 如果不需要输出完整的程序调用图，则构建与目标函数相关的函数集合
let relatedFunctions = new Set();

if (!outputFullCallGraph) {
  // 构建反向调用图（谁调用了某个函数）
  const reverseCallGraph = new Map(); // key: 函数名，value: 调用该函数的函数集合

  functionCalls.forEach((callees, caller) => {
    callees.forEach(callee => {
      if (!reverseCallGraph.has(callee)) {
        reverseCallGraph.set(callee, new Set());
      }
      reverseCallGraph.get(callee).add(caller);
    });
  });

  // 从目标函数开始，反向遍历，找到所有相关函数
  function findRelatedFunctions(functionName) {
    if (relatedFunctions.has(functionName)) return;
    relatedFunctions.add(functionName);

    const callers = reverseCallGraph.get(functionName);
    if (callers) {
      callers.forEach(caller => {
        findRelatedFunctions(caller);
      });
    }
  }

  findRelatedFunctions(targetFunctionName);
} else {
  // 如果输出完整的调用图，则相关函数为所有函数
  relatedFunctions = new Set(functionDefinitions.keys());
  // 将'<global>'添加到相关函数集合中（如果存在）
  if (functionCalls.has('<global>')) {
    relatedFunctions.add('<global>');
  }
}

// 生成Mermaid图
function generateMermaidGraph(functionCalls, functionDefinitions, relatedFunctions, targetFunctionName) {
  let mermaidGraph = '```mermaid\ngraph LR\n';

  // 创建节点，包含行号范围
  functionDefinitions.forEach((def, funcName) => {
    if (relatedFunctions.has(funcName)) {
      let style = '';
      if (funcName === targetFunctionName) {
        style = ':::targetFunction';
      }
      mermaidGraph += `  ${sanitize(funcName)}["${funcName} [${def.startLine}, ${def.endLine}]"]${style}\n`;
    }
  });

  // 如果'<global>'在相关函数中，但不在functionDefinitions中，添加节点
  if (relatedFunctions.has('<global>') && !functionDefinitions.has('<global>')) {
    mermaidGraph += `  ${sanitize('<global>')}["<global>"]\n`;
  }

  // 创建边
  functionCalls.forEach((callees, caller) => {
    if (relatedFunctions.has(caller)) {
      callees.forEach(callee => {
        if (relatedFunctions.has(callee)) {
          mermaidGraph += `  ${sanitize(caller)} --> ${sanitize(callee)}\n`;
        }
      });
    }
  });

  // 应用目标函数的样式
  mermaidGraph += `\nclassDef targetFunction fill:#f9f,stroke:#333,stroke-width:2px;\n`;

  mermaidGraph += '```';

  return mermaidGraph;
}

// 处理Mermaid节点名称中的特殊字符
function sanitize(name) {
  return name.replace(/[^a-zA-Z0-9_]/g, '_');
}

const mermaidGraph = generateMermaidGraph(
  functionCalls,
  functionDefinitions,
  relatedFunctions,
  targetFunctionName
);

console.log('调用关系图：');
console.log(mermaidGraph);

// 新增部分：根据调用图中相关函数的行数，提取源代码并输出到out.js文件

// 将源代码按行分割
const codeLines = code.split('\n');

// 收集相关函数的行号范围
let lineRanges = [];
relatedFunctions.forEach(funcName => {
  if (functionDefinitions.has(funcName)) {
    const { startLine, endLine } = functionDefinitions.get(funcName);
    lineRanges.push({ startLine, endLine });
  }
});

// 按起始行号排序
lineRanges.sort((a, b) => a.startLine - b.startLine);

// 合并重叠或相邻的行号范围
let mergedRanges = [];
lineRanges.forEach(range => {
  if (mergedRanges.length === 0) {
    mergedRanges.push(range);
  } else {
    let lastRange = mergedRanges[mergedRanges.length - 1];
    if (range.startLine <= lastRange.endLine + 1) {
      // 重叠或相邻，合并
      lastRange.endLine = Math.max(lastRange.endLine, range.endLine);
    } else {
      // 不重叠，添加新的范围
      mergedRanges.push(range);
    }
  }
});

// 提取代码片段
let codeSnippets = [];
mergedRanges.forEach(range => {
  // 由于数组索引从0开始，行号需要减1
  const snippet = codeLines.slice(range.startLine - 1, range.endLine).join('\n');
  codeSnippets.push(snippet);
});

// 将代码片段组合成最终代码
const finalCode = codeSnippets.join('\n\n');

// 将最终代码写入out.js文件
fs.writeFileSync('out.js', finalCode, 'utf8');

console.log('相关函数的代码已输出到out.js文件中。');
