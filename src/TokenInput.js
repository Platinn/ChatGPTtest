import React, { useState } from "react";
import './TokenInputDesign.css';

const TokenInput = ({ setUserToken }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setUserToken(input);
  };

  return (
    <div className="container">
      <h1>Welcome to Symma</h1>

      <h2 className='subtible'>Discover a new way to interact with GPT and other Large Language Models</h2>

      <form onSubmit={handleSubmit} className="token-input">
        <h2>Login with OpenAI</h2>
        <div>You need to use your own OpenAI API token</div>
        <label htmlFor="token-input">Please enter your OpenAI API token:</label>
        <input
          id="token-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Need help?</h3>

      <div className="help-section">
        <div>If you have an OpenAI acount, then you have an OpenAI API key.</div>
        <div>To access your OpenAI API key :</div>
        <ol>
          <li>Log in to your OpenAI account on the OpenAI website.</li>
          <li>
            Navigate to the "API Tokens" page, which can be found under the
            "Dashboard" tab on the top menu.
          </li>
          <li>
            Here, you can view all of your API tokens, including the default
            token that was created when you signed up for your account.
          </li>
          <li>
            If you need to create a new API token, you can do so by clicking the
            "Create New API Token" button and following the prompts.
          </li>
        </ol>
        <div>It should looks like something like this "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"</div>
        <div>For privacy and security concerns, we do not store your API key.</div>
      </div>

      <h3>Who we are</h3>

      <div className="contact-info">
        <div className="contact">
          <h4>Pierre-Louis Biojout</h4>
          <div>plb@symma.tech</div>
          <a
            href="https://www.linkedin.com/in/pierre-louis-biojout-9509741aa"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact">
          <h4>Paul-Louis Venard</h4>
          <div>paul-louis@symma.tech</div>
          <a
            href="https://www.linkedin.com/in/paul-louis-venard-9269b5116/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default TokenInput;
