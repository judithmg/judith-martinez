import React, { useState } from "react";

import "./App.css";

function Button() {
  let value = 0;
  const [counter, setCounter] = useState(value);
  console.log("before rendering: " + counter);
  console.log("before rendering value: " + value);

  return (
    <div className="App">
      <button type="button" onClick={() => setCounter(counter + 1)}>
        MY COUNTER IS : {counter}
      </button>
    </div>
  );
}

export default Button;
