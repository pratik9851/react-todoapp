import React from 'react'
import style from "./Todolist.module.css";

export default function Todoinput({add,state,handelChange}) {
    return (
        <div>
              <input
          className={style.inp}
          value={state}
          type="text"
          onChange={handelChange}
          // onKeyPress={this.handelenter.bind(this)}
          placeholder="Enter task"
        />
        <button onClick={()=>add(state)}>+</button>
            
        </div>
    )
}
