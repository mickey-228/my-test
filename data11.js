const mockData = [
   {
    "title": "虚拟 DOM 原理",
    "createdAt": 1704931200000,
    "content": "## 虚拟 DOM 原理\n\n虚拟 DOM（Virtual DOM）是真实 DOM 的 JavaScript 对象表示。它是 React、Vue 等框架的核心概念，通过对比虚拟 DOM 的变化来最小化真实 DOM 的操作。\n\n### 工作原理\n1. **创建虚拟 DOM 树**: 将 JSX/模板转换为虚拟 DOM 对象树\n2. **状态变化**: 当组件状态或 props 改变时，生成新的虚拟 DOM 树\n3. **Diff 算法**: 对比新旧虚拟 DOM 树，找出差异（diff）\n4. **批量更新**: 将差异应用到真实 DOM 上，批量执行更新操作\n\n### 虚拟 DOM 结构\n```javascript\n// 虚拟 DOM 节点示例\n{\n  type: 'div',\n  props: {\n    className: 'container',\n    children: [\n      { type: 'h1', props: { children: 'Hello' } },\n      { type: 'p', props: { children: 'World' } }\n    ]\n  }\n}\n```\n\n### 优势\n- **性能提升**: 减少直接操作 DOM 的次数，批量更新\n- **跨平台能力**: 虚拟 DOM 可以渲染到不同平台（Web、Native、Canvas）\n- **简化操作**: 声明式编程，不需要手动操作 DOM\n- **更好的开发体验**: 可以像操作普通对象一样操作虚拟 DOM\n\n### Diff 算法策略\n- **同层比较**: 只比较同一层级的节点，不跨层级比较\n- **key 值优化**: 使用 key 来识别节点，提高 diff 效率\n- **组件类型判断**: 如果组件类型不同，直接替换整个子树\n- **列表 diff**: 通过 key 和索引来优化列表的 diff 过程\n\n### React Fiber\nReact 16 引入 Fiber 架构，将 diff 过程拆分成多个小任务，可以中断和恢复，实现增量渲染，提高用户体验。\n\n### 注意事项\n- 虚拟 DOM 不是银弹，在某些场景下直接操作 DOM 可能更快\n- key 值应该稳定且唯一，不要使用索引作为 key（列表会变化时）\n- 过度使用虚拟 DOM 可能带来性能开销"
  }
];
window.mockData = mockData;