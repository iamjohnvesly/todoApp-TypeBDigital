// controllers/handlerFactory.js
const AppError = require('../utils/appError');

exports.getAll = Model =>
  async (req, res, next) => {
    const docs = await Model.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: docs
    });
  };

exports.getOne = Model =>
  async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) return next(new AppError('Document not found', 404));
    res.status(200).json({ status: 'success', data: doc });
  };

exports.createOne = Model =>
  async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: 'success', data: doc });
  };

exports.updateOne = Model =>
  async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doc) return next(new AppError('Document not found', 404));
    res.status(200).json({ status: 'success', data: doc });
  };

exports.deleteOne = Model =>
  async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return next(new AppError('Document not found', 404));
    res.status(200).json({ status: 'success', message: 'Document Deleted Successfully', data: null });
  };
