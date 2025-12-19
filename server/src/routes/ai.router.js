const AiController = require('../controllers/ai.controller');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const aiRouter = require('express').Router();

aiRouter.post('/completions', verifyAccessToken, AiController.askAi);
// aiRouter.post('/tracks', verifyAccessToken, AiController.createTrackWithAi);

module.exports = aiRouter;
