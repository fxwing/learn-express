/*
 * @Description:
 * @Author:
 * @Date: 2021-06-28 11:27:59
 * @LastEditTime: 2021-06-28 11:30:11
 * @LastEditors: 冯雄伟
 * @Usage:
 */
exports.profiles = async (req, res, next) => {
  try {
    res.send("/:username");
  } catch (e) {
    next(e);
  }
};

exports.getFollowProfiles = async (req, res, next) => {
  try {
    res.send("/:username/follow");
  } catch (e) {
    next(e);
  }
};

exports.deleteFollowProfiles = async (req, res, next) => {
  try {
    res.send("/:username/follow");
  } catch (e) {
    next(e);
  }
};