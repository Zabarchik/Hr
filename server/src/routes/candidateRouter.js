const express = require('express');
const { Candidate } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const candidatesRouter = express.Router();

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
