const mockData = [
   {
    "title": "HTTP 协议基础",
    "createdAt": 1704758400000,
    "content": "## HTTP 协议基础\n\nHTTP（HyperText Transfer Protocol）是应用层协议，用于客户端和服务器之间的通信。它是 Web 的基础，定义了请求和响应的格式。\n\n### 请求方法（Methods）\n- `GET`: 获取资源，幂等，可缓存\n- `POST`: 提交数据，创建资源，非幂等\n- `PUT`: 更新资源，幂等\n- `DELETE`: 删除资源，幂等\n- `PATCH`: 部分更新资源\n- `HEAD`: 获取响应头，不返回 body\n- `OPTIONS`: 获取服务器支持的请求方法\n\n### 状态码分类\n- **2xx 成功**: \n  - `200 OK`: 请求成功\n  - `201 Created`: 资源创建成功\n  - `204 No Content`: 成功但无返回内容\n- **3xx 重定向**: \n  - `301 Moved Permanently`: 永久重定向\n  - `302 Found`: 临时重定向\n  - `304 Not Modified`: 资源未修改，使用缓存\n- **4xx 客户端错误**: \n  - `400 Bad Request`: 请求错误\n  - `401 Unauthorized`: 未授权\n  - `403 Forbidden`: 禁止访问\n  - `404 Not Found`: 资源未找到\n- **5xx 服务器错误**: \n  - `500 Internal Server Error`: 服务器内部错误\n  - `502 Bad Gateway`: 网关错误\n  - `503 Service Unavailable`: 服务不可用\n\n### 请求和响应结构\n```\n请求行: GET /index.html HTTP/1.1\n请求头: Host: example.com\n        Content-Type: application/json\n空行\n请求体: { \"key\": \"value\" }\n```\n\n### HTTP/2 特性\n- **多路复用**: 单个连接可以并行处理多个请求\n- **头部压缩**: 使用 HPACK 算法压缩头部\n- **服务器推送**: 服务器可以主动推送资源\n- **二进制分帧**: 更高效的传输格式\n- **流控制**: 更好的流量控制机制\n\n### HTTPS\n- 在 HTTP 基础上添加 SSL/TLS 加密\n- 保证数据传输的安全性\n- 使用端口 443（HTTP 使用 80）"
  }
];
window.mockData = mockData;