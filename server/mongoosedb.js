// 导入mongoose 模块
const mongoose = require('mongoose');
// const monUrl = 'mongodb://127.0.0.1:27017/myDB1'
module.exports = function (monUrl) {
  return new Promise((resolve, reject) => {
    mongoose.connect(monUrl, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.log("连接数据库失败");
        reject(err)
      } else {
        console.log('连接数据库成功')
        resolve(1)
      }
    });
  })

}
