var utility = require('utility');
var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');
moment.locale('zh-cn'); // 使用中文

// 格式化时间
exports.formatDate = function (date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }

};

exports.validateId = function (str) {
  return (/^[a-zA-Z0-9\-_]+$/i).test(str);
};

exports.bhash = function (str, callback) {
  bcrypt.hash(str, null, null, callback);
};

exports.bcompare = function (str, hash, callback) {
  str_md5 = utility.md5(str);
  if (str_md5 == hash) {
    callback(null, true);
  } else {
    bcrypt.compare(str, hash, callback);
  }
};
