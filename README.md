# WebAppReader

> 基于 html5 和 Vue.js 的手机小说阅读器 
>> [https://carolcoral.github.io/WebAPP](https://carolcoral.github.io/WebAPP)

## 版权

>请注明代码来源和版权所属！@Copyright CarolLiu

## DownLoad 下载

* [安卓版本](https://raw.githubusercontent.com/carolcoral/WebAPP/master/WebAppReader.apk)

* [越狱苹果版本](https://raw.githubusercontent.com/carolcoral/WebAPP/master/WebAppReader.ipa)

## 技术结构：
* 前端采用 Html5 和 Vue.js 以及 Koa 框架进行开发；
* 模拟后台数据使用 EJS 模版的路由功能以及 node.js；

## 项目目录结构
```
~
|-- mock
|    |-- book
|           |-- 18218.json
|    |-- channel
|           |-- female.json
|           |-- male.json
|    |-- reader
|           |-- data
|               |-- data1.json
|               |-- data2.json
|               |-- data3.json
|               |-- data4.json
|           |-- chapter.json
|    |-- bookbacket.json
|    |-- category.json
|    |-- home.json
|    |-- rank.json
|    |-- test.json
|
|-- node_modules
|    |-- *
|
|-- service
|    |-- webAppService.js
|
|-- static
|    |-- css
|           |-- all.css
|           |-- reset.css
|           |-- index.css
|    |-- img
|           |-- back.png
|           |-- female.png
|           |-- male.png
|           |-- category.png
|           |-- rank.png
|    |-- script
|           |-- pages
|               |-- book.js
|               |-- category.js
|               |-- channel.js
|               |-- index.js
|               |-- rank.js
|               |-- search.js
|           |-- jquery.base64.js
|           |-- vue.js
|           |-- zepto.js
|           |-- jquery.jsonp.js
|    |-- test.js
|
|-- view
|    |-- include
|           |-- common-header.html
|           |-- header.html
|           |-- index-female.html
|           |-- index-hot.html
|           |-- index-free.html
|           |-- index-bottom.html
|           |-- index-recommend.html
|           |-- index-male.html
|           |-- index-self.html
|           |-- index-top.html
|    |-- book.html
|    |-- category.html
|    |-- channel.html
|    |-- female.html
|    |-- index.html
|    |-- male.html
|    |-- rank.html
|    |-- reader.html
|    |-- search.html
|    |-- test.html
|    |-- user-center.html
|
|-- app.js
|-- package.json

```

## 插件安装（已成功安装 node.js 和 npm）
1. 安装插件的配置信息已经包含在 package.json 文件中；
2. 打开控制终端，切换到项目文件下；
3. >touch package.json
4. >vim package.json
5. 复制项目总 package.json 中的内容进去；
6. >node package.json

## 启动并使用项目
1. 打开控制终端；
2. 切换路径到 WebAppReader 的当前路径下；
3. >node app.js
4. 在浏览器中输入地址：localhost:端口即可进入项目首页；
5. 端口修改在 app.js 文件中的 <code>app.listen:端口</code>进行修改

### 注意：

>当使用<code> node app.js</code>开启服务后，关闭控制终端服务会同时关闭，若想要服务一直在后台运行，请使用命令<code>node app.js forever pm2</code>

## Issues
### 1.端口占用
 * Windows 系统：
 
  1. 在控制终端输入<code>netstat -ano|findstr "端口"</code> ,查找占用了该端口的 PID；
  
  2. 输入 taskkill /f /pid 占用的pid号，强制关闭该 PID。
  
  3. 或者直接修改 app.js 中的监听端口，然后重启服务。
  
 * Ubuntu 系统：
 
  1. 终端输入<code>netstat -ap | grep 端口</code>，查询占用端口的 PID；
  
  2. 输入<code>kill -9 PID</code>终止占用端口的 PID。
