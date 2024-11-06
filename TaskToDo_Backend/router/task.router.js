const router = require("express").Router();
const ToDoController = require('../controller/task.controller')

router.post("/createToDo", ToDoController.createToDo);
// Change this to POST if you want to keep your Flutter code as is
router.post('/getUserTodoList', ToDoController.getToDoList)  
router.post("/deleteTodo", ToDoController.deleteToDo)

module.exports = router;