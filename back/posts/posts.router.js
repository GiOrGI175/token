const { Router } = require('express');
const postsModel = require('../model/posts.model');

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
  const posts = await postsModel.find();
  res.json(posts);
});

module.exports = postsRouter;
