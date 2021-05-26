import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "auto",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
