# SimpleBooks
基于vue2.0
# 前言
学习了vue之后 因为对简书官网的喜爱 所以就写了个简书官网 因为是业余时间来做的 所以周期有点长 从项目布局到成大概用了一个月 目前项目已经完成 正在进行一些性能的优化
增加详细的注释   [附:简书官网http://www.jianshu.com/](http://www.jianshu.com/)
### 部分截图
#### 首页
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md1.png" />
<hr>
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md2.png"/> 

## 技术栈
<ul >
  <li >vue2.0</li>
  <li>vuex</li>
  <li>vue-router</li>
  <li>vue-cli</li>
  <li>vue-resource</li>
  <li>element-ui</li>
  <li>webpack</li>
  <li>ES6</li>
  <li>less</li>
  <li>mock数据</li>
  <li>自定义组件</li>
  <li>css3</li>
  <li>express框架搭建服务器</li>
</ul>

##  项目运行

#### 注意:由于项目已经npm run build编译打包完成 而且已经基于nodejs的一个express框架搭建好了一个server.js服务器 所以直接启动服务器 即可快速生成项目
```
git clone https://github.com/wensiyuanseven/SimpleBooks.git

cd SimpleBooks

npm install

node server.js

在地址栏中输入 localhost:9000
```
## 目标功能
- [x] 单个文章详情页面
- [x] 加载loading
- [x] 一些炫酷的动画
- [x] 登录页面
- [x] 注册页面
- [x] 下载app页面
- [x] 数据的获取
- [x] ajax 
- [x] 基于express框架写的server
- [x] 加载更多功能
- [x] 向上翻滚轮播图
- [x] 无缝轮播图
- [x] animate.css
- [x] 数据的获取
- [x] 加载更多功能
- [x] 组件的复用
- [x] 返回顶部
- [x] 自定义组件
- [x] 媒体查询
##  总结
项目写到现在，从 登录注册到、首页、下载页每个页面的详情页 一个流程走完之后、不但对vue的理解更深一层，而且对以后掌控大型项目的时候也有非常多的帮助，做一个实际的项目才能对自己有很大的提升。
# 项目布局
```
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- dist                          	 // 上线项目文件，放在服务器即可正常访问
|-- src                              // 源码目录
|   |-- store                        // vuex的状态管理
|       |-- modules                  // store模块
|       |-- action.js                // 配置actions
|       |-- getters.js               // 配置getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- types.js                // 定义常量muations名
|       |-- mutations.js             // 配置mutations
|
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|--webpack.config.js                 //webpack的配置文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```



## 项目截图
#### 首页
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md3.png" />

#### 下载页面
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md4.png" />
<hr>
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md5.png" />

#### 登录页面
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md6.png" />

#### 注册页面
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md7.png" />

#### 文章详情页面
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md8.png" />
<hr>
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md9.png" />
<hr>
<img src="https://github.com/wensiyuanseven/SimpleBooks/blob/master/src/assets/img/md10.png" />




