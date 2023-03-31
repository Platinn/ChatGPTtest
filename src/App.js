import React, { useState } from 'react';
import { sendMessage, sendMessageWithContext } from './ChatGPTAPI';
import TokenInput from './TokenInput';
import styles from './Chat.module.css';
import darkStyles from './ChatDark.module.css';
import headerStyles from './Header.module.css';
import darkHeaderStyles from './HeaderDark.module.css';
import footerStyles from './Footer.module.css';
import darkFooterStyles from './FooterDark.module.css';

const App = () => {
  const [userToken, setUserToken] = useState(sessionStorage.getItem('userToken'));
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [useContext, setUseContext] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');

    if (useContext) {
      const response = await sendMessageWithContext(updatedMessages, userToken);
      setMessages([...updatedMessages, { role: 'assistant', content: response }]);
    } else {
      const response = await sendMessage(input, userToken);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: response }]);
    }
  };

  if (!userToken) {
    return (<TokenInput setUserToken={setUserToken} />);
  }

  return (
    <div className={`${styles.chatContainer} ${darkMode ? darkStyles.chatContainer : ''}`}>
      <header className={`${headerStyles.header} ${darkMode ? darkHeaderStyles.header : ''}`}>
        <h1 className={headerStyles.title}>Symma</h1>
        <div className={`${styles.darkModeToggle} ${darkMode ? darkStyles.darkModeToggle : ''}`}>
        <label>
          Dark mode
          <input type="checkbox" onChange={toggleDarkMode} />
        </label>
      </div>
      </header>


      <div className={`${styles.chatWindow} ${darkMode ? darkStyles.chatWindow : ''}`}>
        {messages.map((message, index) => (
          <div key={index} className={styles.messageContainer}>
            <div
              className={`${message.role === 'user' ? styles.userMessage : styles.gptMessage} ${
                darkMode ? (message.role === 'user' ? darkStyles.userMessage : darkStyles.gptMessage) : ''
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <form
        className={`${styles.inputForm} ${darkMode ? darkStyles.inputForm : ''}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className={`${styles.input} ${darkMode ? darkStyles.input : ''}`}
        />
        <button type="submit">Send</button>
      </form>

      <footer className={`${footerStyles.footer} ${darkMode ? darkFooterStyles.footer : ''}`}>
        <div>Contact:</div>
        <div>paul-louis@symma.tech</div>
        <div>plb@@symma.tech</div>
        <div>© 2023 Symma Technologies. Design in California with a French touch ❤️</div>
    </footer>
</div>
);
};

export default App;
