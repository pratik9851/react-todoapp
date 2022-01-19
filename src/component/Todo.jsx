import React from "react";
import { useState } from "react";

import style from "./Todo.module.css";

export default function Todo() {
  const [text, setText] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [isalldone, setIsalldone] = useState(false);
  const handelChange = (e) => {
    setText(e.target.value);
  };
  const handelAddTask = () => {
    if (text.trim() === "") {
      alert("enter task");
    } else {
      setTodolist([
        ...todolist,
        { status: false, title: text, id: Math.random() },
      ]);
      setText("");
    }
  };

  const handelremove = (e) => () => {
    let data = todolist.filter((el) => el.id !== e.id);

    setTodolist(data);
  };

  /*const handelremove = (e) => {
    let data = todolist.filter((el) => el.id !== e.id);

    setTodolist(data);
  };*/
  const handelDeleteall = () => {
    setTodolist([]);
  };
  const handelenter = (event) => {
    //console.log(event.key);
    if (event.key === "Enter") {
      handelAddTask();
    }
  };

  const handelisalldone = (id) => () => {
    const updatedlist = todolist.map((el) =>
      el.id === id ? { ...el, status: !el.status } : { ...el }
    );
    setTodolist(updatedlist);
  };

  const allDone = () => {
    setIsalldone(!isalldone);
    const updatedlist1 = todolist.map((el) =>
      /*  el ? { ...el, status: !el.status } : { ...el } */
      isalldone === false ? { ...el, status: true } : { ...el, status: false }
    );
    setTodolist(updatedlist1);
  };
  return (
    <div>
      <input
        className={style.inp}
        value={text}
        onKeyPress={handelenter}
        onChange={handelChange}
        type="text"
        placeholder="Enter task"
      />
      <button onClick={handelAddTask}>+</button>
      <div style={{ marginTop: "15px" }}>
        <button onClick={handelDeleteall}>Delete all</button>
        <button onClick={allDone}>
          {isalldone ? "all undone" : "all done"}
        </button>
      </div>
      <div>
        {todolist.map((e) => (
          <div
            className={`${e.status === false ? style.list1 : style.list2}`}
            key={e.id}
          >
            {e.title}
            <div>
              <button onClick={handelisalldone(e.id)}>
                {e.status ? "undone" : " done"}
              </button>
              <button onClick={handelremove(e)}>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
