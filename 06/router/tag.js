/*
 * @Description:
 * @Author:
 * @Date: 2021-06-28 11:12:53
 * @LastEditTime: 2021-06-28 11:42:54
 * @LastEditors: 冯雄伟
 * @Usage:
 */
const express = require("express");
const tagsCtrl  = require('../controller/tag')
const router = express.Router();
//获取tags
router.get("/", tagsCtrl.tags);
module.exports = router;
