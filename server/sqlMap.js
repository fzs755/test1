// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into users(name, age) values (?, ?)'
  }
}

module.exports = sqlMap
