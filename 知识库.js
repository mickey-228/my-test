document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
  
<<<<<<< HEAD
  1
=======
  const data = window.mockData;
>>>>>>> 42663d1814ab324eccdaeb7d302887f4fa03ab42
  const catalogList = document.getElementById('catalog-list');
  
  // 动态生成目录项
  // data.forEach(item => { 
  //   const node = document.createElement('li');
  //   node.className = 'node';
  //   node.textContent = item.title;
  //   catalogList.appendChild(node);
  // });
 
<<<<<<< HEAD
  // const nodes = document.querySelectorAll('.node');
  // const contentDisplayArea = document.querySelector('.content-display-area');
  const crumbsElement = document.querySelector('.crumbs');
  
  // if(nodes.length > 0 && data.length > 0) {
  //   nodes[0].classList.add('active');
  //   // crumbsElement.textContent = data[0].title;
  //   contentDisplayArea.innerHTML = parseMarkdown(data[2].content);
  // }

  // window.onload=function(){
  //  const currentUrl=window.location.href;
  //  const currentPage=currentUrl.split("/").pop().split(".")[0];
  // const menuItems=document.querySelectorAll('.menu-item');
  // menuItems.forEach(item=>{
  //   if(item.textContent==currentPage){
  //     item.classList.add('active');
  //   }
  //   else{
  //     item.classList.remove('active');
  //   }
  // });
  // };
  nodes.forEach((node, index) => { 
    // node.addEventListener('mouseenter', function(e){
    //   const date = new Date(data[index].createdAt);
    //   const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    //   tooltip.textContent = formattedDate;
    //   tooltip.style.display = 'block';
    // });
=======
  const nodes = document.querySelectorAll('.node');
  const contentDisplayArea = document.querySelector('.content-display-area');
  const crumbsElement = document.querySelector('.crumbs');
  
  // 初始化第一个节点为选中状态
  if(nodes.length >0){ 
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
>>>>>>> 42663d1814ab324eccdaeb7d302887f4fa03ab42
    
    node.addEventListener('mousemove', function(e){
      tooltip.style.left = (e.pageX + 10) + 'px';
      tooltip.style.top = (e.pageY + 10) + 'px';
    });
    
    node.addEventListener('mouseleave', function(){
      tooltip.style.display = 'none';
    }); 
    
<<<<<<< HEAD
//     node.addEventListener('click', function(e) { 
     
//        document.querySelector('.active').classList.remove('active')
//       //  nodes[1].classList.add('active');
//       // crumbsElement.textContent = data[index].title;
//       //  contentDisplayArea.innerHTML = parseMarkdown(data[0].content);
//       // contentDisplayArea.innerHTML = parseMarkdown(data[5].content); 
//  });
    });
    });



// function parseMarkdown(markdown) { 
//   let html = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
//   html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
//   html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
//   html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  
//   // 处理列表
//   html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
//   html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
  
//   // 处理代码块
//   html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
//   // 处理粗体
//   html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
//   // 处理段落和换行
//   html = html.replace(/\n\n/g, '</p><p>');
//  html = html.replace(/^(.+)$/gm, '<p>$1</p>');
  
//   return html;
// }
=======
    // node.addEventListener('click', function(e) { 
    //   // e.preventDefault();
    //   nodes.forEach(n => n.classList.remove('active'));
    //   this.classList.add('active');
    //   crumbsElement.textContent = data[index].title;
    //   contentDisplayArea.innerHTML = parseMarkdown(data[index].content); 
    // });
    // 替换原有的 nodes.forEach 循环中的点击事件
catalogList.addEventListener('click', function(e) {
  const node = e.target.closest('.node');
  if (node) {
    e.preventDefault();
    const index = Array.from(nodes).indexOf(node);
    nodes.forEach(n => n.classList.remove('active'));
    node.classList.add('active');
    crumbsElement.textContent = data[index].title;
    contentDisplayArea.innerHTML = parseMarkdown(data[index].content);
  }
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
  html = html.replace(/^(.+)$/gm, '<p>$1</p>');
  
  return html;
}
>>>>>>> 42663d1814ab324eccdaeb7d302887f4fa03ab42
