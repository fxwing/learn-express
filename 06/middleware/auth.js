/*
 * @Description: 权限校验  检查是否有token 没有token 401
 * @Author:
 * @Date: 2021-07-08 10:49:14
 * @LastEditTime: 2021-07-08 11:27:44
 * @LastEditors: 冯雄伟
 * @Usage:
 */
const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
module.exports = async(req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token ? token.split("Bearer ")[1] : null;
    // 没有身份 401
    if (!token) {
      res.status(401).end();
    }
    //console.log(token);

    // 有身份  验证是否有效
   const decodeToken = await verify(token, jwtSecret);
   console.log(decodeToken);
   next()
  } catch (error) {
    res.status(401).end();
  }
};
