import OpenAI from 'openai';
import dotenv from 'dotenv';

// Загружаем переменные окружения из .env
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Используем ключ API из .env
});

async function getResponse() {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Роскажи о своем API' }],
    });
    console.log(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error('Ошибка:', error.response ? error.response.data : error.message);
  }
}

getResponse();
