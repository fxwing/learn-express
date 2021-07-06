/*
 * @Description: 创建user  schema
 * @Author:
 * @Date: 2021-07-01 15:24:58
 * @LastEditTime: 2021-07-01 17:19:35
 * @LastEditors: 冯雄伟
 * @Usage:
 */
const mongoose = require("mongoose");
const baseModal = require("./base_modal");
const md5 = require("../util/md5");
const userSchema = new mongoose.Schema({
  ...baseModal,
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value), // 设置md5加密
    select: false, //  查询的时候不被展示
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});
module.exports = userSchema;
