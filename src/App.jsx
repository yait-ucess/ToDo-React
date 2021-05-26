import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/inputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

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
    setIncompleteTodos(newTodos);
  };

  const onclickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onclickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="incomplete-area">
        <p className="title">未完了のToDO</p>
        <ul>
          <li>
            {incompleteTodos.map((todo, index) => {
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
    </>
  );
};
