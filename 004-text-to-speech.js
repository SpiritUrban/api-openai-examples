import OpenAI from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';
import data from './book.js';
// Импортируем необходимые библиотеки

// Загружаем переменные окружения
dotenv.config();

// Инициализируем OpenAI с API-ключом
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const maxLength = 4096; // Максимальная длина текста для GPT-4
const part = 3;

const text = data[part-1]; // Берем текст из массива book.js

if (text.length > maxLength) {
    console.log('Длина текста:', text.length);
    console.error('Слишком длинное сообщение. Максимальная длина:', maxLength);
    process.exit(1);
}

// Сообщения для диалога
const messages = [
    { role: "system", content: "Просто повтори мое сообщение и ни слова больше не говори" },
    { role: "user", content: text },
];

// Функция для генерации текста и аудио
async function generateAudio(messages) {
    try {
        // Генерация текста через GPT
        const chatCompletion = await client.chat.completions.create({
            model: 'gpt-4',
            messages,
            temperature: 0.9,
        });

        // Получаем ответ модели
        const responseText = chatCompletion.choices[0].message.content;
        console.log('Ответ:', responseText);

        // Генерация аудиофайла из текста
        const audioResponse = await client.audio.speech.create({
            model: 'tts-1',
            input: responseText,
            voice: 'alloy', // Доступные: alloy, echo, fable, onyx, nova, shimmer
        });

        // Скачиваем и сохраняем аудиофайл
        const audioPath = `./book-${part}.mp3`;
        const buffer = Buffer.from(await audioResponse.arrayBuffer());
        fs.writeFileSync(audioPath, buffer);
        console.log(`Аудиофайл сохранён как ${audioPath}`);
    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message);
    }
}

// Запуск функции
generateAudio(messages);
