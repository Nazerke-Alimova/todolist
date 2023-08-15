import React  from "react";
import './Input.css'

function Input ({inputValue, setInputValue}) {
    const onChange = (e) => {
    const value = e.currentTarget.value
    setInputValue(value)
    }


    return (
            <input 
            value={inputValue}
            onChange={onChange}
            type={'text'} 
            placeholder={'What is the task today?'}/>
    )
}
export default Input;