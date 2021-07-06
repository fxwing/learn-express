/*
 * @Description:user  的路由
 * @Author:
 * @Date: 2021-06-28 10:52:30
 * @LastEditTime: 2021-07-01 18:09:39
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const express = require("express");
const userCtrl = require("../controller/user");
const userValidator = require('../validate/user.js')

const router = express.Router();
// 登录
router.post("/users/login", userValidator.login, userCtrl.login);
// 注册
router.post(
  "/users",
  userValidator.register,
  userCtrl.register
);
// 获取用户
router.get("/user", userCtrl.getCurrentUser);
//更新用户
router.put("/user", userCtrl.updateCurrentUser);
module.exports = router;
