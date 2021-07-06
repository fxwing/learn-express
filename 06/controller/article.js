/*
 * @Description:
 * @Author:
 * @Date: 2021-06-28 11:31:54
 * @LastEditTime: 2021-06-28 11:39:51
 * @LastEditors: 冯雄伟
 * @Usage:
 */
exports.articles = async (req, res, next) => {
  try {
    res.send("/");
  } catch (e) {
    next(e);
  }
};
exports.articlesFeeds = async (req, res, next) => {
  try {
    res.send("/feed");
  } catch (e) {
    next(e);
  }
};
exports.getCurrentActicle = async (req, res, next) => {
  try {
    res.send("/:slug");
  } catch (e) {
    next(e);
  }
};
exports.addArticle = async (req, res, next) => {
  try {
    res.send("/");
  } catch (e) {
    next(e);
  }
};
exports.updateCurrentArticle = async (req, res, next) => {
  try {
    res.send("/:slug");
  } catch (e) {
    next(e);
  }
};
exports.deleteArticle = async (req, res, next) => {
  try {
    res.send("/:slug");
  } catch (e) {
    next(e);
  }
};
exports.addComment = async (req, res, next) => {
  try {
    res.send("/:slug/comments");
  } catch (e) {
    next(e);
  }
};
exports.getCurrentComment = async (req, res, next) => {
  try {
    res.send("/:slug/comments");
  } catch (e) {
    next(e);
  }
};
exports.deleteComment = async (req, res, next) => {
  try {
    res.send("/:slug/comments/:id");
  } catch (e) {
    next(e);
  }
};
exports.favorite = async (req, res, next) => {
  try {
    res.send("/:slug/favorite");
  } catch (e) {
    next(e);
  }
};
exports.deleteFavorite = async (req, res, next) => {
  try {
    res.send("/:slug/favorite");
  } catch (e) {
    next(e);
  }
};