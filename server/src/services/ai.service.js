require('dotenv').config();
const { GigaChat } = require('gigachat');

class AiService {
  constructor() {
    this.client = new GigaChat({
      model: 'GigaChat-2',
      credentials: process.env.GIGACHAT_KEY,
    });
  }

  async ask(question) {
    const response = await this.client.chat({
      messages: [{ role: 'user', content: question }],
    });

    return response.choices[0].message.content;
  }

  async generateTrackName(context) {
    const response = await this.client.chat({
      messages: [
        {
          role: 'system',
          content: `
Твоя задача быть ассистентом HR-менеджера
Помощник по вакансиям, отвечает на вопросы и помогает ориентироваться, анализировать тональности текстов, чтобы понимать настроение в переписке и отзывах, переводчик, который дает естественный перевод, а также генерацию изображений — если это пригодится для визуальных материалов и персонализации.
Примеры:
«Сформируй описание вакансии Senior Node.js»
«Сократи описание до 5 пунктов»
«Адаптируй вакансию под Telegram»`,
        },
        { role: 'user', content: context },
      ],
    });

    return response.choices[0].message.content;
  }
}

// const aiService = new AiService();

module.exports = new AiService();
