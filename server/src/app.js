const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokensRouter');
const app = express();
const verifyAccessToken = require('./middlewares/verifyAccessToken');
const candidatesRouter = require('./routes/candidateRouter')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
});

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);

app.get('/api/test', verifyAccessToken, (req, res) => {
  console.log(res.locals.user);
  res.sendStatus(204);
});
app.use('/api/candidates', candidatesRouter);

module.exports = app;
