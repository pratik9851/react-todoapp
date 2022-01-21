import todoReducer from "./redux/todoReducer";
const state={
    todolist: [],
    isalldone: false,
  };

test("added to todolist",()=>{
    expect(todoReducer(state,{
        type: "ADD_TODO",
        payload: { title: "task", status: false, id:1 },
      })).toEqual(
        {
            todolist: [{ title: "task", status: false, id:1 }],
            isalldone: false,
          }

      )
})

const state1={
  todolist: [{ title: "task", status: false, id:1} ,{ title: "task1", status: false, id:2 },{ title: "task3", status: false, id:3 }],
  isalldone: false,
};




test("delete all",()=>{
  expect(todoReducer(state1,{
    type:"DELETE_ALL",
  })).toEqual(
  {
    todolist:[],
    isalldone:false
  }
  )
})

test("remove one",()=>{
  expect(todoReducer(state1,{
    type:"REMOVE_ONE",
    payload:1
  })).toEqual(
  {
    todolist:[{ title: "task1", status: false, id:2 },{ title: "task3", status: false, id:3 }],
    isalldone:false
  }
  )
})


test("done one",()=>{
  expect(todoReducer(state1,{
    type:"DONE_ONE",
    payload:1
  })).toEqual(
  {
    todolist:[{ title: "task", status: true, id:1} ,{ title: "task1", status: false, id:2 },{ title: "task3", status: false, id:3 }],
    isalldone:false
  }
  )
})


