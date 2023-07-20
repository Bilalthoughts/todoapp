import React, { useContext, useEffect, useState } from "react";
import { contextt } from "../context/context";




const TaskList = () => {


  const [status,setStatus] = useState('');
  const [bol,setbol] = useState(false);
  
  const {state,dispatch} = useContext(contextt);
  const handleDelete = ()=>{
  
    dispatch({type: 'complete' ,payload: status}) }
  useEffect(()=>{
  
 
  handleDelete();
},[bol])

  return (
    <div className="w-full text-center mx-auto px-3  flex items-center flex-col gap-5">
      <h1 className={`head uppercase font-bold text-2xl `}>Task List </h1>

      {state.map((e)=>{
        
        return(
         
          <div key={e.id} className="w-full myshadow md:w-1/2 tackback  px-3 py-5 rounded-xl">
        <div className="flex  flex-wrap md:flex-nowrap justify-between items-center mb-5">
          <li className={`list-none  text-left break-normal ${e.complete === true ? 'text-red-700  font-md text-sm ' : 'text-black text-lg font-bold'} `}>
           {e.addTodo}
          </li>
          <div className="flex mt-2 gap-3">
            <button onClick={()=>{setStatus(e.id); setbol(!bol)}} className="comp text-white px-2 py-2 font-medium rounded-md">
              {e.complete === true ? 'Completed' : 'Mark as'}
            </button>
            <button onClick={()=> dispatch({type: 'deleteTodo', payload: e.id})} className="delete text-white px-2 py-2 font-medium rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
          
        )
      })}
      
      
    </div>
  );
};
export default TaskList;
