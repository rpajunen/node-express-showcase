const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { getOr } = require('lodash/fp');
const { loginRouter } = require('./routes/loginRoute');
const { downloadRoute } = require('./routes/downloadRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(loginRouter);
app.use(downloadRoute);

app.use((req, res, next) => {
  next(createError(404, 'Endpoint does not exist'));
});

app.use((error, req, res, next) => {
  const errorStatus = getOr(500, 'status', error);
  const errorMessage = getOr('Internal server error', 'message', error);

  res.status(errorStatus).json({
    code: errorStatus,
    message: errorMessage,
  });

  next();
});

module.exports = app;
