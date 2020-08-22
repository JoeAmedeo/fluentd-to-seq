import React, { useState, useMemo } from 'react';
import './App.scss';
import { sendLog } from '../services/sendLog';
import Select from "react-select";
import { ReactComponent as Arrow} from "../assets/Arrow.svg"

const App = () => {

  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");

  const sendLogRequest = async () => {
    await sendLog(message, level);
  }

  const selectionOptions = useMemo(() => {
    return [
      { value: "info", display: "Info" },
      { value: "warn", display: "Warn" },
      { value: "error", display: "Error" }
    ]
  }, []);

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
          <Select options={selectionOptions} className="logType"/>
          <button className="sendButton" onClick={sendLogRequest}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
