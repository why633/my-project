const express = require('express');
const router = express.Router();
const Article = require('./models/articleList');


router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'home route'
  });
});

// 获取全部的Article
router.get('/getArticle', (req, res, next) => {
  Article.find({}).sort({ 'date': -1 }).exec((err, articleList) => {
    if (err) {
      console.log(err);
    } else {
      res.json(articleList);
    }
  })
});

module.exports = router;