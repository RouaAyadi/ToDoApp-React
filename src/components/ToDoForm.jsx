/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'

const ToDoForm = (props) => {
  const [value,setValue]=useState('');
  const handleChange=(e)=>{
    setValue(e.target.value);
  }

  const handleSubmit=e=>{
    e.preventDefault();
    console.log('submitted');
    props.addTodo(value);
    setValue('');
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='what is the next task ?' value={value} onChange={handleChange}/>
      <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}

export default ToDoForm