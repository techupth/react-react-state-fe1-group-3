import { useState } from "react";
import "./App.css";


function App() {
  const [counter, setCounter] = useState("Greeting Message");

  const handleThClick = () => {
    setCounter("สวัสดี!");
  };

  const handleEnClick = () => {
    setCounter("Hi!");
  };

  const handleChClick = () => {
    setCounter("你好!");
  };


  return (
    <div className="App">
      <div className="greeting-container">{counter}</div>
      <div className="buttons">
        <button onClick={handleThClick}>สวัสดี!</button>
        <button onClick={handleEnClick}>Hi!</button>
        <button onClick={handleChClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
