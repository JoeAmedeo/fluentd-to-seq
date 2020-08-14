import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="title">
        Send some logs!
      </header>
      <div className="form">
        <input className="textInput" type="text" id="textInput" placeholder="Type a message to log..."/>
        <select className="logType" id="logType">
          <option value="info">Info</option>
          <option value="warn">Warn</option>
          <option value="error">Error</option>
        </select>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default App;
