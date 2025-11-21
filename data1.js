const mockData = [
  {
     "title": "React Hooks 基础",
    "createdAt": 1704067200000,
    "content": "## React Hooks\n\nHooks 是 React 16.8 引入的新特性，允许在函数组件中使用状态和生命周期。它解决了类组件中代码复用困难、逻辑分散等问题。\n\n### 常用 Hooks\n- `useState`: 管理组件状态，返回状态值和更新函数\n- `useEffect`: 处理副作用，如数据获取、订阅、DOM 操作等\n- `useContext`: 使用上下文，避免 props 层层传递\n- `useMemo`: 性能优化，缓存计算结果\n- `useCallback`: 缓存函数引用，避免子组件不必要的重渲染\n- `useRef`: 获取 DOM 引用或保存可变值\n\n### 使用示例\n```javascript\n// useState 示例\nconst [count, setCount] = useState(0);\nconst increment = () => setCount(count + 1);\n\n// useEffect 示例\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n  return () => {\n    // 清理函数\n  };\n}, [count]); // 依赖数组\n```\n\n### Hooks 规则\n1. 只能在函数组件顶层调用\n2. 不能在条件语句、循环中调用\n3. 自定义 Hooks 必须以 `use` 开头"
  },
];
window.mockData=mockData;