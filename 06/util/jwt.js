/*
 * @Description:验证jsonwebtoken
 * @Author:
 * @Date: 2021-07-06 10:21:39
 * @LastEditTime: 2021-07-06 10:59:48
 * @LastEditors: 冯雄伟
 * @Usage:
 */
// 支持同步异步
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
module.exports = {
  sign: promisify(jwt.sign),
  verify: promisify(jwt.verify),
};
// 生成token
// 有回调函数是异步
// token.sign({ name: "lili" }, "ddsffds", (err, res) => {
//   if (!err) {
//     // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGlsaSIsImlhdCI6MTYyNTUzODIzMH0.rfgpDYS8XY85zeCR6ndj6Li9vvz8V_AdlZcWrxsGQ2U
//     //分别是header-payload-签名
//     console.log(res);
//   }
// });
// 验证token
// token.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGlsaSIsImlhdCI6MTYyNTUzODIzMH0.rfgpDYS8XY85zeCR6ndj6Li9vvz8V_AdlZcWrxsGQ2U",
//   "ddsffds",
//   (err, res) => {
//     if (!err) {
//       console.log(res);
//     }
//   }
// );
