const mockData = [
  {
    "title": "Webpack 打包原理",
    "createdAt": 1704499200000,
    "content": "## Webpack 打包原理\n\nWebpack 是一个现代 JavaScript 应用程序的静态模块打包器。它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。\n\n### 核心概念\n- **Entry（入口）**: 指定 webpack 应该使用哪个模块作为构建其内部依赖图的开始\n- **Output（输出）**: 告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件\n- **Loader（加载器）**: 让 webpack 能够处理非 JavaScript 文件，将其转换为有效模块\n- **Plugin（插件）**: 用于执行范围更广的任务，如打包优化、资源管理、环境变量注入等\n- **Module（模块）**: 在模块化编程中，将程序分解成离散功能块\n- **Chunk（代码块）**: 代码分割后的产物\n\n### 工作流程\n1. **初始化**: 读取配置文件，初始化 Compiler 对象\n2. **编译**: 从入口文件开始，递归解析模块依赖\n3. **构建模块**: 使用 Loader 转换文件，解析 AST\n4. **生成依赖图**: 建立模块之间的依赖关系\n5. **输出资源**: 根据配置生成 chunk，输出到文件系统\n\n### 常用 Loader\n- `babel-loader`: 转换 ES6+ 代码\n- `css-loader`: 处理 CSS 文件\n- `file-loader`: 处理图片、字体等资源\n- `url-loader`: 将小文件转换为 base64\n\n### 常用 Plugin\n- `HtmlWebpackPlugin`: 生成 HTML 文件\n- `CleanWebpackPlugin`: 清理输出目录\n- `MiniCssExtractPlugin`: 提取 CSS 到单独文件\n- `OptimizeCssAssetsPlugin`: 压缩 CSS\n\n### 代码分割\n```javascript\n// 动态导入实现代码分割\nimport('./module').then(module => {\n  // 使用模块\n});\n```"
  }
];
window.mockData = mockData;