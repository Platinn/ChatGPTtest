import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/chat/completions';


export const sendMessage = async (message, userToken) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userToken}`,
  };

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

// WARNING : messages can be infinite lenght -> risk on tokens and credits for user
export const sendMessageWithContext = async (messages, userToken) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userToken}`,
  };

  const data = {
    model: 'gpt-3.5-turbo-0301',
    messages: messages,
    max_tokens: 100,
    n: 1,
    temperature: 0.8,
  };
  try {
    const response = await axios.post(API_URL, data, { headers });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error:', error);
    return "Your API key is invalid. Reload the page and set it properly.";
  }
};