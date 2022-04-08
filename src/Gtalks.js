// ==UserScript==
// @name         机核网页端机组插件
// @namespace    https://github.com/TOKdawn
// @version      1.0.0
// @description  机核网页端查看机组辅助工具
// @icon         data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImdmYXMiIGRhdGEtaWNvbj0iZyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIG5hdkxheW91dF9zaWRlX2xvZ29fZyIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNiI+PGcgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMi4wMDAwMDAsIC0xNy4wMDAwMDApIiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM1LjM0ODkwNTEsNDIuMzMzMzMzMyBDMjcuNzEwOTQ4OSw0Mi4zMzMzMzMzIDIyLDM3LjExMzU1MzEgMjIsMjkuNzM2MjYzNyBMMjIsMjkuNjY2NjY2NyBDMjIsMjIuNTY3NzY1NiAyNy42MDU4Mzk0LDE3IDM1LjIwODc1OTEsMTcgQzM5LjUxODI0ODIsMTcgNDIuNTY2NDIzNCwxOC4zMjIzNDQzIDQ1LjE1OTEyNDEsMjAuNTQ5NDUwNSBMNDEuMTY0OTYzNSwyNS4zMTY4NDk4IEMzOS40MTMxMzg3LDIzLjg1NTMxMTQgMzcuNjYxMzEzOSwyMy4wMjAxNDY1IDM1LjI0Mzc5NTYsMjMuMDIwMTQ2NSBDMzEuNzA1MTA5NSwyMy4wMjAxNDY1IDI4Ljk3MjI2MjgsMjUuOTc4MDIyIDI4Ljk3MjI2MjgsMjkuNzAxNDY1MiBMMjguOTcyMjYyOCwyOS43NzEwNjIzIEMyOC45NzIyNjI4LDMzLjcwMzI5NjcgMzEuNzQwMTQ2LDM2LjUyMTk3OCAzNS42MjkxOTcxLDM2LjUyMTk3OCBDMzcuMjc1OTEyNCwzNi41MjE5NzggMzguNTM3MjI2MywzNi4xNzM5OTI3IDM5LjU1MzI4NDcsMzUuNTEyODIwNSBMMzkuNTUzMjg0NywzMi41NTQ5NDUxIEwzNC43MTgyNDgyLDMyLjU1NDk0NTEgTDM0LjcxODI0ODIsMjcuNjEzNTUzMSBMNDYsMjcuNjEzNTUzMSBMNDYsMzguNTc1MDkxNiBDNDMuNDA3Mjk5Myw0MC42OTc4MDIyIDM5Ljc5ODU0MDEsNDIuMzMzMzMzMyAzNS4zNDg5MDUxLDQyLjMzMzMzMzMgWiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+
// @author       TOKdawn
// @include      *gcores.com/*
// @require      http://cdn.staticfile.org/jquery/2.1.4/jquery.min.js
// @license      MIT
// @supportURL   https://github.com/TOKdawn/gcores-talks-Viewer/issues
// @compatible   chrome
// @compatible   firefox
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==
/* globals $, Highcharts, tippy */
(function() {
// ==UserScript==
// @description    Usercript with GM_addStyle method.
// ==/UserScript==
function GM_addStyle(css) {
  var style = document.getElementById("GM_addStyleByTOKDawn") || (function() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleByTOKDawn";
    document.head.appendChild(style);
    return style;
  })();
  var sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
 
function random(){
  return  Math.ceil(Math.random()*500); 
}
var add=function(a,b){
  return a+b
}
 
var GURL =  'https://www.gcores.com/talks/'
 
var domparser = new DOMParser()
var GTbtn = '<span class="globalActions_item GTK_btn"  target="_blank"><div><svg t="1648725115646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21619" width="24" height="24"><path d="M677.6 389.78v-82H343.21v82z m186.5 369.07H274.62c-21.71 0-39.3 18.36-39.3 41s17.59 41 39.3 41H864.1v82H274.62c-65.12 0-117.9-55.08-117.9-123v-615.1c0-45.3 35.19-82 78.6-82H864.1z" p-id="21620" fill="#f44336"></path></svg></div><p>机组</p></span>';
var GTCon = '<span class="GTK_con"><div class="GTK_content"><div class="GTK_talk_load_new">加载更新机博</div><div class="GTK_talk_list"></div><div class="GTK_talk_load_old">加载更多</div></div></span>';
var GitUrl = 'https://github.com/TOKdawn/gcores-talks-Viewer/blob/main/crawler/TID.html'
var loadFlag = false
var startTID = 1232; //已经加载的最新鸡脖 大值
var endTID = 1232; //已经加载的最旧鸡脖 小值
var topTID = { // 目前最新的鸡脖ID 更新时间 最大值
  id: 999999999,
  time: '2019-01-01 00:00:00'
}; // 目前最新的鸡脖ID
var anchorTID = {// 远程获取锚点鸡脖ID 更新时间
 id: 223644,
 time: '2019-01-01 00:00:00'
}
var carouselsList = { //存储带轮播图机组信息
}
 
//初始化组件
function onDocumentStart(){
  $('body').append($(GTbtn))
  $('body').append($(GTCon))
  $('.GTK_btn').off().on('click', showGTK)
  var time = Date.parse( new Date())
  var localTID = localStorage.getItem('GTK_TID_DATA')
  if(localTID){
    localTID = JSON.parse(localTID)
    if(time - localTID.time > 1000*60){ //超过1分钟未更新
      updataTID()
    }else{
      anchorTID.id = localTID.id-0 //拿取缓存的TID
      localTID.time = time
      localStorage.setItem('GTK_TID_DATA', JSON.stringify(localTID))//更新时间戳
    }
  }else{
    updataTID()
  }
  addStyle();
}
 
function updataTID(){
  GM_xmlhttpRequest({
    method: 'GET',
    url: GitUrl, //获取对应编号鸡脖
    timeout: 2000,
    onload: function (xhr) {
        var html = domparser.parseFromString(xhr.responseText,'text/html') 
        if(html){
          var content = html.querySelector('.blob-code-inner') //拿取git库中锚点ID
          if(content.innerText){
            anchorTID.id = content.innerText-0
            anchorTID.time = Date.parse( new Date())
            localStorage.setItem('GTK_TID_DATA', JSON.stringify(anchorTID))
          }else{
            console.log('获取gitTID失败')
          }
        }
    },
    onerror: function (xhr) {
      console.log('拿取gitID失败', xhr,'id:',anchorTID.id - i);
    },
    ontimeout: function (xhr) {
      console.log('拿取gitID超时:', xhr, 'id:',anchorTID.id - i);
    },
    onabort:function (xhr) {
      console.log('拿取gitID中止:', xhr, 'id:',anchorTID.id - i);
    }
  })
}
function addStyle(){
  //入口Btn样式
  GM_addStyle(`
  .GTK_btn {
    font-size: .875rem;
    position: fixed;
    display: block;
    right: calc(1.125rem + 0.83333vw);
    bottom: calc(10rem + 0.83333vw );
    background: var(--gray-global-action-bg);
    color: #f44336;
    cursor: pointer;
    z-index: 5;
  }`);
  GM_addStyle(`
  .GTK_con {
    position: fixed;
    display: none;
    top: 60px;
    left: 250px;
    height: calc(100vh - 60px);
    outline: red 1px solid;
    right:0px;
    background: var(--gray-global-action-bg);
    color:  var(--gray-text);
    cursor: pointer;
    z-index: 9;
    overflow: auto;
    text-align: center;
  }`);
  GM_addStyle(`
    @media (max-width: 599px){
      .GTK_con {
        left: 0px;
        top:0px;
      }
    }
  `)
  GM_addStyle(`
    @media (max-width: 1279px) and (min-width: 600px){
      .GTK_con {
        left: 75px;
      }
    }
  `)
  GM_addStyle(`
    .GTK_talk_list{
      with:100%;
      text-align: left;
     
    }
  `)
  GM_addStyle(`
    .GTK_content {  
      min-width: 350px;
      max-width: 660px;
      display: inline-block;
      text-align: center;
      
    }
  `)
  GM_addStyle(`
  .GTK_talk_load_new {  
    with:100%;
    height:30px;
    line-height:30px;
    font-size:14px;
    text-align: center;
    cursor: pointer;
  }
  `)
  GM_addStyle(`
    .GTK_talk_load_old {  
      with:100%;
      height:30px;
      line-height:30px;
      font-size:14px;
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
      
    }
  `)
  GM_addStyle(`
    .GTK_talk_load_old:hover  {  
      color: #f44336;
      background-color: #f7f7f7;
    }
  `)
  GM_addStyle(`
  .GTK_talk_load_new:hover  {  
    color: #f44336;
    background-color: #f7f7f7;
  }
`)
  GM_addStyle(`
  .GTK_talk_item {  
    border-bottom: 1px solid #f4f4f4;
  }
  `)
}
 
function showGTK() {
  $('.navLayout_nav').removeClass('gnav-hide')
  $('.pageContainer').hide() //阻止主页内容滚动影响导航栏隐藏
  $('.GTK_con').show()
  $('.navLayout').on('click',hideGTK)//进入其他标签页自动取消机组显示
  $('.GTK_talk_load_new').off().on('click', _=>{loadData('TOP')}) //向新加载
  $('.GTK_talk_load_old').off().on('click', _=>{loadData('Down')})//向旧加载
  $('.GTK_con').on('click',function(e){
    e.stopPropagation() //阻止冒泡
  })
  !loadFlag && loadData('NEW');
}
 
function hideGTK() {
  $('.pageContainer').show()
  $('.GTK_con').hide()
  $('.navLayout').unbind('click',hideGTK)
}
function loadData(type) {
 
  var DOM = $('.GTK_talk_list')
  var tklist = []
  var PromiseList = []
  var url = ''
  if(type == 'Down'){
    if( anchorTID.id - endTID > 200 ){//已经加载200条了
      $('.GTK_talk_load_old').text('无法加载更多...')
      return;
    }
  }else if(type == 'TOP'){
    if(startTID > topTID.id - 5){//最新机博不足
      $('.GTK_talk_load_new').text('已加载到最新机博...')
      return;
    }
  }else {
    startTID =  anchorTID.id
    loadFlag = true
  }
  for(var index = 0; index < 5; index++){ //每次加载5条
    PromiseList[index] = new Promise(function(resolve, reject){//构建Promise
      setTimeout((i,type)=>{
        var TID = ''
        if(type == 'Down'){
          TID = (endTID - i) //获取对应编号鸡脖
        }else if(type == 'TOP'){
          TID =  (startTID + i + 1 ) //获取对应编号鸡脖 加零减零都是零兄弟
        }else{
          TID = (anchorTID.id - i)
        }
        GM_xmlhttpRequest({
          method: 'GET',
          url: GURL + TID, //获取对应编号鸡脖
          timeout: 2000,
          onload: function (xhr) {
              var html = domparser.parseFromString(xhr.responseText.replace('visibility:hidden',' '),'text/html') //处理带图像鸡脖显示并且转换为Document
              if(html){
                var tk = html.querySelector('.aat_container')
                if(tk && tk.hasChildNodes()){
                  tklist[i] = {
                    'id': TID,
                    'dom': tk
                  }// 存储到对应鸡脖列表
                  resolve(1)
                }else{
                  resolve(0)
                }
              }else{
                resolve(0)
              }
          },
          onerror: function (xhr) {
            console.log('失败', xhr,'id:',anchorTID.id - i);
            resolve(0) //失败
          },
          ontimeout: function (xhr) {
            console.log('超时:', xhr, 'id:',anchorTID.id - i);
            resolve(0) //失败
          },
          onabort:function (xhr) {
            console.log('中止:', xhr, 'id:',anchorTID.id - i);
            resolve(0) //失败
          }
        })
      },random(),index,type) //随机延迟防止被封
    })
  }
  if(type == 'Down'){
    Promise.all(PromiseList).then(Pres => {
      if(Pres.reduce(add) >= 2){ //成功两条就算 因为有些删除的机博ID占用了但是没内容
        endTID -= 5 //更新已加载的最后一条ID
        tklist.forEach(tk => {
          var dom =$('<div class="GTK_talk_item" data-tid='+ tk.id +'></div>')
          DOM.append( dom.append(tk.dom)) //插入到最后
        })
        DOM.find('.gallery_item').css({'height':'375px','width':'563px'})
        DOM.find('.gallery').css({'height':'375px','width':'563px'})
        carouselsInit()
      }else{
        $('.GTK_talk_load_old').text('无法加载更多...')
      }
    });
  }else if(type == 'TOP'){
    Promise.all(PromiseList).then(Pres => {
      if(Pres.reduce(add) >= 2){ //成功两条就算 因为有些删除的机博ID占用了但是没内容
        startTID += 5 //更新已加载的最新一条ID
        tklist.forEach(tk => {
          var dom =$('<div class="GTK_talk_item" data-tid='+ tk.id +'></div>')
          DOM.prepend( dom.append(tk.dom)) //插入到最前面
        })
        DOM.find('.gallery_item').css({'height':'375px','width':'563px'})
        DOM.find('.gallery').css({'height':'375px','width':'563px'})
        carouselsInit()
      }else{
        topTID.id = startTID //已经查到最顶部
        $('.GTK_talk_load_new').text('已加载到最新机博...')
      }
    });
  }else {
    Promise.all(PromiseList).then(Pres => {
      if(Pres.reduce(add) >= 2){ //成功两条就算 因为有些删除的机博ID占用了但是没内容
        endTID = anchorTID.id - 5 //更新已加载的最后一条ID
        tklist.forEach(tk => {
          var dom =$('<div class="GTK_talk_item" data-tid='+ tk.id +'></div>')
          DOM.append(dom.append(tk.dom))
        })
        DOM.find('.gallery_item').css({'height':'375px','width':'563px'})
        DOM.find('.gallery').css({'height':'375px','width':'563px'})
        carouselsInit()
      }else{
        $('.GTK_talk_list').text('呀!,出错了QAQ')
      }
    });
  }
}
function carouselsInit(){
  carouselsList = {} //初始化数据
  $('.slick-arrow').off().on('click',imgChange)
}
function imgChange(){
  var button,target,TDOM,indexDOM,trackDOM;
  var nowNUM,allNUM,Tid;
  var resNUM = 1
  button = $(this);
  target = button.hasClass('slick-prev') ? 'prev' : 'next';
  TDOM =  $(this).parents('.GTK_talk_item')
  TDOM && (indexDOM = TDOM.find('.gallery_indexOf'))
  TDOM && (Tid = TDOM.attr('data-tid'))
  TDOM && (trackDOM = TDOM.find('.slick-track'))
  if(Tid && carouselsList[Tid] == undefined){ //第一次操作
    indexDOM && (nowNUM = indexDOM.find('span')[0].innerText) && (allNUM = indexDOM.find('span')[1].innerText)//拿取轮播图总数和当前编号
    carouselsList[Tid] = { //初始化
      'all':allNUM,
      'now':nowNUM,
    }
  }else{
    nowNUM = carouselsList[Tid].now;
    allNUM = carouselsList[Tid].all;
  }
  allNUM -= 0 //强制类型转换
  nowNUM -= 0 //强制类型转换
  target == 'prev' ?  nowNUM -= 1 : nowNUM += 1;
  nowNUM == 0 ? nowNUM = allNUM : nowNUM == allNUM + 1 ? nowNUM = 1 : nowNUM; //边界处理
  if( typeof nowNUM == 'number'){
    carouselsList[Tid].now = resNUM = nowNUM //更新数据
    indexDOM.find('span')[0].innerText = resNUM
    trackDOM.css('left','-'+resNUM+'00%')
  }else{
    console.log('轮播图错误TID:',Tid,'index:', nowNUM);
  }
  return 
}
onDocumentStart();
})();