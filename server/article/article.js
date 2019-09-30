const express = require('express');
const Router = express.Router();
const Article = require('../models/articleList');


// 导入mongoose 模块
const mongoose = require('mongoose');

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection succuss');
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

Router.get('/', (req, res, next) => {
  // res.render('index', {
  //   title: 'home route'
  // });
  res.send('用户首页');
});
// 获取全部的Article
Router.get('/getArticle', (req, response) => {
  console.log('getArticle')
  mongoose.connect('mongodb://127.0.0.1:27017/myDB1', { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log("连接数据库失败");
      return;
    }
    console.log('连接数据库成功')
    Article.find({}, (e, res) => {
      if (e) {
        console.err(e)
        response.json(
          {
            code: -1,
            massage: '请求失败',
            data: []
          }
        )
      } else {
        console.log('find all cats suc: There have ' + res)
        response.json(
          {
            code: 200,
            massage: '请求成功',
            data: res
          }
        )
      }
    })
  });
  // Article.find((e, res) => {
  //   if (e) {
  //     console.err(e)
  //     // res.json(
  //     //   {
  //     //     code: -1,
  //     //     massage: '请求失败',
  //     //     data: []
  //     //   }
  //     // )
  //   } else {
  //     console.log('find all cats suc: There have ' + res)
  //     // res.json(
  //     //   {
  //     //     code: 200,
  //     //     massage: '请求成功',
  //     //     data: res
  //     //   }
  //     // )
  //   }
  // })

});
Router.post('/addArticle', (req, res) => {
  console.log(req.body)
  const reqData = req.body
  mongoose.connect('mongodb://127.0.0.1:27017/myDB1', { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log("连接数据库失败");
      return;
    }
    console.log('连接数据库成功')
    const newArticle = Article({
      ...reqData, articleId: ''
    })
    newArticle.save((e, res) => {
      if (e) {
        err(e)
      } else {
        console.log('save suc')
        res.json({
          code: 200,
          massage: '请求成功',
          data: []
        })
      }
    })
  });

})
module.exports = Router;