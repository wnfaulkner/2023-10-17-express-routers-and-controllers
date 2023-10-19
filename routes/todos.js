var express = require('express');
var router = express.Router();

module.exports = router;

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// All actual paths begin with "/todos"

// GET /todos
router.get('/', todosCtrl.index);

// GET /todos/new
router.get('/new', todosCtrl.newTodo)

// GET /todos/:id
router.get('/:id', todosCtrl.show)

// GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.editTodo)

// PUT /todos/:id/
router.put('/:id', todosCtrl.updateTodo)

// POST /todos
router.post('/', todosCtrl.createTodo)

// DELETE /todos
router.delete('/:id', todosCtrl.deleteTodo)
