const express = require('express');
const {Stage} = require('../../db/models')
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const stagesRouter = express.Router();

stagesRouter.get('/', async (req, res) => {
  const stage = await Stage.findAll()
  res.json(stage)
})
module.exports = stagesRouter