
const mockData = [
  {
    "title": "浏览器事件循环",
    "createdAt": 1704672000000,
    "content": "## 浏览器事件循环（Event Loop）\n\n事件循环是 JavaScript 异步执行的核心机制。它负责协调调用栈、消息队列和 Web API，确保 JavaScript 单线程能够处理异步操作。\n\n### 执行顺序\n1. **同步任务**: 立即执行，阻塞后续代码\n2. **微任务（Microtask）**: Promise.then/catch/finally、queueMicrotask、MutationObserver\n3. **宏任务（Macrotask）**: setTimeout、setInterval、I/O 操作、UI 渲染\n\n### 调用栈（Call Stack）\n- 后进先出（LIFO）的数据结构\n- 存储函数的执行上下文\n- 当函数执行完毕，会从栈顶弹出\n- 栈空时，事件循环会处理队列中的任务\n\n### 任务队列\n- **宏任务队列**: 存放宏任务，如定时器回调、事件回调\n- **微任务队列**: 存放微任务，优先级高于宏任务\n- 每次事件循环，会先执行所有微任务，再执行一个宏任务\n\n### 执行流程\n```javascript\nconsole.log('1'); // 同步\n\nsetTimeout(() => console.log('2'), 0); // 宏任务\n\nPromise.resolve().then(() => console.log('3')); // 微任务\n\nconsole.log('4'); // 同步\n\n// 输出: 1, 4, 3, 2\n```\n\n### 渲染时机\n- 浏览器会在宏任务之间进行渲染\n- 微任务会阻塞渲染，直到微任务队列清空\n- requestAnimationFrame 在渲染之前执行\n\n### 注意事项\n- 避免在微任务中创建大量微任务，可能导致页面卡顿\n- 长时间运行的同步代码会阻塞事件循环\n- 使用 Web Worker 处理 CPU 密集型任务"
  }
];
window.mockData = mockData;