import React, { useState } from 'react'
import Input from  './Input/Input'

function AddTodo ({setTasks}) {
   const [inputValue, setInputValue] =  useState('')

    const addNewTask = () => {
        setTasks([{id:new Date(), value:inputValue}])
    }


    return (
        <div>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <button onClick={addNewTask}>Add task</button>
        </div>
    )
}
export default AddTodo;