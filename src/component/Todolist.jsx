import React from 'react'
import styles from "./Todolist.module.css"

export default function Todolist({list,settodolist}) {
    const handelremove=(e)=>{
        let data = list.filter(
            (el) => el.title !== e.title
          );
          settodolist(data);
    }
    return (
        <div>
             {list.map((e)=>(
        <div className={styles.list1} id={Math.random()}>{e.title}<div><button>{e.status?"undone":" done"}</button><button onclick={handelremove(e)}>remove</button></div></div>
        ))}

        </div>
    )
}
