import React from "react";

const App = () => {
  const onClickBtn = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "30px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <p style={contentStyle}>You</p>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
};

export default App;
