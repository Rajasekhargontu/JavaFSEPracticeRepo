import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const sayHello = () => alert("Hello! This is a static message.");
  const handleIncrease = () => {
    increment();
    sayHello();
  };
  const handleDecrease = () => setCount(count - 1);
  const sayWelcome = (msg) => alert(msg);
  const handleOnPress = () => alert("I was clicked");

  return (
    <div style={{ marginBottom: "32px" }}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      <button onClick={handleOnPress}>OnPress</button>
    </div>
  );
}

export default Counter;