import React, { useState } from "react";

export default function EmailInputText() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <input
      className="email-input"
      value={email}
      onChange={handleChange}
    ></input>
  );
}
