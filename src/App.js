import React, { useState } from 'react';
import { sendMessage } from './ChatGPTAPI';
import styles from './Chat.module2.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');

    const response = await sendMessage(input);
    setMessages((prevMessages) => [...prevMessages, { type: 'gpt', text: response }]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div key={index} className={styles.messageContainer}>
            <div className={message.type === 'user' ? styles.userMessage : styles.gptMessage}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
