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
      { value: "info", label: "Info" },
      { value: "warn", label: "Warn" },
      { value: "error", label: "Error" }
    ]
  }, []);

  const customStyles: any = {
    option: (provided: any, state: { isSelected: any; isFocused: any; }) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#424242" : "#303030",
      color: "#ffffff",
    }),
    control: (provided: any, _: any) => ({
      ...provided,
      backgroundColor: "#424242",
      height: "100%",
    }),
    singleValue: (provided: any, _: any) => ({
      ...provided,
      color: "#ffffff",
    })
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
          <Select options={selectionOptions} onChange={(option: any) => setLevel(option?.value)} styles={customStyles} components={{ IndicatorSeparator: () => null }}/>
          <button className="sendButton" onClick={sendLogRequest}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
