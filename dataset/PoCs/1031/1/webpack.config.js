const path = require('path');

module.exports = {
  entry: './poc.js',  // 你的主文件入口
  output: {
    filename: 'main.min.js',  // 输出的打包文件
    path: path.resolve(__dirname, 'dist'),  // 输出文件的目录
  },
  target: 'node',  // 表明是 Node.js 环境
  mode: 'development'  // 设置 mode
};
