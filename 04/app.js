/*
 * @Description: 中间件 顺序
 * @Author:
 * @Date: 2021-06-24 15:25:47
 * @LastEditTime: 2021-06-24 16:04:08
 * @LastEditors: 冯雄伟
 * @Usage: 中间件 从上向下执行 没有next  就卡住
 * 中间件:  就是aop 面向切面编程  在原有的代码逻辑通过拓展加入功能 不影响原有的功能   减低代码耦合度提高可复用性 提高开 发效率和可维护性
 * express 的中间件就是一个参数为req res next的函数  同一次请求生命周期中  req和res都是同一个共享的
 * 中间件 next需要掉  控制权交给下一个  不然会挂起
 */

const express = require("express");
const app = express();
app.use((req, res, next) => {
  req.foo = 'bar'
  console.log(req.method, req.url);
  next();
});
app.get("/", (req, res, next) => {
  console.log(req.foo);// bar
  res.send("/");
  next();
});

app.get("/a", (req, res) => {
  res.send("/a");
});
app.listen(3000, () => {
  console.log("服务启动成功");
});
