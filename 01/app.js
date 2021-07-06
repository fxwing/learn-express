/*
 * @Description:express 创建一个web服务器
 * @Author:
 * @Date: 2021-06-17 11:36:06
 * @LastEditTime: 2021-06-17 11:45:38
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`server running  at http://localhost:${port}`);
});
