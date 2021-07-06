/*
 * @Description: 并行处理验证规则
 * @Author:
 * @Date: 2021-07-01 16:49:35
 * @LastEditTime: 2021-07-01 17:02:12
 * @LastEditors: 冯雄伟
 * @Usage:
 */
const { validationResult } = require("express-validator");
module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    // 检验规则
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ error: errors.array() });
  };
};
