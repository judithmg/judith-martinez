import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Button from "./Button";
import Forms from "./Forms";

export function YesNoQuestion(props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <input value="Yes" />
      <input value="No" />
    </div>
  );
}

ReactDOM.render(
  <>
    {/*  <Header /> */}
    <Forms />
    <YesNoQuestion prompt="How are you?" />,
  </>,
  document.getElementById("root")
);
