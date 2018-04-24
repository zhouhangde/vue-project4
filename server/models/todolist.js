
// server/models/todolist.js

const db = require('../config/db.js'), 
      todoModel = '../schema/list.js'; // 引入todolist的表结构
const TodolistDb = db.Todolist; // 引入数据库

const Todolist = TodolistDb.import(todoModel); 
const getTodolistById = function* (id){  // 获取某个用户的全部todolist
  const todolist = yield Todolist.findAll({ // 查找全部的todolist
    where: {
      user_id: id
    },
    attributes: ['id','content','status'] // 只需返回这三个字段的结果即可
  });

  return todolist // 返回数据
}

const createTodolist = function* (data){ // 给某个用户创建一条todolist
  yield Todolist.create({
    user_id: data.id, // 用户的id，用来确定给哪个用户创建
    content: data.content,
    status: data.status 
  })
  return true
}

const removeTodolist = function* (id,user_id){
  yield Todolist.destroy({
    where: {
      id,
      user_id
    }
  })
  return true
}

const updateTodolist = function* (id,user_id,status){
  yield Todolist.update(
    {
      status
    },
    {
      where: {
        id,
        user_id
      }
    }
  )
  return true
}


module.exports = {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}