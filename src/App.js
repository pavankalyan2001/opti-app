import './App.css';
import React, { useState, useCallback } from "react";
import ExpensiveComponent from "./components/ExpensiveComponent";


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const increment = useCallback(() => {
    setCount(prev => (prev + 1));
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ExpensiveComponent count={count} />
    </div>
  );
}

export default App;
