/*
 * @Description: profiles接口  用户资料
 * @Author:
 * @Date: 2021-06-28 10:59:38
 * @LastEditTime: 2021-06-28 11:31:11
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const express = require("express");
const profilesCtrl = require("../controller/profile");
const router = express.Router();
//获取profiles
router.get("/:username", profilesCtrl.profiles);
// 关注
router.post("/:username/follow", profilesCtrl.getFollowProfiles);
// 取消关注
router.delete("/:username/follow", profilesCtrl.deleteFollowProfiles);

module.exports = router;
