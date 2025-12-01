const fs = require('fs');
const path = require('path');

// 定义要清理的目录
const directory = 'C:\\Users\\ASUS\\knowledge-base'; // 当前目录

// 获取目录中的所有文件
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('读取目录时出错:', err);
    return;
  }

  // 过滤出所有 .html 文件
  const htmlFiles = files.filter(file => path.extname(file) === '.html');

  if (htmlFiles.length === 0) {
    console.log('没有找到任何 .html 文件');
    return;
  }

  console.log('找到的 .html 文件:', htmlFiles);

  // 删除每个 .html 文件
  htmlFiles.forEach(file => {
    const filePath = path.join(directory, file);
    fs.unlink(filePath, err => {
      if (err) {
        console.error(`删除文件 ${file} 时出错:`, err);
      } else {
        console.log(`文件 ${file} 已删除`);
      }
    });
  });
});