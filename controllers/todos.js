// controllers/todos.js

module.exports = {
  index, show, newTodo, createTodo, deleteTodo
};

// Convention is to name the model in uppercase and singular
const Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    title: 'All To-Dos'
  });
}

function newTodo(req, res) {
  res.render('todos/new', {
    title: 'New To-Do'
  })
}

function createTodo(req, res) {
  // console.log(req.body) 
  Todo.appendNewTodo(req.body) // The model is responsible for creating data
  res.redirect('/todos') // Do a redirect anytime data is changed
}

function show(req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    title: 'Details:'
  });
}

function deleteTodo(req, res) {
  Todo.removeTodo(req.params.id)
  res.redirect('/todos')
}
