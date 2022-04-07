/** MD 转 HTML***/

const fs = require('fs')
const marked = require('marked')

fs.readFile('./TID.md', 'utf8', (err, data) => {
  if (err) {
    throw err
  } else {
    // 使用marked方法，将md格式的文件转化为html格式
    let htmlStr = marked(data.toString());
    // 将转化的html格式的字符串，写入到新的文件中
    fs.writeFile('./TID.html', htmlStr, err => {
      if (err) {
        throw err
      } else {
        console.log("TID.html success")
        console.log(htmlStr)
      }
    })
  }
})