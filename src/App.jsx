import React, { useState } from "react";
import "./App.css";

function App() {

  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  
  const handleButtonClick = (newMessage) => {
    setGreetingMessage(newMessage);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
       
        <button onClick={() => handleButtonClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleButtonClick("Hi!")}>Hi!</button>
        <button onClick={() => handleButtonClick("你好!")}>你好!</button>
      </div>
    </div>
  );
}
export default App;