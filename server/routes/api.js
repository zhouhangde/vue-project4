
// server/routes/api.js

const api = require('../controllers/todolist.js');
const router = require('koa-router')();
// todolist(router); // 引入koa-router
router.get('/todolist/:id', api.getTodolist); // 定义url的参数是id,用user的auth方法引入router

module.exports = router; // 导出router规则