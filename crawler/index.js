/** MD 转 HTML***/
const fs = require('fs')
const https = require('https');
const cheerio = require('cheerio');


const Gtalk = 'https://www.gcores.com/talks/'
const GitUrl = 'https://github.com/TOKdawn/gcores-talks-Viewer/blob/main/crawler/TID.html'
const intervalList = [100,50,25,10,5,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] //加值率区间
var  OLD_ID = ''
const add=function(a,b){
  return a+b
}


function setHTML(TID){
  if(!TID){
    console.log("TID is null")    
    return 
  }
  fs.writeFile('./TID.html', parseInt(TID, 10).toString(), err => {
    if (err) {
      throw err
    } else {
      console.log("TID.html success")
      // console.log(htmlStr)
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
          let $ = cheerio.load(html);
          let DOM = $('.aat_container').children().length;
            console.log('DOM',DOM)
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

async function run(){
  OLD_ID = await getTID() 
  OLD_ID -= 0
  console.log('获取TID成功:',OLD_ID)
  let searchFlag = true;
  let addNum = 0; //初始增值
  let INI = 0; //增值刻度
  let tryFlag = true;// 检测标识
  while(searchFlag){
    addNum += intervalList[INI];
    await Promise.all(tryTID(OLD_ID + addNum)).then(res => {
      if(res.reduce(add) >= 1){  //三个中有一个有效就成功
        console.log('检测成功:',res ,OLD_ID + addNum)
        tryFlag = true
      }else{
        console.log('检测失败:',OLD_ID + addNum)
        tryFlag = false
      }
    })
    if(!tryFlag){ //如果超越边界
      addNum -= intervalList[INI]; //还原成上次增值
      INI++; //维度减小
    }
    if(!tryFlag && INI >= 9){ //结束条件
      searchFlag = false
    }
  }
  console.log('最终结果', OLD_ID + addNum);
  setHTML(OLD_ID + addNum)
  console.log('结束 结束')
}


run();