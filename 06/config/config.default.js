/*
 * @Description:
 * @Author:
 * @Date: 2021-06-25 17:13:52
 * @LastEditTime: 2021-07-06 11:01:39
 * @LastEditors: 冯雄伟
 * @Usage:
 */
// 后面是当前的数据库
const dbUrl = "mongodb://127.0.0.1:27017/currentDb";
// jwt secret  jwt的密钥
const secret = "827c2357-e927-425c-83df-77d527145612";
module.exports.dbUrl = dbUrl;
module.exports.jwtSecret = secret;
