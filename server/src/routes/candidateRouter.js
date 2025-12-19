const express = require('express');
const { Candidate, Stage, CandidatesStages } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const candidatesRouter = express.Router();

candidatesRouter.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.findAll({
      include: {
        model: Stage,
        attributes: ['id', 'title'],
      },
      order: [[Stage, 'id', 'ASC']],
    });

    res.json(candidates);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

candidatesRouter.get('/stage', async (req, res) => {
  const a = await Candidate.findAll({
    include: Stage,
  });
  res.status(201).json(a);
});

candidatesRouter.get('/:id', verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
      return res.status(400).json({ message: 'Invalid candidate id' });
    }

    const candidate = await Candidate.findByPk(id, {
      include: {
        model: Stage,
        attributes: ['id', 'title'],
      },
    });

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    return res.json(candidate);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

candidatesRouter.post('/', async (req, res) => {
  try {
    const { name, surname, position, phone } = req.body;

    if (!name || !surname || !position || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const candidate = await Candidate.create({
      name,
      surname,
      position,
      phone,
    });

    const newStage = await Stage.findOne({
      where: { title: 'Новые' },
    });

    if (!newStage) {
      return res.status(500).json({
        message: 'Stage "Новые" not found.',
      });
    }

    await candidate.addStage(newStage);

    const candidateWithStages = await Candidate.findByPk(candidate.id, {
      include: {
        model: Stage,
        attributes: ['id', 'title'],
      },
    });

    res.status(201).json(candidateWithStages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при создании кандидата' });
  }
});

candidatesRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { position, phone } = req.body;
  const refreshCondidates = await Candidate.update(
    {
      position,
      phone,
    },
    {
      where: { id },
    },
  );
  // CandidatesStages.create({ candidateId: id, stageId });
  res.status(201).json(refreshCondidates);
});

candidatesRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const candidate = await Candidate.findByPk(id);

    if (!candidate) {
      return res.status(404).json({ message: 'Кандидат не найден' });
    }
    await CandidatesStages.destroy({ where: { candidateId: id } });
    await candidate.destroy();

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ошибка при удалении кандидата' });
  }
});
module.exports = candidatesRouter;
