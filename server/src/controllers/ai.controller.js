const aiService = require('../services/ai.service');

class AiController {
  static async askAi(req, res) {
    try {
      const { question, context } = req.body;

      if (!question) {
        return res.status(400).json({
          error: 'Question is required',
        });
      }

      const answer = await aiService.ask(question, context);

      return res.json({ answer });
    } catch (error) {
      console.error('AI ask error:', error);

      return res.status(500).json({
        error: 'AI service failed',
      });
    }
  }
}

module.exports = AiController;
