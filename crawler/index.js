/** MD 转 HTML***/
const fs = require('fs')
const https = require('https');
const cheerio = require('cheerio');


const Gtalk = 'https://www.gcores.com/talks/'
const GitUrl = 'https://github.com/TOKdawn/gcores-talks-Viewer/blob/main/crawler/TID.html'
var  OLD_ID = ''
const add=function(a,b){
  return a+b
}


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

function tryTID(TID){//检测TID要同时连续监测三个,因为存在一些删除的机博,占用了TID但是页面拿取为空
  let promiseList = []
  for(let i = 0; i < 3; i++){
    promiseList[i] = new Promise(resolve => {
      let url = Gtalk + (TID+i)
      https.get(url, res => {
        let html = ''
        res.on('data', data => {
          html += data
        })
        res.on('end', () => {
          console.log('GTalk请求成功',(TID+i))
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
  return promiseList
}


function donext(){
  console.log('其他逻辑')
}
async function run(){
  OLD_ID = await getTID() - 0
  console.log('获取TID成功:',OLD_ID)
  
  Promise.all( tryTID(OLD_ID + 100)).then(res => {
    if(res.reduce(add) >= 1){  //三个中有一个有效就成功
      console.log('检测TID结果:', '成功')
    }else{
      console.log('检测TID结果:', '失败')
    }
  })
  
}


run();