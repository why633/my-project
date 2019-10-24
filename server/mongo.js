const mongo = require('mongoose');

let dbName,
  url = 'mongodb://127.0.0.1:27017/';

class Mongo {
  static getInstance (db) {
    dbName = db || 'fishlog';
    if (!this.instance) {
      this.instance = new Mongo();
    }
    return this.instance;
  }
  constructor() {
    if (!this.client)
      this.client = '';
    this.connect();
  }
  connect () {
    return new Promise((resolve, reject) => {
      let _that = this;
      if (_that.client === '') {
        _that.client = mongo.connect(url + dbName, { useNewUrlParser: true });
        mongo.connection.on('connected', () => {
          console.log(`Mongoose connected on ${url + dbName}`);
          resolve(_that.client);
        });
        mongo.connection.on('disconnected', (err) => {
          reject(err);
        });
      } else {
        resolve(_that.client);
      }
    });
  }
  /**
    *
    * @param table : String
    * @param obj : Object
    * @returns await : {length: 长度, data: 数据}
    */
  findInTable (model, obj = {}) {
    return new Promise((resolve, reject) => {
      try {
        this.connect().then(() => {
          model.find(obj, (err, res) => {
            if (err)
              reject(err);
            else
              resolve({ length: res.length, data: res });
          });
        });
      } catch (e) {
        throw new Error(e);
      }
    });
  }
}

module.exports = Mongo;