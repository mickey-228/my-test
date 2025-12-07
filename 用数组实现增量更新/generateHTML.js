// require是node中用来引入模块的函数，这里引入了fs模块，fs是node内置的文件系统模块，
// 用于读取和写入文件
const fs = require('fs');
// fs.readFileSync是个方法，用于读取文件内容，它接受两个参数：文件路径和编码格式
// 这里读取了当前目录下的mock_data_02.json文件，使用utf-8编码格式读取
const jsonData = fs.readFileSync('mock_data_03.json', 'utf-8');
// console.log(jsonData);
// JSON.parse 是一个JavaScript内置方法，用于将JSON格式的字符串解析为JavaScript对象。这里将从文件中读取的JSON字符串解析为一个JavaScript对象，方便后续操作。
const data = JSON.parse(jsonData);

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function parseMarkdown(markdown) { 
  let html = markdown;
  
  // 处理代码块（优先处理，避免其他规则影响代码块内容）
  html = html.replace(/```(\w+)?\s*([\s\S]*?)```/g, (match, lang, code) => {
    // 去除首尾空白字符并转义HTML特殊字符
    const cleanCode = escapeHtml(code.trim());
    return `<pre><code>${cleanCode}</code></pre>`;
  });
  
  // 处理标题（确保能匹配所有标题格式）
  html = html.replace(/^#{1,6}\s+(.*)$/gim, (match, content) => {
    const level = match.match(/^#+/)[0].length;
    return `<h${level}>${content.trim()}</h${level}>`;
  });
  
  // 处理无序列表
  html = html.replace(/^\s*[-*+]\s+(.*?)(?=\n|$)/gim, '<li>$1</li>');
  // 处理有序列表
  html = html.replace(/^\s*\d+\.\s+(.*?)(?=\n|$)/gim, '<li>$1</li>');
  
  // 将连续的<li>包装成<ul>或<ol>
  html = html.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');
  
  // 处理粗体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  
  // 处理斜体
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  
  // 处理行内代码
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');
  
  // 处理链接
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // 处理段落
  html = html.replace(/\n{2,}/g, '</p><p>');
  html = html.replace(/^(.+)$/gm, '<p>$1</p>');
  
  // 清理多余的段落标签和空白行
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p>(<h\d.*?>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul.*?>)<\/p>/g, '$1');
  html = html.replace(/<p>(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<pre.*?>)/g, '$1');
  html = html.replace(/(<\/pre>)<\/p>/g, '$1');
  html = html.replace(/<p>(<code.*?>)/g, '$1');
  html = html.replace(/(<\/code>)<\/p>/g, '$1');
  
  return html;
}

// function generateFileName(title) {
//   return title
//     .replace(/[^\w\u4e00-\u9fa5]/g, '_')  // 只保留字母数字、下划线和中文
//     .replace(/_+/g, '_')                  // 合并多个下划线
//     .replace(/^_|_$/g, '')                // 去除首尾下划线
//     + '.html';
// }

function generateFileName(id) {
  return `article_${id}.html`;
}

function generateCatalogItems(data, currentTitle) {
  return data
    .filter(item => item.title && item.content)
    .map(item => {
      const fileName = generateFileName(item.id);  // 改为使用 id 而非 title
      const activeClass = item.title === currentTitle ? ' active' : '';
      return `<div class="node${activeClass}"><a href="${fileName}">${escapeHtml(item.title)}</a></div>`;
    })
    .join('');
}

// 添加错误处理
try { 
  data.forEach(element => {
    
    if (!element.title || !element.content) {
      console.warn('Skipping element with missing title or content:', element);
      return;
    }
    
    const catalogItems = generateCatalogItems(data, element.title);
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(element.title)}</title>
  <link rel="stylesheet" href="./惠惠惠的个人知识库.css">
</head>
<body> 
<div class="bar">
   <div class="logo-container">
    <a class="logo">惠惠惠的个人知识库</a>
  </div> 
  </div>
<div class="container">
  <div class="catalog">
    ${catalogItems}
  </div>
  <div class="content">
    <div class="content-display-area">
      <h1>${escapeHtml(element.title)}</h1>
      <div class="content-main">
        ${parseMarkdown(element.content)}
      </div>
    </div>
  </div>
</div>
<script src="知识库.js"></script>
</body>
</html>`;

    const htmlFileName = generateFileName(element.id);  // 改为使用 id 而非 title
    fs.writeFileSync(htmlFileName, htmlContent, 'utf-8');
  });
  console.log('HTML files generated successfully.');
} catch (error) {
  console.error('Error generating HTML files:', error);
}