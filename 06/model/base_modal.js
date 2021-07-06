/*
 * @Description:
 * @Author:
 * @Date: 2021-07-01 15:46:30
 * @LastEditTime: 2021-07-01 15:49:20
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const baseModal = {
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
};

module.exports = baseModal;
