/*
 * @Description:
 * @Author:
 * @Date: 2021-06-28 11:23:29
 * @LastEditTime: 2021-07-08 11:53:48
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const { User } = require("../model/index.js");
const jwt = require("../util/jwt.js");
const { jwtSecret } = require("../config/config.default.js");

exports.login = async (req, res, next) => {
  try {
    // user 是在验证中加在req上面的
    const user = req.user.toJSON();
    const token = await jwt.sign(
      {
        id: user._id,
      },
      jwtSecret,
      {
        expiresIn: '2 day', // 设置过期时间   验证的时候  verify  内部实现的自动判断的这个过期时间
      }
    );
    delete user.password;
    res.status(200).json({ ...user, token });
  } catch (e) {
    next(e);
  }
};
exports.register = async (req, res, next) => {
  try {
    const data = req.body;
    //console.log(data);

    const user = new User(data);
    // mongoo中的处理
    const resJson = user.toJSON();
    // 返回结果中不展示密码
    delete resJson.password;
    user.save().then(() => {
      res.status(201).json(resJson);
    });
  } catch (e) {
    next(e);
  }
};
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send("获取用户，/user");
  } catch (e) {
    next(e);
  }
};
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send("更新用户，/user");
  } catch (e) {
    next(e);
  }
};
