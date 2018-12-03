const express = require('express')
const router  = require('./router')
const db = require('./db')
const app = new express();

(async() =>{
  await db;
  app.use(router);
})()

app.use(router);

app.listen(4000, err=>{
  if (!err) {
    console.log('服务器启动成了~请访问http://localhost:4000');
  }else{
    console.log(err);
  }
})