/*
 * @Description:错误处理中间件
 * @Author:
 * @Date: 2021-06-28 11:50:21
 * @LastEditTime: 2021-07-01 15:53:22
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const util = require("util");

module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: util.format(err),
    });
  };
};
