/*
 * @Description:
 * @Author:
 * @Date: 2021-06-25 17:34:54
 * @LastEditTime: 2021-06-28 11:16:50
 * @LastEditors: 冯雄伟
 * @Usage: routers  配置文件
 */

const express = require("express");
const router = express.Router();
router.use(require('./user'))
router.use('/profiles',require('./profile'))
router.use('/articles',require('./article'))
router.use('/tags',require('./tag'))
module.exports = router;
