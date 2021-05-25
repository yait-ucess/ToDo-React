import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDO</p>
        <ul>
          <li>
            <div>
              <p>快感回路</p>
              <button>完了</button>
              <button>削除</button>
            </div>
            <div>
              <p>人生は20代で決まる</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のToDO</p>
        <ul>
          <li>
            <div>
              <p>確率論的思考</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}