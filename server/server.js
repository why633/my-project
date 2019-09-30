var express = require('express')
const bodyParser = require('body-parser')
var articleRouter = require('./article/article')
const app = express()
const server = require('http').Server(app)
//设置跨域访问
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200); /*让options请求快速返回*/
  } else {
    next();
  }
})
app.use(bodyParser.json())
app.use('/article', articleRouter)

server.listen(9000, () => {
  console.log('数据库服务已经成功启动，监听的端口号是9000')
})