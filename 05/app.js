/*
 * @Description:
 * @Author:
 * @Date: 2021-06-24 16:09:15
 * @LastEditTime: 2021-06-24 16:19:35
 * @LastEditors: 冯雄伟
 * @Usage:
 */
const express = require("express");
const app = express();
// 应用程序级别中间件  不做任何要求
// app.use((req, res, next) => {
//   req.foo = "bar";
//   console.log(req.method, req.url);
//   next();
// });
// 不限制请求方法  限制请求地址
//  支持多个中间件处理函数
app.use(
  "/a",
  (req, res, next) => {
    console.log(req.hostname);
    next();
  },
  (req, res, next) => {
    console.log(req.url);
    next();
  }
);

app.get("/a", (req, res) => {
  res.send("/a");
});
app.listen(3000, () => {
  console.log("服务启动成功");
});
