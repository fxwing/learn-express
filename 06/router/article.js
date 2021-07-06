/*
 * @Description:  articles 路由
 * @Author:
 * @Date: 2021-06-28 11:04:14
 * @LastEditTime: 2021-06-28 11:41:52
 * @LastEditors: 冯雄伟
 * @Usage:
 */
const express = require("express");
const articleCtrl = require("../controller/article");
const router = express.Router();
//获取文章
router.get("/", articleCtrl.articles);
//feed
router.get("/feed", articleCtrl.articlesFeeds);
//获取
router.get("/:slug", articleCtrl.getCurrentActicle);
// 创建
router.post("/", articleCtrl.addArticle);
// 更新
router.put("/:slug", articleCtrl.updateCurrentArticle);
// 删除
router.delete("/:slug", articleCtrl.deleteArticle);
// 添加备注
router.post("/:slug/comments", articleCtrl.addComment);
// 获取备注
router.get("/:slug/comments", articleCtrl.getCurrentComment);
// 删除备注
router.delete("/:slug/comments/:id", articleCtrl.deleteComment);
// 收藏文章
router.post("/:slug/favorite", articleCtrl.favorite);
// 取消收藏文章
router.delete("/:slug/favorite", articleCtrl.deleteFavorite);

module.exports = router;
