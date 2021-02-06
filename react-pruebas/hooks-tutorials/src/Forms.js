import React, { useState } from "react";

function Forms() {
  const [email, setEmail] = useState("22d52f");
  const [list, setList] = useState([]);

  function getValue(value) {
    addEmail(value);
  }

  function addEmail(text) {
    setList([...list, text]);
  }

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type="button" onClick={() => getValue(email)}>
        CLICKME
      </button>
      <ul>
        {list.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Forms;
