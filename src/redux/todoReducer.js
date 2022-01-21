// lodash -> js lib -> map, filter, find
/**
 * jest -> test cases -> const sum = (a,b) => a + b , describe(''Name of test){ expect(sum(1,2)).equal(3) }
 * write reducer tests
 * write snapshot tests -> components
 * jest
 */
 import _ from 'lodash';
import {
  ADD_TEXT,
  ADD_TODO,
  ALL_DONE,
  DELETE_ALL,
  DONE_ONE,
  REMOVE_ONE,
} from "./todoActionTypes";

const initialState = {

  todolist: [{title:"task",status:false,id:Math.random()}],
  isalldone: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todolist: [...state.todolist, { ...action.payload }], // [...state.todolist, action.payload]
      };
    case ALL_DONE:
      return {
        ...state,
        todolist: _.map(state.todolist,(el) =>
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
        todolist: _.filter(state.todolist,(el) => el.id !== action.payload),
      };
    case DONE_ONE:
      return {
        ...state,
        todolist: _.map(state.todolist,(el) =>
          el.id === action.payload ? { ...el, status: !el.status } : { ...el }
        ),
      };

    default:
      return { ...state };
  }
};

export default todoReducer;
/*
state.todolist.map((el) =>
state.isalldone === false
  ? { ...el, status: true }
  : { ...el, status: false }
)*/