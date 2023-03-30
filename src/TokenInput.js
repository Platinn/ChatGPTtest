import React, { useState } from "react";

const TokenInput = ({ setUserToken }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setUserToken(input);
  };

  return (
    <div>
      <h1>Welcome to Naiad Technologies!</h1>

      <p>Discover a new interface for ChatGPT</p>

      <form onSubmit={handleSubmit}>
        <h2>Login with OpenAI</h2>
        <p>You need to use your own </p>
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

      <div>
        <p>If you have an OpenAI acount, then you have an OpenAI API token.</p>
        <p>To access your OpenAI API token :</p>
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
      </div>

      <h3>Who we are</h3>

      <div>
        <h4>Pierre-Louis Biojout</h4>
        <p>email : plb@naiad-tech.com</p>
        <a
          href="https://www.linkedin.com/in/pierre-louis-biojout-9509741aa"
          target="_blank"
        >
          LinkedIn
        </a>
        <p>LinkedIn : </p>
      </div>
      <div>
        <h4>Paul-Louis Venard</h4>
        <p>email : paul-louis@naiad-tech.com</p>
        <a
          href="https://www.linkedin.com/in/paul-louis-venard-9269b5116/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default TokenInput;
