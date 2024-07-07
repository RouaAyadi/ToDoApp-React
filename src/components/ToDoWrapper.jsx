/* eslint-disable no-unused-vars */
import React from 'react'
import ToDoForm from './ToDoForm'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
uuidv4();
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';

const ToDoWrapper = () => {
  const [todos,setTodos]=useState([]);
  const addTodo=(todo)=>{
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    console.log(todos);
  }
  const toggleComplete=id=>{
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          return {...todo,completed:!todo.completed}
        }
        return todo;
      })
    )
  }

  const deleteTodo=id=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const editTodo=id=>{
    setTodos(
      todos.map(todo=>{
        if(todo.id===id){
          return {...todo,isEditing:!todo.isEditing}
        }
        return todo;
      })
    )
  }

const editTask=(task,id)=>{
  setTodos(
    todos.map(todo=>{
      if(todo.id===id){
        return {...todo,task:task,isEditing:!todo.isEditing}
      }
      return todo;
    })
  
  )
}

  return (
    <div className='TodoWrapper'>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo,index)=>(
        todo.isEditing ?(
          <EditToDoForm key={index} task={todo} editTodo={editTask}/>
        ):(
        <ToDo key={index} task={todo} toggleComplete={toggleComplete}  deleteTodo={deleteTodo}  editTodo={editTodo}/>
      )))}
    </div>
  )
}

export default ToDoWrapper