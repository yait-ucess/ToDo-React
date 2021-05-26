import React from "react";

export const CompleteTodos = (props) => {
  const {} = props;
  return (
    <div className="complete-area">
      <p className="title">完了のToDO</p>
      <ul>
        <li>
          {completeTodos.map((todo, index) => {
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
