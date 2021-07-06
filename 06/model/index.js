/*
 * @Description:  // 存放链接数据库的模型
 * @Author:
 * @Date: 2021-06-28 15:33:43
 * @LastEditTime: 2021-07-01 16:22:48
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const mongoose = require("mongoose");
const { dbUrl } = require("../config/config.default");
// 链接mongodb数据库
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("数据库链接成功");
});
// 创建一个数据模型
// const Cat = mongoose.model("Cat", { name: String });
// const kity = new Cat({ name: "zzx" });
// kity.save().then((res) => console.log("meow"));
module.exports = {
  User: mongoose.model("User", require("./user.js")),
};
