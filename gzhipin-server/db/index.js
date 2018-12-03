const mongoose = require ('mongoose')

module.exports = new Promise((resolve,reject) =>{
  mongoose.connect('mongdb://localhost:27017/ggzhipin',{useNewUrlParser: true})
  mongoose.connection('open',err =>{
    if(!err){
      console.log('服务器启动成功了~')
      resolve();
    }else{
      console.log(err);
      reject();
    }
  })
})