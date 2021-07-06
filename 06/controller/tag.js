/*
 * @Description:
 * @Author:
 * @Date: 2021-06-28 11:42:16
 * @LastEditTime: 2021-06-28 11:42:17
 * @LastEditors: 冯雄伟
 * @Usage:
 */
exports.tags = async (req, res, next) => {
  try {
    res.send("/");
  } catch (e) {
    next(e);
  }
};