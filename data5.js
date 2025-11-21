const mockData = [
  {
    "title": "Vue 响应式原理",
    "createdAt": 1704412800000,
    "content": "## Vue 响应式原理\n\nVue 的响应式系统是其核心特性之一，能够自动追踪数据变化并更新视图。Vue 2.x 使用 `Object.defineProperty` 实现响应式，Vue 3.x 使用 `Proxy` API。\n\n### 核心概念\n- **响应式数据**: 当数据发生变化时，自动更新依赖该数据的视图\n- **依赖收集**: 在渲染过程中追踪哪些数据被使用，建立依赖关系\n- **派发更新**: 当数据变化时，通知所有依赖该数据的组件进行更新\n- **观察者模式**: 使用观察者模式实现数据与视图的自动同步\n\n### Vue 2.x 实现方式\n```javascript\nObject.defineProperty(obj, 'key', {\n  get() {\n    // 依赖收集\n    return value;\n  },\n  set(newVal) {\n    // 派发更新\n    value = newVal;\n  }\n});\n```\n\n### Vue 3.x Proxy 实现\n```javascript\nconst reactive = new Proxy(obj, {\n  get(target, key) {\n    // 依赖收集\n    return target[key];\n  },\n  set(target, key, value) {\n    // 派发更新\n    target[key] = value;\n    return true;\n  }\n});\n```\n\n### Proxy 优势\n- 可以监听数组变化（Vue 2 需要特殊处理）\n- 可以监听对象属性的添加和删除\n- 性能更好，不需要递归遍历所有属性\n- 支持 Map、Set 等更多数据结构\n- 代码更简洁，不需要为每个属性单独定义\n\n### 响应式 API\n- `reactive()`: 创建响应式对象\n- `ref()`: 创建响应式基本类型值\n- `computed()`: 计算属性\n- `watch()`: 监听数据变化"
  }
];
window.mockData=mockData;