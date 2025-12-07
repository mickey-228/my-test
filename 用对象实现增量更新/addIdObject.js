const fs = require('fs');
const  crypto = require('crypto');

const data= JSON.parse(fs.readFileSync('mock_data_04.json', 'utf-8'));
const obj={};
Object.entries(data).forEach(function([key,item],idx){ 
  let id=item.id ||(idx+1);
  obj[id]={
    id:id,
    hash:crypto.createHash('md5').update(JSON.stringify(item)).digest('hex'),
  };
});
fs.writeFileSync('mock_data_06.json',JSON.stringify(obj,null,2));
console.log('done',Object.keys(obj).length,'条');