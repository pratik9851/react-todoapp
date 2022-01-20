// lodash -> js lib -> map, filter, find
/**
 * jest -> test cases -> const sum = (a,b) => a + b , describe(''Name of test){ expect(sum(1,2)).equal(3) }
 * write reducer tests
 * write snapshot tests -> components
 * jest
 */

import {
  ADD_TEXT,
  ADD_TODO,
  ALL_DONE,
  DELETE_ALL,
  DONE_ONE,
  REMOVE_ONE,
} from "./todoActionTypes";

const initialState = {
  text: "",
  // todolist: [{ title: "milk", status: false, id: Math.random() }],
  todolist: null,
  isalldone: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todolist: [...state.todolist, { ...action.payload }], // [...state.todolist, action.payload]
      };
    case ALL_DONE:
      return {
        ...state,
        todolist: state.todolist.map((el) =>
          state.isalldone === false
            ? { ...el, status: true }
            : { ...el, status: false }
        ),
        isalldone: !state.isalldone,
      };

    case DELETE_ALL:
      return {
        ...state,
        todolist: [],
      };
    case REMOVE_ONE:
      return {
        ...state,
        todolist: state.todolist.filter((el) => el.id !== action.payload),
      };
    case DONE_ONE:
      return {
        ...state,
        todolist: state.todolist.map((el) =>
          el.id === action.payload ? { ...el, status: !el.status } : { ...el }
        ),
      };

    default:
      return { ...state };
  }
};

export default todoReducer;
