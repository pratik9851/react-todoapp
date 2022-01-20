import {
  ADD_TODO,
  ADD_TEXT,
  ALL_DONE,
  DELETE_ALL,
  REMOVE_ONE,
  DONE_ONE,
} from "./todoActionTypes";
const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: { title: data, status: false, id: Math.random() },
  };
};

const addText = (data) => {
  return {
    type: ADD_TEXT,
    payload: data.target.value,
  };
};

const allDone = () => {
  return {
    type: ALL_DONE,
  };
};

const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

const remove = (data) => {
  return {
    type: REMOVE_ONE,
    payload: data,
  };
};

const done = (data) => {
  return {
    type: DONE_ONE,
    payload: data,
  };
};

export { addText, addTodo, allDone, deleteAll, remove, done };
