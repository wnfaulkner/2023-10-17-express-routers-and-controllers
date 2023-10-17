// controllers/todos.js

// Convention is to name the model in uppercase and singular
const Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
  });
}

module.exports = {
    index, show
};
