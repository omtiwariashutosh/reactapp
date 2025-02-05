import React, { useState, useEffect } from "react";
import "../styles/App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const colorLevel = Math.min(255, count * 5);
    setBgColor(`rgb(${colorLevel}, ${255 - colorLevel}, 200)`);
  }, [count]);

  return (
    <div className="counter" style={{ backgroundColor: bgColor }}>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
