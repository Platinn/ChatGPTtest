import React, { useState } from 'react';

const TokenInput = ({ setUserToken }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setUserToken(input);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login with OpenAI</h2>
      <label htmlFor="token-input">Please enter your OpenAI API token:</label>
      <input id="token-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TokenInput;
