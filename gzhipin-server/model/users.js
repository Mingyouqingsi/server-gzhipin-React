const mongoose = require ('mongoose')

const usersSchema = new mongoose.Schema({
  //创建约束对象

})

module.exports = mongoose.model('Users',usersSchema);