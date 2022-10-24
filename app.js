const express = require('express');
const morgan = require('morgan');


const userRouter = require('./routes/userRoutes');
const loanRouter = require('./routes/loanRoutes');

const app = express();
//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


// 3) ROUTES //calling routes for api url

app.use('/api/loan', loanRouter);

module.exports = app;
