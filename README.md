###这里是dev分支
#### 文件目录结构

pages  页面
components  组件
style  样式
utils  公用的库或者插件
router 路由文件
store  全局状态管理文件
asset  资源目录

#### 预处理语言

less 
npm install less  less-loader
默认不支持 less  需要在 config webpck.config.js 把所有的sass 变成 less

#### ui框架

antd  less
npm install antd 
全局引入 100
在index.js  import '/antd/dist/antd.css'
按需引入
npm  install babel-plugin-import 安装
webpack.config.js   babel-loader
['import',{'libraryName':'antd','style':true}],
注意本项目的less 版本和antd的less 版本保持一致  2.7.3
#### 基本配置

起别名
config webpck.config.js  alias
'style':path.join(__dirname,'../src/style')
'style':path.resolve(__dirname,'../src/style')
服务器代理
在webpackDevServer.config.js中建立服务器代理
proxy:{
        '/hehe':{
          target:'http://www.baidu.com',
          changeOrigin:true,
          pathRewrite:{
            '^/hehe':''
          }        
        },
        '/api':{
          target:'http://www.baidu.com',
          changeOrigin:true,
          pathRewrite:{
            '^/api':''
          }        
        },
    },

#### 公有的库

axios  二次封装  
一次性安装--》npm install axios react-router-dom redux react-redux 
注意：vue中组件继承实例，react中，Component是属于reaction中的方法
路由
react-redux

