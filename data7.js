 const mockData = [
  {
    "title": "ES6 模块化",
    "createdAt": 1704585600000,
    "content": "## ES6 模块化\n\nES6 引入了原生的模块系统，使用 `import` 和 `export` 关键字。这是 JavaScript 语言层面的模块化方案，相比 CommonJS 和 AMD，具有更好的静态分析和优化能力。\n\n### 导出方式\n```javascript\n// 命名导出（Named Export）\nexport const name = 'value';\nexport function func() {}\nexport class MyClass {}\n\n// 或者统一导出\nexport { name, func, MyClass };\n\n// 默认导出（Default Export）\nexport default function() {}\nexport default class {}\n\n// 混合导出\nexport const named = 'value';\nexport default function() {}\n```\n\n### 导入方式\n```javascript\n// 命名导入\nimport { name, func } from './module';\nimport { name as myName } from './module'; // 重命名\n\n// 默认导入\nimport defaultExport from './module';\n\n// 混合导入\nimport defaultExport, { named } from './module';\n\n// 全部导入\nimport * as module from './module';\n\n// 动态导入（返回 Promise）\nimport('./module').then(module => {\n  // 使用模块\n});\n```\n\n### 与 CommonJS 的区别\n- **加载时机**: ES6 模块在编译时确定依赖，CommonJS 在运行时加载\n- **值引用**: ES6 模块输出的是值的引用，CommonJS 输出的是值的拷贝\n- **静态分析**: ES6 模块支持静态分析，可以进行树摇优化\n- **严格模式**: ES6 模块自动采用严格模式\n\n### 优势\n- **静态分析**: 编译时就能确定模块依赖关系\n- **树摇优化**: 打包工具可以移除未使用的代码\n- **循环依赖检测**: 可以在编译时发现循环依赖问题\n- **更好的 IDE 支持**: 提供更好的代码提示和跳转\n\n### 使用场景\n- 现代前端项目（React、Vue 等）\n- 需要代码分割和懒加载\n- 需要 Tree Shaking 优化\n- 浏览器原生支持（需要 type=\"module\"）"
  }
];
window.mockData = mockData;