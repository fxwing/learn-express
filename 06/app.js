/*
 * @Description:
 * @Author:
 * @Date: 2021-06-25 17:13:33
 * @LastEditTime: 2021-06-28 16:05:03
 * @LastEditors: 冯雄伟
 * @Usage: 配置常用中间件
 */
const express = require("express");
const morgan  = require('morgan')
const cors = require('cors')
const router  = require('./router')
const errorHandler = require('./middleware/error-handler')
const POST = process.env.POST || 3000;
require("./model/index.js");

const app = express();
app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use('/api',router)
app.use(errorHandler());
app.listen(POST, () => {
  console.log(`服务器在${POST}启动`);
});
