import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer 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`,
};

export const sendMessage = async (message) => {
  const data = {
    model: 'gpt-3.5-turbo-0301',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      },
      {
        role: 'user',
        content: message,
      },
    ],
    max_tokens: 100,
    n: 1,
    temperature: 0.8,
  };

  try {
    const response = await axios.post(API_URL, data, { headers });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error:', error);
  }
};

