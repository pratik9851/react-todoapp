import React from "react";
import ReactDom from "react-dom";

import Todolist from "./Todolist"
import renderer from "react-test-renderer"
import Todoinput from "./Todoinput"


it("list component renders without crashing",()=>{
    const div=document.createElement('div')

    ReactDom.render(<Todolist mytodolist={[{title:"task",status:false,id:Math.random()}]}></Todolist>,div)
})

it("list component matches snapshot",()=>{
   const tree= renderer.create(<Todolist mytodolist={[{title:"task",status:false,id:Math.random()}]} ></Todolist>,).toJSON()
   expect(tree).toMatchSnapshot()
})

it("input component renders without crashing",()=>{
    const div=document.createElement('div')

    ReactDom.render(<Todoinput></Todoinput>,div)
})

it("input component matches snapshot",()=>{
    const tree= renderer.create(<Todoinput></Todoinput>,).toJSON()
    expect(tree).toMatchSnapshot()
 })