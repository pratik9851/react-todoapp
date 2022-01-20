import {
  ADD_TEXT,
  ADD_TODO,
  ALL_DONE,
  DELETE_ALL,
  DONE_ONE,
  REMOVE_ONE,
} from "./todoActionTypes";

const initialState = {

  todolist: [{ title: "milk", status: false, id: Math.random() }],
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
        todolist: [...state.todolist, { ...action.payload }],
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
