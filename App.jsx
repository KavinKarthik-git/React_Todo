import { useState } from 'react'
import { RiCheckboxBlankFill,RiCheckboxFill } from "react-icons/ri";
import { MdAddTask } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import {v4 as uuid} from "uuid";
import './App.css'
const defaultTask = [{ id:uuid(), task:"LeetCode", statuso: false},{ id:uuid(), task:"EAD", statuso: false}]
function App() {
 const [newTask,setNewTask] = useState(defaultTask)
 const [popup,setPopup] = useState(false)
 const [taskText,settaskText] = useState("")
 
 const no = "kavin"
  function handlePop(action) { action == "open" ? setPopup(true) : setPopup(false)}
  function addTask() {
    if (taskText!=="") {
      setNewTask(current => {
        return [...current, {id:uuid(),task : taskText, statuso:false}]
        })
    }
    settaskText("");
    setPopup(false);
  }
  function deleteTask(id){setNewTask(current => {return current.filter(item => item.id!==id);})}
  function checkIt(id){setNewTask(current => {
    return current.map(item => {if (item.id ===id)
      {
        return {...item,statuso:!item.statuso}
      }
      return item;
    });
  });
}
  return (
    <>
    { popup &&
    <div className ="pop-up-container" >
    <div className ="pop-up" >
      
    <p className ="pop-up-title"> Add new task</p>

      <input className ="pop-up-input" type="text" value={taskText} onChange={(e) => settaskText(e.target.value)}></input>
    <div className ="pop-up-button-container">
      <button className="pop-up-button back" onClick ={ ( ) => {handlePop("close")}}>Back</button>
      <button className="pop-up-button add" onClick ={ ( ) => {addTask() }}>Add</button>
    </div>
    </div>
    </div>
}
<div className='header-container'>
  <div className="header">
   <p className="header-title">To Do Tasks </p>
    <div className="header-add-task" > 
      <div className="header-add-task-text" onClick ={ ( ) => {handlePop("open") }}>
         <MdAddTask></MdAddTask>
          </div>
        </div>
        
      </div>
      </div>
  <div className='to-do-list'>
  

  {newTask.map(loi => {
    return(
      <div className='to-do-container' key = {loi.id}>
  <div className='to-do-checkbox'  onClick ={ ( ) => checkIt(loi.id) } >
  {loi.statuso ? <RiCheckboxFill/>:<RiCheckboxBlankFill/>}
  </div>
       <p className='to-do-text' > {loi.task}</p>
  <p className='to-do-delete'  onClick ={ ( ) => {deleteTask(loi.id) }}><MdDeleteForever></MdDeleteForever></p>
  </div>
  )
  })}
  </div>
    </>
  )
}

export default App
