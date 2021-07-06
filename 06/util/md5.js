/*
 * @Description:md5.js
 * @Author:
 * @Date: 2021-07-01 17:11:15
 * @LastEditTime: 2021-07-01 17:13:03
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const crypto = require("crypto");

module.exports = (value) => {
  return crypto.createHash("md5").update(value).digest("hex");
};
