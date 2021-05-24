import React from "react";

const App = () => {
  const onClickBtn = () => alert();
  return (
    <>
      <h1>Hello</h1>
      <p>You</p>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
};

export default App;
