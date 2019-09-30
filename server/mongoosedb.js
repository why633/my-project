//1.引入模块
const mongoose = require("mongoose");
//2.引入参数
const dbSetting = {
  url: "mongodb://localhost:27017",
  dbName: "tiankong"
}
//2.连接数据库
mongoose.connect(dbSetting.url + "/" + dbSetting.dbName, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log("连接数据库失败");
    return;
  }
  console.log("连接数据库成功");
});
//3.创建一个schema，规定集合内数据的结构和类型，创建规则，规则中不设置，不能插入成功；
var carSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String
});
//4.根据规则，创建一个类，相当于数据库中的一个集合
var Car = mongoose.model("cars", carSchema);//集合名为cars
//5.类的静态属性来操作数据库的增删改查
module.exports = {
  //1.增
  //1）插入多条数据：单个数据可以是json对象，多个数据放在数组中；
  insertMany: function (aryjson, callback) {
    Car.insertMany(aryjson, function (err, docs) {
      callback(err, docs);
    })
  },
  //2.删
  //1）删除满足条件的一条数据：
  deleteOne: function (filter, callback) {
    Car.deleteOne(filter, function (err, doc) {
      callback(err, doc);
    })
  },
  //2）删除满足条件的所有数据：
  deleteMany: function (filter, callback) {
    Car.deleteMany(filter, function (err, doc) {
      callback(err, doc);
    })
  },
  //3.改
  //1）修改满足条件的一条数据：
  updateOne: function (filter, updatejson, callback) {
    Car.updateOne(filter, updatejson, function (err, doc) {
      callback(err, doc);
    })
  },
  //2）修改满足条件的多条数据：
  updateMany: function (filter, updatejson, callback) {
    Car.updateMany(filter, updatejson, function (err, doc) {
      callback(err, doc);
    })
  },
  //4.查
  //1）查找，排序，分页
  find: function (filter, sortcur, callback) {
    //sortcur:{"sort":{"age":-1},page,pageamount}
    if (arguments.length === 2) {
      callback = sortcur;
      sortcur = {};
    }
    var sort = sortcur.sort || {};
    var page = Number(sortcur.page) || 0;
    var pageamount = Number(sortcur.pageamount) || 0;
    Car.find(filter, function (err, docs) {
      callback(err, docs);
    }).sort(sort).limit(pageamount).skip(page * pageamount);
  },
  //2）获取满足条件的数据总个数
  count: function (filter, callback) {
    Car.countDocuments(filter, function (err, count) {
      callback(err, count);
    })
  }
};