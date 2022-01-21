import React from 'react'
import style from './todo1.module.css'

export default function Todolist({mytodolist,done,remove}) {
    return (
        <div>
            <div>
          {mytodolist.map((e) => (
            <div
              className={`${e.status === false ? style.list1 : style.list2}`}
              key={e.id}
            >
              {e.title}
              <div>
                <button onClick={()=>done(e.id)}>
                  {e.status ? "undone" : " done"}
                </button>
                <button onClick={()=>remove( e.id)}>
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
            
        </div>
    )
}


