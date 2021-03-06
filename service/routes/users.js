/**
 * node后台 接口路径 路由
 */
var express = require("express");
var router = express.Router();
//单页面
var postRegUser = require("./Interface/postRegUser");
var getRegUserList = require("./Interface/getRegUserList");
var postLogin = require("./Interface/postLogin");
var postLinkData = require("./Interface/postLinkData");
var getLinkData = require("./Interface/getLinkData");
var getLinkClass = require("./Interface/getLinkClass");
//多页面
var postUser = require("./Interface/postUser");
var getUserList = require("./Interface/getUserList");
/* 分享云接口 */
router.post("/postRegUser", postRegUser.postRegUser); // 注册用户
router.post("/postLogin", postLogin.postLogin); // 登录
router.post("/postLinkData", postLinkData.postLinkData); // 分享链接
router.get("/getRegUserList", getRegUserList.getRegUserList); // 查询注册用户
router.get("/getLinkData", getLinkData.getLinkData); // 查询注册用户
router.get("/getLinkClass", getLinkClass.getLinkClass); // 查询链接类型

/* 多页面接口案例 */
router.post("/postUser", postUser.postUser); // 传入用户
router.get("/getUserList", getUserList.getUserList); // 查询用户

module.exports = router;
