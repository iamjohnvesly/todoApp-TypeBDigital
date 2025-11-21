const express = require("express");
const cors = require('cors');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
// const mongoSanitize = require('express-mongo-sanitize');
// const xssClean = require('xss-clean');
// const hpp = require('hpp');
// const cookieParser = require('cookie-parser');
const todoRoutes = require("./routes/todoRoutes");

// const AppError = require('./utils/appError');

const app = express();

// Set Security HTTP headers
// app.use(helmet({ contentSecurityPolicy: false }));

// if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Limit requests from same IP
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, try again in an hour'
// });
// app.use('/api', limiter);


// Body parser
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
// app.use(cookieParser());

// Data sanitization
// app.use(mongoSanitize()); // prevent NoSQL injection
// app.use(xssClean()); // prevent XSS attacks

// Prevent parameter pollution
// app.use(hpp({
//   whitelist: ['done'] // allow duplicate query params for these if needed
// }));

// Enable CORS
app.use(cors());

// Add request time middleware
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/todos', todoRoutes);

// Handle unhandled routes
// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

module.exports = app;