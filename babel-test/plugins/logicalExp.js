const t = require('@babel/types');
let idCount = 0;

/**
 * @description Generate node `__temp_number__`
 * @return {t.Identifier} temporary identifier
 */
function genId() {
  let id;
  const name = '__temp_' + idCount + '__';
  idCount++;
  id = t.identifier(name);

  return id;
}
/**
 * @description: Find the closest parent statement (include path itself)
 * @param {babel.NodePath} path
 * @return {babel.NodePath} Path of the closest parent statement
 */
function getRootStmt(path) {
  // @ts-ignore
  return path.find(p =>
    (!t.isExportDeclaration(p.parent) && p.isStatement()),
  );
}

const logicalExpVisitor = {
  LogicalExpression: {
    exit(path) {
      const rootStatement = getRootStmt(path);
      // Handle such two case:
      // 1. var a = b op c;
      // 2. a = b op c;
      if (t.isVariableDeclaration(rootStatement) ||
        (t.isExpressionStatement(rootStatement) && t.isAssignmentExpression(rootStatement.node.expression))) {
        const tmp = genId();
        let test;
        switch (path.node.operator) {
          case '&&':
            test = tmp;
            break;
          case '||':
            test = t.unaryExpression('!', tmp, true);
            break;
          case '??':
            test = t.logicalExpression('||',
              t.binaryExpression('===', tmp, t.nullLiteral()),
              t.binaryExpression('===', tmp, t.identifier('undefined'))
            );
            break;
          default: throw new Error('Unknown operator in LogicalExpression: ' + path.node.operator);
        }
        rootStatement.insertBefore(t.variableDeclaration('const', [t.variableDeclarator(tmp, path.node.left)]));
        rootStatement.insertBefore(
          t.ifStatement(
            test,
            t.expressionStatement(t.assignmentExpression('=', tmp, path.node.right))
          )
        );
        path.replaceWith(tmp);
      }

    }
  }
}

module.exports = function () {
  return {
    visitor: logicalExpVisitor,
  };
};