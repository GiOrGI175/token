const express = require('express');
const conectToDb = require('./db/conectToDb');
const authRouter = require('./auth/auth.router');
const userRouter = require('./users/users.router');
const postsRouter = require('./posts/posts.router');
const isAuth = require('./middleware/isAuth.middleware');
const app = express();
app.use(express.json());

conectToDb();

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/posts', isAuth, postsRouter);

app.listen(3001, () => {
  console.log('run on: http://localhost:3001');
});
