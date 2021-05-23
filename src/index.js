import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>You</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
