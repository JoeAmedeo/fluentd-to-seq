import React, { useState } from 'react';
import './App.scss';
import { sendLog } from '../services/sendLog';

const App = () => {

  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  const sendLog = async () => {
    await sendLog(message, level);
  }

  return (
    <div className="app">
      <div className="panel">
        <header className="title">
          Send some logs!
        </header>
        <div className="form">
          <input 
            className="textInput" 
            type="text" id="textInput"
            placeholder="Type a message to log..."
            onChange={ (event) => setMessage(event.target.value) }
          />
          <select className="logType" id="logType" onChange={ (event) => setLevel(event.target.value) }>
            <option value="info">Info</option>
            <option value="warn">Warn</option>
            <option value="error">Error</option>
          </select>
          <button className="sendButton" onClick={}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
