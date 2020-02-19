import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [res, setRes] = useState('not arrive a message')
  const reqToApp = () => {
    window.postMessage('hello', "*")
  }
  
  return (
    <div className="App">
      <div className="headers">The the the ...</div>
      <div className="contents">
        <button className="reqbtn" onClick={reqToApp}>
          Req to App
        </button>
      </div>
      <div className="footer">{"from app response : " + res}</div>
    </div>
  );
}

export default App;
