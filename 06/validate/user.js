/*
 * @Description:user的检验
 * @Author:
 * @Date: 2021-07-01 16:54:24
 * @LastEditTime: 2021-07-01 18:21:21
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const { body } = require("express-validator");
const validate = require("../middleware/validator");
const { User } = require("../model");
const md5 = require("../util/md5");

exports.register = validate(
  // 配置规则
  [
    body("userName").notEmpty().withMessage("用户名不能为空"),
    body("email")
      .notEmpty()
      .withMessage("邮箱不能为空")
      .isEmail()
      .withMessage("邮格式不正确")
      .bail() // 前面没错执行后面的
      .custom(async (email) => {
        const user = await User.findOne({ email });
        if (user) {
          return Promise.reject("邮箱已存在");
        }
      }),
    body("password").notEmpty().withMessage("密码不能为空"),
  ]
);
//  创建多个中间件  执行完前面再执行后面
// 先判断不会空 再判断是否存在
exports.login = [
  validate([
    body("email").notEmpty().withMessage("邮箱不能为空"),
    body("password").notEmpty().withMessage("密码不能为空"),
  ]),
  validate([
    body("email").custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select([
        "email",
        "password",
        "bio",
        "userName",
        "image",
      ]);
      if (!user) {
        return Promise.reject("用户不存在");
      }
      // 将user赋值到req上，后面的中间件可以使用
      req.user = user;
    }),
  ]),
  validate([
    body("password").custom(async (password, { req }) => {
      console.log(req.user); // 就可以将select数据展示出来
      if (md5(password) !== req.user.password) {
        return Promise.reject("密码错误");
      }
    }),
  ]),
];
