import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>快感回路</p>
              <button>完了</button>
              <button>削除</button>
            </div>
            <div className="list-row">
              <p>人生は20代で決まる</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>確率論的思考</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
