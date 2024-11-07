function main() {      // 行号 1
  foo();               // 行号 2
  baz();               // 行号 3
}

function foo() {       // 行号 5
  bar();               // 行号 6
}

function bar() {       // 行号 9
  // 目标行在这里，例如行号 10
}

function baz() {       // 行号 13
  qux();               // 行号 14
}

function qux() {       // 行号 17
  // 不相关的函数
}

main();                // 行号 21
