import React from 'react';
import './App.scss';

const App = () => {

  


  return (
    <div className="app">
      <div className="panel">
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
    </div>
  );
}

export default App;
