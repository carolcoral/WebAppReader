# WebAPP

> 基于 html5 和 Vue.js 的手机小说阅读器 
>> [https://carolcoral.github.io/WebAPP](https://carolcoral.github.io/WebAPP)

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
