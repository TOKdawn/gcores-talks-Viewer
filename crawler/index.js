/** MD 转 HTML***/
const fs = require('fs')
const https = require('https');
const cheerio = require('cheerio');


const Gtalk = 'https://www.gcores.com/talks/'
const GitUrl = 'https://github.com/TOKdawn/gcores-talks-Viewer/blob/main/crawler/TID.html'
var  OLD_ID = ''


function setHTML(TID){
  if(!TID){
    console.log("TID is null")
    return 
  }
  fs.writeFile('./TID.html', TID, err => {
    if (err) {
      throw err
    } else {
      console.log("TID.html success")
      console.log(htmlStr)
    }
  })
}

function getTID(){
  return new Promise((resolve) => {
    console.log('开始获取TID')
    https.get(GitUrl, res => {
      let html = ''
      res.on('data', data => {
        console.log('请求中:',data)
        html += data
      })
      res.on('end', () => {
        console.log('GIT请求成功')
        let $ = cheerio.load(html);
        let id = $('.blob-code-inner').text();
        if(id){
          resolve(id)
        }else{
          console.log('HTML解析错误')
          resolve(null)
        }
      })
    })
  })
}

function tryTID(TID){
  let url = Gtalk + TID
  return new Promise((resolve) => {
    console.log('开始获取GTalk')
    https.get(url, res => {
      let html = ''
      res.on('data', data => {
        html += data
      })
      res.on('end', () => {
        console.log('GTalk请求成功')
        let $ = cheerio.load(html);
        let DOM = $('.aat_container');
        if(DOM){
          resolve(1)
        }else{
          resolve(0)
        }
      })
    })
  })
}

function donext(){
  console.log('其他逻辑')
}
async function run(){
  OLD_ID = await getTID()
  console.log('获取TID成功:',OLD_ID)
  
}


run();