import React, { Component } from "react";
import style from "./Todolist.module.css";

export default class Todoclass extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todolist: [],
      isalldone: false,
    };
  }
  handelChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handelAddTask = () => {
    if (this.state.text === "") {
      alert("enter task");
    } else {
      this.setState({
        todolist: [
          ...this.state.todolist,
          { status: false, title: this.state.text, id: Math.random() },
        ],
      });
    }
    this.setState({ text: "" });
  };
  handelenter = (e) => {
    if (e.key === "Enter") {
      this.handelAddTask();
    }
  };

  handelDeleteall = () => {
    this.setState({ todolist: [] });
  };
  alldone = () => {
    this.setState({ isalldone: !this.state.isalldone });

    const updatedlist1 = this.state.todolist.map((el) =>
      this.state.isalldone === false
        ? { ...el, status: true }
        : { ...el, status: false }
    );

    this.setState({ todolist: updatedlist1 });
  };

  handelremove = (e) => {
    let data = this.state.todolist.filter((el) => el.id !== e.id);

    this.setState({ todolist: data });
  };
  handelisalldone = (id) => {
    const updatedlist = this.state.todolist.map((el) =>
      el.id === id ? { ...el, status: !el.status } : { ...el }
    );
    this.setState({ todolist: updatedlist });
  };

  render() {
    return (
      <div>
        <input
          className={style.inp}
          value={this.state.text}
          type="text"
          onChange={this.handelChange.bind(this)}
          onKeyPress={this.handelenter.bind(this)}
          placeholder="Enter task"
        />
        <button onClick={this.handelAddTask.bind(this)}>+</button>

        <div style={{ marginTop: "15px" }}>
          <button onClick={this.handelDeleteall.bind(this)}>All Delete</button>
          <button onClick={this.alldone.bind(this)}>
            {this.state.isalldone ? "all undone" : "all done"}
          </button>
        </div>

        <div>
          {this.state.todolist.map((e) => (
            <div
              className={`${e.status === false ? style.list1 : style.list2}`}
              key={e.id}
            >
              {e.title}
              <div>
                <button onClick={this.handelisalldone.bind(this, e.id)}>
                  {e.status ? "undone" : " done"}
                </button>
                <button onClick={this.handelremove.bind(this, e)}>
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
