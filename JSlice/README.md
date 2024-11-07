# 使用方法

1. Install Dependencies
```shell
npm install
```
2. Modify the `slice.js` file to set the analysis target, as follows:
```javascript
const code = fs.readFileSync('testfiles/processBoxShadow.js', 'utf8'); // Path of the file to be analyzed
const targetLineNumber = 129; // Replace with your target line number
const outputFullCallGraph = false; // Set to true to output the entire file's CFG graph, or false to output only the CFG graph reaching the target line
```
3. Run
```shell
node slice.js
```
4. View Output
- The output will appear in the command line as a Mermaid flowchart in Markdown format. You can copy it to any Markdown editor or use the [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) for rendering and viewing.
- The sliced file will be output as out.js in the project directory.
