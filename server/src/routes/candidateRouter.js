const express = require('express');
const { Candidate } = require('../../db/models');
const {Stage} = require('../../db/models')
const verifyAccessToken = require('../middlewares/verifyAccessToken');


const candidatesRouter = express.Router();
candidatesRouter.get('/', async (req, res) => {
  const candidate = await Candidate.findAll({
    include:{
      model:Stage,
      attributes:['id']
    }
  }
  )
  res.json(candidate)
})

candidatesRouter.get('/:id', verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
      return res.status(400).json({ message: 'Invalid candidate id' });
    }

    const candidate = await Candidate.findByPk(id);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    return res.json(candidate);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

candidatesRouter.post('/', verifyAccessToken, async (req, res) => {
  const data = req.body;
  const addCandidate = await Candidate.create(data);
  res.status(200).json(addCandidate);
});





module.exports = candidatesRouter;
