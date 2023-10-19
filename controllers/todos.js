// controllers/todos.js

module.exports = {
  index, show, newTodo, createTodo, 
  deleteTodo, editTodo, updateTodo
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

function editTodo(req, res) {
  //console.log('editTodo', req.body, req.params)
  const todo = Todo.getOne(req.params.id)
  res.render('todos/edit', {
    title: 'Edit To-Do',
    todo
  })
}

function updateTodo(req, res) {
  // console.log(req.body) 
  req.body.done = !!req.body.done //=== undefined ? false : true
  Todo.updateTodo(req.params.id, req.body) // The model is responsible for creating data
  //console.log(req.body, req.param.id)
  res.redirect(`/todos/${req.params.id}`) // Do a redirect anytime data is changed
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