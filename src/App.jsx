import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "快感回路",
    "人生は20代で決まる"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["確率論的思考"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDO</p>
        <ul>
          <li>
            {incompleteTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDO</p>
        <ul>
          <li>
            {completeTodos.map((todo) => {
              return (
                <div key={todo} className="list-row">
                  <p>確率論的思考</p>
                  <button>戻す</button>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};
