import React from "react";

const style = {
  backgroundColor: "#c6ffe2",
  width: "50%",
  minHeight: "350px",
  height: "auto",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onclickBack } = props;
  return (
    <div style={style} className="complete">
      <p className="title">完了のToDO</p>
      <ul>
        <li>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onclickBack(index)}>戻す</button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
