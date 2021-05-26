import React from "react";

const style = {
  backgroundColor: "black",
  width: "auto",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick} className="input-btn">
        追加
      </button>
    </div>
  );
};
