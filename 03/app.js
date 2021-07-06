/*
 * @Description:curd增删改查
 * @Author:
 * @Date: 2021-06-17 14:57:52
 * @LastEditTime: 2021-06-24 14:48:45
 * @LastEditors: 冯雄伟
 * @Usage:
 */

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const { getDb, saveDb } = require("./db.js");
// 解析 application/json
app.use(express.json());
// 解析 application/x-www-form-urlencoded
app.use(express.urlencoded());
// 获取列表
app.get("/todo", async (req, res) => {
  try {
    const data = await getDb();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 查找
app.get("/todo/:id", async (req, res) => {
  try {
    const todo = await getDb();
    const id = req.params.id;
    const currTodo = todo.find((todo) => String(todo.id) === id);
    if (!currTodo) {
      res.status(404).end();
    }
    res.status(200).json(currTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 添加
app.post("/todo/add", async (req, res) => {
  try {
    // 获取到请求体
    const todo = req.body;
    // 验证
    if (!todo.title) {
      res.status(500).json({ error: "title is  required" });
    }
    const dbs = await getDb();
    const dbLastId = (dbs[dbs.length - 1] || { id: 0 }).id;
    todo.id = dbLastId + 1;
    dbs.push(todo);
    // 写入文件
    await saveDb(dbs);
    //返回请求
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 修改
app.patch("/todo/edit/:id", async (req, res) => {
  try {
    const todo = req.body;
    const id = req.params.id;
    const { title } = todo || {};
    if (!title) {
      res.status(500).json({ error: "title is required" });
    }
    const dbs = await getDb();
    const currDb = dbs.find((db) => parseInt(db.id) === Number.parseInt(id));
    currDb.title = title;
    await saveDb(dbs);
    res.status(200).json({ dbs });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
//  删除
app.delete("/todo/delete", async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      res.status(500).json({ error: "id is  requored" });
    }
    const dbs = await getDb();
    const db = dbs.filter((db) => +db.id !== +id);
    await saveDb(db);
    res.status(500).json(db);
  } catch (e) {
    res.status(500).end();
  }
});

app.listen(port, () => {
  console.log("服务启动成功");
});
