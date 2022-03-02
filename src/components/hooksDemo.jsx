import React, { useState, useEffect } from "react";


import "../../src/style.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(
      `I'm inside the useEffect function. The current count is ${count}`
    );

    return () => {
      console.log(
        `I'm removing anything that was set up above! The last count was ${count}.`
      );
    };
  }, [count]);

  // Value in array as second argument is what we want useEffect to keep track of

  function handleColorChange() {
    const nextColor = color === "blue" ? "purple" : "blue";
    setColor(nextColor);
  }

  return (
    <div>
      <button className="increase" onClick={handleIncrease}>
        Increase
      </button>
      <button className="changecolor" onClick={handleColorChange}>
        {" "}
        Change Color
      </button>
      <button className="decrease" onClick={handleDecrease}>
        Decrease
      </button>
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

function HooksDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button className="showhide" onClick={() => setVisible(!visible)}>
        Show/Hide the Counter Component
      </button>

      {visible && <Counter />}
    </div>
  );
}

export default HooksDemo;
