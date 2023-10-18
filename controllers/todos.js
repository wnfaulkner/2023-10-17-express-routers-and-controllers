// controllers/todos.js

module.exports = {
  index, show
};

// Convention is to name the model in uppercase and singular
const Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    title: 'All To-Dos'
  });
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: 'Details:'
  });
}
