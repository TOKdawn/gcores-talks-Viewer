# 🎮   机核网页端机组插件

<!-- 
<img src="https://raw.githubusercontent.com/swsoyee/psnine-enhanced-version/master/screenshots/homepage.png" width="300" align="right" style="max-width: 50%"> -->

## 🔧 功能介绍

进入首页点击右下角红色机组按钮即可进入机组页面,

点击头部栏或者侧边栏即可返回机核主站.

由于是非官方组件,锚点每小时更新,

所以默认加载非最新机博,可以点击 [加载更新机博] 去加载更新的机博.


## 💻 可用平台
||Chrome|FireFox|Edge|Maxthon|QQ浏览器|360浏览器|
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| | <img src="https://raw.githubusercontent.com/swsoyee/psnine-night-mode-CSS/master/icon/chrome-512.png" width="64px"></img>| <img src="https://raw.githubusercontent.com/swsoyee/psnine-night-mode-CSS/master/icon/512px-Firefox_Logo%2C_2017.svg.png" width="58px"></img> | <img src="https://raw.githubusercontent.com/swsoyee/psnine-night-mode-CSS/master/icon/edge.png" width="64px"></img>|<div align="center"> <img src="https://raw.githubusercontent.com/swsoyee/psnine-night-mode-CSS/master/icon/Maxthon.png" width="58px"></img></div> |<div align="center"> <img src="https://raw.githubusercontent.com/swsoyee/psnine-night-mode-CSS/master/icon/qq.jpg" width="64px"></img></div> |  <div align="center"><img src="https://raw.githubusercontent.com/swsoyee/psnine-night-mode-CSS/master/icon/360 Security Browser.png" width="60px"></img></div>
|<div align="center">Tampermonkey</div>|<div align="center">🉑</div>|<div align="center">🉑</div>|<div align="center">🉑</div>||<div align="center">🉑</div>|<div align="center">🉑</div>|
|<div align="center">Violentmonkey</div>|<div align="center">🉑</div>|<div align="center">🉑</div>||<div align="center">🉑</div>||<div align="center">🉑</div>|

若启用了脚本后无明显效果请确认**浏览器**和**插件**都处于最新版状态。如无法成功使用请到[`提issue`](https://github.com/TOKdawn/gcores-talks-Viewer/issues)报告。

## 📥 安装地址

[https://greasyfork.org/zh-CN/scripts/442976](https://greasyfork.org/zh-CN/scripts/442976)

## ❕ 附注

第一次安装会提示跨域访问GitHub,请点击一直允许

如果网络环境无法裸连GitHub可能会出现无法获取ID的情况,待后续修复

## 👥 项目贡献者

<a href="https://github.com/TOKdawn/gcores-talks-Viewer/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TOKdawn/gcores-talks-Viewer" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## 🗣 readme

核心逻辑为油猴脚本 /src/Gtalk.js

锚点ID更新脚本为 /crawler/index.js

Action 配置 /.GitHub/workflow/github-actions-demo.yml

脚本通过访问Git库TID.html内容获取锚点ID后顺序获取机博进行数据拼接生成界面

脚本定点自启动通过类二分算法查询机核主站,确定更新锚点机博ID

GitHub做存储,GitHub Action管理执行脚本 

成功在脱离服务器的情况下实现组件功能(才不是因为我手头没有服务器呢)

python均为无用代码最后脚本还是拿node写的(Python异步好怪,赞美node)

### 更新记录
- v1.10 🐞增加查看评论功能
- v1.05 🐞增加浏览位置缓存功能
- v1.04 🐞增加单次获取机博数量为(10),增加可浏览机博总量(800)
- v1.03 🐞编写GitHub Action实现更新锚点脚本整点自启动
- v1.02 🐞更新获取锚点ID脚本
- v1.01 🐞修复启动编辑器后机组按钮被遮挡问题
- v1.0 👑发布
  
</details>
