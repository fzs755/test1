// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into testusers(user_name, password) values (?, ?)'
  }
}

module.exports = sqlMap
