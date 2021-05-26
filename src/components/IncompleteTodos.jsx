import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onclickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDO</p>
      <ul>
        <li>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onclickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
