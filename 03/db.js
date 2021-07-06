/*
 * @Description: 封装为promise的readFile
 * @Author:
 * @Date: 2021-06-17 15:33:03
 * @LastEditTime: 2021-06-17 16:34:25
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const dbPath = path.resolve(__dirname, "./db.json");

module.exports.getDb = async () => {
  const db = await readFile(dbPath, "utf8");
  const { todo } = JSON.parse(db);
  return todo;
};
module.exports.saveDb = async (db) => {
  const data = { todo: db, user: {} };
  await writeFile(dbPath, JSON.stringify(data, null, 2));
};
