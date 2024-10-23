/* maxTokens
    Токен — это примерно одно слово или несколько символов текста. 
    Например, слово "привет" может быть одним токеном, а сложное предложение — несколькими токенами.

    gpt-3.5-turbo: Может обработать до 4,096 токенов за один запрос. Это включает и отправленные сообщения, и полученные ответы.
    gpt-4 с контекстом 8k токенов может обработать до 8,192 токенов за запрос.
    gpt-4 с контекстом 32k токенов может обработать до 32,768 токенов.

    GPT-3.5-turbo:
    $0.0015 за 1,000 входных токенов.
    $0.002 за 1,000 выходных токенов.

    GPT-4 (8k контекст):
    $0.03 за 1,000 входных токенов.
    $0.06 за 1,000 выходных токенов.

    GPT-4 (32k контекст):
    $0.06 за 1,000 входных токенов.
    $0.12 за 1,000 выходных токенов.

    резюме, краткая сводка
*/

import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Указываем API ключ
});

// Начнем с пустого массива сообщений
let messages = [
    { role: 'system', content: 'Ты помощник мудрый.' }
];

// Функция для добавления сообщений и отправки запроса
async function sendMessage(userMessage) {

    console.log('\n --Вопрошание пользователя:', userMessage);

    // Добавляем сообщение пользователя в массив
    messages.push({ role: 'user', content: userMessage });

    try {
        // Отправляем запрос с цепочкой сообщений
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
        });

        // Получаем и выводим ответ
        const reply = response.choices[0].message.content;
        console.log('Ответ помощника:', reply);

        // Добавляем ответ нейронки в цепочку сообщений
        messages.push({ role: 'assistant', content: reply });

    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message);
    }
}

// Пример использования: несколько последовательных запросов
(async () => {
    await sendMessage('Привет, что ты умеешь?');
    await sendMessage('А как ты это делаешь?');
    await sendMessage('Можешь ли ты помочь мне с кодом?');
})();

