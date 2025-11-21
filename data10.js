const mockData = [
   {
    "title": "前端性能优化",
    "createdAt": 1704844800000,
    "content": "## 前端性能优化\n\n前端性能优化是提升用户体验的关键，涉及资源加载、渲染性能、网络请求等多个方面。\n\n### 资源优化\n- **代码压缩和混淆**: 减小文件体积，使用 UglifyJS、Terser 等工具\n- **Tree Shaking**: 移除未使用的代码\n- **图片优化**: \n  - 使用 WebP、AVIF 等现代格式\n  - 图片懒加载（Intersection Observer）\n  - 响应式图片（srcset）\n  - 图片压缩和 CDN\n- **CDN 加速**: 使用内容分发网络加速资源加载\n- **资源预加载**: \n  - `<link rel=\"preload\">` 预加载关键资源\n  - `<link rel=\"prefetch\">` 预取未来可能需要的资源\n  - `<link rel=\"dns-prefetch\">` DNS 预解析\n\n### 渲染优化\n- **减少重排重绘**: \n  - 使用 transform 和 opacity 做动画（触发合成层）\n  - 批量 DOM 操作\n  - 使用 DocumentFragment\n- **虚拟滚动**: 只渲染可见区域的列表项\n- **代码分割**: \n  - 路由级别的代码分割\n  - 组件懒加载（React.lazy、动态 import）\n- **防抖节流**: 限制函数执行频率\n- **使用 Web Worker**: 将耗时任务移到 Worker 线程\n\n### 网络优化\n- **HTTP/2**: 多路复用、头部压缩\n- **资源压缩**: Gzip、Brotli 压缩\n- **缓存策略**: \n  - 强缓存（Cache-Control、Expires）\n  - 协商缓存（ETag、Last-Modified）\n  - Service Worker 缓存\n- **减少 HTTP 请求**: \n  - 合并文件\n  - 使用雪碧图（CSS Sprites）\n  - 内联小资源\n\n### 首屏优化\n- 关键 CSS 内联\n- 骨架屏\n- 服务端渲染（SSR）\n- 预渲染（Prerendering）\n\n### 性能监控\n- 使用 Performance API\n- Lighthouse 性能评分\n- Web Vitals 指标（LCP、FID、CLS）"
  }
];
window.mockData = mockData;