# tmall
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

git push -u origin master

1 划分目录结构

src/asssets  资源文件夹
    img      图片
    csc      样式

src/components 公共组件
   common      通用所用项目
   content     通用当前项目

src/views      主视图

src/network    网络组件

src/router     路由

src/store      全局变量

src/common     js文件


normalize.css  统一配置
引用2个css文件 app引入 base.css ,base.css 引入normalize.css

新增vue.config.js 配置别名
加入 .editorconfig 编码格式化统一

安装vue-router   npm install vue-router --save

网站图标在public/index.html里面

安装 axios  npm install axios --save

let totalnums = []
const num1 = [20, 11, 111]
const num2 = [111,22 222]

totalnums.push()

totalnums.push(...nums1)