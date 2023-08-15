//import { AiFillAndroid } from 'react-icons/ai';
//import Input  from './components/Input/Input';
//import './components/Index/Index.css'
import './App.css'
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import Input from './components/AddTodo/Input/Input';
import { useState } from 'react';

function App() {
const [tasks, setTasks] =  useState([
  {id: 2, value: 'Second to do'},
  {id: 3, value: 'Third to do'}
])

  return (
    <div className='App'>
         <Header/>
         <AddTodo setTasks={setTasks} />
         {tasks.map(el => {
           return (
             <div key={el.id}>{el.value}</div>
           )
         })}
        </div>

  );
}
export default App;
