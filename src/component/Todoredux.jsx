import React, { Component } from "react";

import style from "./Todolist.module.css";
import {
  addTodo,
  allDone,
  deleteAll,
  done,
  remove,
} from "../redux/todoAction";
import { connect } from "react-redux";
import Todolist from "./Todolist";
import Todoinput from "./Todoinput";

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
    deleteitem: () => dispatch(deleteAll()),
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
      console.log(e.key)
    if (e.key === "Enter") {
      this.props.add(this.state.text);
    }
    this.setState({ text: "" });
  };

  handelChange = (e) => {
     // console.log(e.target.value)
    this.setState({text:e.target.value
    });
  };

  render() {
    // use destructuring
    const {mytodolist,isalldone,add,deleteitem,remove,alldone,done}=this.props
    return (
      <div>
        <Todoinput add={add} state={this.state.text} handelChange={this.handelChange}/>

        <div style={{ marginTop: "15px" }}>
          <button onClick={deleteitem}>All Delete</button>
          <button onClick={alldone}>
            {isalldone ? "all undone" : "all done"}
          </button>
        </div>

        <Todolist mytodolist={mytodolist} done={done} remove={remove}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchtoPorps)(Todoclass);
