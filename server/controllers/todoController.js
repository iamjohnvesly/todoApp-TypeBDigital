const Todo = require('../models/todo');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

// Standard CRUD
exports.getTodos = catchAsync(factory.getAll(Todo));
exports.getTodo = catchAsync(factory.getOne(Todo));
exports.createTodo = catchAsync(factory.createOne(Todo));
exports.updateTodo = catchAsync(factory.updateOne(Todo));
exports.deleteTodo = catchAsync(factory.deleteOne(Todo));

// Custom Method Toggle done
exports.toggleDone = catchAsync(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return next(new AppError('Todo not found', 404));

  todo.done = !todo.done;
  await todo.save();

  res.status(200).json({ status: 'success', data: todo });
});
