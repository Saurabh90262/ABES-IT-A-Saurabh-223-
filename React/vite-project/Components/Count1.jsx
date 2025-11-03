import React, { useState } from "react";

function Count1() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function changeColor() {
    const color = "red";
    document.body.style.backgroundColor = color;
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={changeColor}>Red</button>
    </div>
  );
}

export default Count1;
