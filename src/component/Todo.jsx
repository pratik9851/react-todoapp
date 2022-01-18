// add eslint
import React from 'react'
import { useState } from "react";

import style from "./Todo.module.css"

export default function Todo() {
    const [text,settext]=useState('') 
    const [todolist,settodolist]=useState([]) 
    const[toggle,settoggle]=useState(false)
    const handelChange=(e)=>{
        settext(e.target.value)
    }
    const handelClick=()=>{
          if(text.trim()===""){
              alert("enter task")
          }else{
        settodolist([...todolist,{status:false,title:text,id:Math.random()}])
        settext("")}
    }
    
    
    const handelremove=(e)=>{
        
        let data = todolist.filter(
            (el) => el.title !== e.title
          );
          
          settodolist(data);
    }
    const handelDeleteall=()=>{
        settodolist([])
    }
      const handelenter=(event)=>{
          console.log(event.key)
         if(event.key==="Enter"){
              handelClick()
          }
      }

      const handeltoggle=(id)=>{
        const updatedlist=todolist.map((el)=>el.id===id?{...el,status:!el.status}:{...el})
        settodolist(updatedlist)
        
      }

      const allDone=()=>{
        const updatedlist1=todolist.map((el)=>el?{...el,status:!el.status}:{...el})
        settodolist(updatedlist1)
        settoggle(!toggle)

      }
    return (
        <div>
               <input className={style.inp} value={text} onKeyPress={(e)=> handelenter(e)} onChange={handelChange} type="text" placeholder="Enter task"/>
               <button onClick={handelClick}>+</button>
               <div style={{marginTop:"15px"}}>
                   <button onClick={handelDeleteall}>Delete all</button>
                   <button onClick={allDone}>{toggle?"all undone":"all done"}</button>
               </div>
               <div>
             {todolist.map((e)=>(
            <div className={`${e.status===false?style.list1:style.list2}`} key={e.id}>{e.title}<div><button onClick={()=>handeltoggle(e.id)}>{e.status?"undone":" done"}</button><button onClick={()=>handelremove(e)}>remove</button></div></div>
        ))}

        </div>
        </div>
    )
}
