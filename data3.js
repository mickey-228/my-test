 const mockData = [
{
    "title": "JavaScript 闭包",
    "createdAt": 1704240000000,
    "content": "## 闭包（Closure）\n\n闭包是指函数能够访问其外部作用域中的变量，即使外部函数已经执行完毕。这是 JavaScript 中一个非常重要的概念，它允许函数\"记住\"并访问其词法作用域中的变量。\n\n### 特点\n- 函数嵌套：内部函数定义在外部函数内部\n- 内部函数引用外部变量：内部函数可以访问外部函数的变量和参数\n- 持久化作用域：外部函数执行后，其作用域链仍然被内部函数引用，不会被垃圾回收\n\n### 工作原理\n当函数被创建时，它会保存其词法环境（lexical environment），包括所有可访问的变量。即使外部函数执行完毕，只要内部函数仍然存在引用，外部函数的作用域就不会被销毁。\n\n### 应用场景\n- **数据私有化**: 创建私有变量，避免全局污染\n- **模块化编程**: 实现模块模式，封装功能\n- **函数工厂**: 创建具有特定配置的函数\n- **回调函数**: 在异步操作中保持上下文\n- **防抖节流**: 保存定时器 ID 等状态\n\n### 示例\n```javascript\nfunction createCounter() {\n  let count = 0; // 私有变量\n  return function() {\n    return ++count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```\n\n### 注意事项\n- 闭包可能导致内存泄漏，如果不再需要应解除引用\n- 在循环中创建闭包时要注意变量捕获问题"
  }
];
window.mockData=mockData;