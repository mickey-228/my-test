 const mockData = [
 {
    "title": "CSS Flexbox 布局",
    "createdAt": 1704153600000,
    "content": "## Flexbox 布局\n\nFlexbox 是一种一维布局方法，用于在容器中分配空间和对齐项目。它提供了更灵活、更强大的布局能力，特别适合处理未知或动态尺寸的元素。\n\n### 容器属性（父元素）\n- `display: flex`: 启用 flex 布局\n- `flex-direction`: 主轴方向（row, column, row-reverse, column-reverse）\n- `justify-content`: 主轴对齐方式（flex-start, center, space-between, space-around）\n- `align-items`: 交叉轴对齐方式（stretch, center, flex-start, flex-end）\n- `flex-wrap`: 是否换行（nowrap, wrap, wrap-reverse）\n- `align-content`: 多行时的交叉轴对齐\n\n### 项目属性（子元素）\n- `flex-grow`: 放大比例，默认为 0\n- `flex-shrink`: 缩小比例，默认为 1\n- `flex-basis`: 初始大小\n- `flex`: 简写属性（grow shrink basis）\n- `align-self`: 单个项目的对齐方式\n\n### 适用场景\n- 导航栏和菜单\n- 卡片布局\n- 居中元素（水平和垂直）\n- 响应式布局\n- 等分布局\n\n### 示例\n```css\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```"
  }
];
window.mockData=mockData;
  