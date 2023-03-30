import React, { useState } from 'react';
import { sendMessage, sendMessageWithContext } from './ChatGPTAPI';
import styles from './Chat.module2.css';

// Get the token from session storage or prompt the user to enter it
let userToken = sessionStorage.getItem("userToken");
if (!userToken) {
  userToken = prompt("Please enter your OpenAI token");
  if (userToken) {
    sessionStorage.setItem("userToken", userToken);
  }
}

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [useContext, setUseContext] = useState(true); // useContext is now a state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    //setMessages([...messages, { role: 'user', content: input }]);
    //setInput('');

    const newMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');

    if (useContext) {

      const response = await sendMessageWithContext(updatedMessages, userToken);
      setMessages([...updatedMessages, { role: 'assistant', content: response }]);

    } else {
      //no memory of previous chats
      const response = await sendMessage(input, userToken);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: response }]);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div key={index} className={styles.messageContainer}>
            <div className={message.role === 'user' ? styles.userMessage : styles.gptMessage}>
              {message.content}
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
