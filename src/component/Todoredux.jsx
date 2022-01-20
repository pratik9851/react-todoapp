import React, { Component } from "react";

import style from "./Todolist.module.css";
import {
  addText,
  addTodo,
  allDone,
  deleteAll,
  done,
  remove,
} from "../redux/todoAction";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    text: state.text,
    mytodolist: state.todolist,
    isalldone: state.isalldone,
  };
};

const mapDispatchtoPorps = (dispatch) => {
  return {
    add: (data) => dispatch(addTodo(data)),
    isDone: () => dispatch(allDone()),
    delete: () => dispatch(deleteAll()),
    remove: (data1) => dispatch(remove(data1)),
    alldone: () => dispatch(allDone()),
    done: (data2) => dispatch(done(data2)),
  };
};

class Todoclass extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handelenter = (e) => {
    if (e.key === "Enter") {
      this.props.add(this.state.text);
    }
    this.setState({ text: "" });
  };

  handelChange = (e) => {
    this.setState({
      text: e.target.value,
    });
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
        <button onClick={this.props.add.bind(this, this.state.text)}>+</button>

        <div style={{ marginTop: "15px" }}>
          <button onClick={this.props.delete}>All Delete</button>
          <button onClick={this.props.alldone}>
            {this.props.isalldone ? "all undone" : "all done"}
          </button>
        </div>

        <div>
          {this.props.mytodolist.map((e) => (
            <div
              className={`${e.status === false ? style.list1 : style.list2}`}
              key={e.id}
            >
              {e.title}
              <div>
                <button onClick={this.props.done.bind(this, e.id)}>
                  {e.status ? "undone" : " done"}
                </button>
                <button onClick={this.props.remove.bind(this, e.id)}>
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

export default connect(mapStateToProps, mapDispatchtoPorps)(Todoclass);
