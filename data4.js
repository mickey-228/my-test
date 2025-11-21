 const mockData = [
  {
    "title": "TypeScript 类型系统",
    "createdAt": 1704326400000,
    "content": "## TypeScript 类型系统\n\nTypeScript 是 JavaScript 的超集，添加了静态类型检查。它可以在编译时发现错误，提供更好的 IDE 支持，并提高代码的可维护性。\n\n### 基础类型\n- `string`: 字符串类型\n- `number`: 数字类型（包括整数和浮点数）\n- `boolean`: 布尔值类型\n- `null` 和 `undefined`: 空值类型\n- `void`: 无返回值\n- `any`: 任意类型（应避免使用）\n- `unknown`: 类型安全的 any\n\n### 数组和对象\n```typescript\nlet arr: number[] = [1, 2, 3];\nlet obj: { name: string; age: number } = { name: 'Tom', age: 20 };\n```\n\n### 高级类型\n- **联合类型**: `string | number` - 可以是多种类型之一\n- **交叉类型**: `A & B` - 同时满足多个类型\n- **接口**: `interface` - 定义对象结构\n- **类型别名**: `type` - 为类型创建别名\n- **泛型**: `<T>` - 创建可重用的类型\n- **字面量类型**: `'success' | 'error'` - 精确的字符串值\n\n### 接口示例\n```typescript\ninterface User {\n  name: string;\n  age: number;\n  email?: string; // 可选属性\n}\n\nfunction getUser(id: number): User {\n  // ...\n}\n```\n\n### 泛型示例\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output = identity<string>('hello');\n```\n\n### 优势\n- 早期发现错误\n- 更好的代码提示\n- 重构更安全\n- 自文档化代码"
  }
];
window.mockData = mockData;