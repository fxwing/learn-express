/*
 * @Description:路由基础  req请求对象  响应对象
 * @Author:
 * @Date: 2021-06-17 11:55:21
 * @LastEditTime: 2021-06-17 14:55:02
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const { dir } = require("console");
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res
    // .clearCookie("a").clearCookie('[object Object]')
    .cookie("name", "bar", {
      expires: new Date(Date.now() +  1 * 1000), // 有效期
      maxAge: 1000, //当对于当前时间的过期时间
      httpOnly: true,
    })
    .redirect("/redirect");
});
app.get("/redirect", (req, res) => {
  res.json({ status: "redirect" });
});
app.post("/", (req, res) => {
  console.log("query", req.query);
  console.log(req.headers);
  res.send("post /");
});
app.put("/put", (req, res) => {
  res.send("put /put");
});
app.delete("/delete", (req, res) => {
  res.send("delete /delete");
});
app.listen(port, () => {
  console.log("3000启动成功");
});
