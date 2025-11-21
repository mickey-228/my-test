document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
  
  const data = window.mockData;
  const catalogList = document.getElementById('catalog-list');
  
  动态生成目录项
  data.forEach(item => { 
    const node = document.createElement('li');
    node.className = 'node';
    node.textContent = item.title;
    catalogList.appendChild(node);
  });
 
  const nodes = document.querySelectorAll('.node');
  const contentDisplayArea = document.querySelector('.content-display-area');
  const crumbsElement = document.querySelector('.crumbs');
  
  // 初始化第一个节点为选中状态
  if(nodes.length > 0){ 
    nodes[0].classList.add('active');
    crumbsElement.textContent = data[0].title;
    contentDisplayArea.innerHTML = parseMarkdown(data[0].content);
  }
  
  nodes.forEach((node, index) => { 
    node.addEventListener('mouseenter', function(e){
      const date = new Date(data[index].createdAt);
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      tooltip.textContent = formattedDate;
      tooltip.style.display = 'block';
    });
    
    node.addEventListener('mousemove', function(e){
      tooltip.style.left = (e.pageX + 10) + 'px';
      tooltip.style.top = (e.pageY + 10) + 'px';
    });
    
    node.addEventListener('mouseleave', function(){
      tooltip.style.display = 'none';
    }); 
    
    node.addEventListener('click', function() { 
      nodes.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
      crumbsElement.textContent = data[index].title;
      contentDisplayArea.innerHTML = parseMarkdown(data[index].content); 
    });
  });
});

function parseMarkdown(markdown) { 
  let html = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  
  // 处理列表
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  
  // 处理代码块
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // 处理粗体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // 处理段落和换行
  html = html.replace(/\n\n/g, '</p><p>');
 html = html.replace(/^(.+)$/gm, '<p>$1</p>');
  
  return html;
}