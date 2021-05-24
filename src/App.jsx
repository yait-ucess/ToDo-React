import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickBtn = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfulMessage color="blue">You</ColorfulMessage>
      <ColorfulMessage color="pink">Are</ColorfulMessage>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
};

export default App;
