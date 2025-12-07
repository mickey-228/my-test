const fs=require('fs');
const crypto = require('crypto');

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
  
  // 处理代码块
  html = html.replace(/```(\w+)?\s*([\s\S]*?)```/g, (match, lang, code) => {
    const cleanCode = escapeHtml(code.trim());
    return `<pre><code>${cleanCode}</code></pre>`;
  });
  
  // 处理标题
  html = html.replace(/^#{1,6}\s+(.*)$/gim, (match, content) => {
    const level = match.match(/^#+/)[0].length;
    return `<h${level}>${content.trim()}</h${level}>`;
  });
  
  // 处理列表
  html = html.replace(/^\s*[-*+]\s+(.*?)(?=\n|$)/gim, '<li>$1</li>');
  html = html.replace(/^\s*\d+\.\s+(.*?)(?=\n|$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');
  
  // 处理粗体和斜体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  
  // 处理行内代码
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');
  
  // 处理链接
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // 处理段落
  html = html.replace(/\n{2,}/g, '</p><p>');
  html = html.replace(/^(.+)$/gm, '<p>$1</p>');
  
  // 清理多余标签
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p>(<h\d.*?>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul.*?>)<\/p>/g, '$1');
  html = html.replace(/<p>(<\/ul>)<\/p>/g, '$1');
  html = html.replace(/<p>(<pre.*?>)/g, '$1');
  html = html.replace(/(<\/pre>)<\/p>/g, '$1');
  
  return html;
}

// function generateFileName(title) {
//   return title
//     .replace(/[^\w\u4e00-\u9fa5]/g, '_')
//     .replace(/_+/g, '_')
//     .replace(/^_|_$/g, '')
//     + '.html';
// }

function generateFileName(id) {
  return `article_${id}.html`;
}

function generateCatalogItems(data, currentTitle) {
  return data
    .filter(item => item.title && item.content)
    .map(item => {
      const fileName = generateFileName(item.id);
      const activeClass = item.title === currentTitle ? ' active' : '';
      return `<div class="node${activeClass}"><a href="${fileName}">${escapeHtml(item.title)}</a></div>`;
    })
    .join('');
}

function incrementalGenerate() {
const arrNew=JSON.parse(fs.readFileSync('mock_data_03.json', 'utf-8'));
const mock_data_05=JSON.parse(fs.readFileSync('mock_data_05.json', 'utf-8'));
const newArr=arrNew.map((it,idx)=>({
  ...it,
  id:it.id||idx+1,  
  hash:require('crypto').createHash('md5').update(JSON.stringify(it)).digest('hex'),
}));

let updateCount=0;

mock_data_05.forEach(oldIt => { 
  const newIt = newArr.find(newIt => newIt.id === oldIt.id);
  if (!newIt || newIt.hash !== oldIt.hash) {
      // 旧文件被删除或 hash 变 → 删除旧文件
      const oldFileName=generateFileName(oldIt.id);
      if(fs.existsSync(oldFileName)){
        fs.unlinkSync(oldFileName);
      }
      updateCount++;
    }
});
newArr.forEach(it => {
  const oldId = mock_data_05.find(oldIt => oldIt.id === it.id);
  if (!oldId||oldId.hash !== it.hash) {
    updateCount++;
    const catalogItems = generateCatalogItems(newArr, it.title);
  const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(it.title)}</title>
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
      <h1>${escapeHtml(it.title)}</h1>
      <div class="content-main">
        ${parseMarkdown(it.content)}
      </div>
    </div>
  </div>
</div>
<script src="知识库.js"></script>
</body>
</html>`;
      
      const htmlFileName = generateFileName(it.id);
      fs.writeFileSync(htmlFileName, htmlContent, 'utf-8');
      console.log(`更新了${updateCount}条数据`);
    }
  });
}
console.time('增量生成');  
incrementalGenerate();
console.timeEnd('增量生成');