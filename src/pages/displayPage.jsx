import React, { useContext, useState } from "react";

import { contextt } from "../context/context";
import TaskList from '../components/tododisplay'

function DisplayPage() {

  const [todo, setTodo] = useState("");
  
const {dispatch} = useContext(contextt);

  
  return (
    
  <>

  <div>


  <div className="h-screen overflow-x-hidden mt-0 flex  items-center flex-col gap-8">
      <h1 className="text-2xl font-bold text-[#000000]">  Todo App</h1>
      
      <div className="flex justify-center px-2 items-center gap-6">
        <input
          className="  border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter a new task"
        />
        <button
          className="h-full px-7 py-1 text-sm bg-[#264653] text-white font-medium rounded-md"
          onClick={() => {
            dispatch({type:'addTodo' , payload: todo }); setTodo('')
          }}
        >
          Add
        </button>
      </div>
      <TaskList />
    </div>
  </div>
  </>
 
  );
}
export default DisplayPage;