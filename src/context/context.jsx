import { createContext, useReducer } from "react";

const reducerFunction = (state, action) => {
  switch(action.type) {
    case 'addTodo':
      return [
        
          ...state,
        {
        id: state.length + 1,
        addTodo: action.payload,
        complete: false,
          deleteTodo: false
      }];
      case 'complete':
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
        );
      
          
      
    case 'deleteTodo':
      return state.filter((e)=> e.id !== action.payload);
      case 'newUser':
    return[
      ...state,
      {
        id: state.length +1,
        name: action.payload,
        mail: action.payload,
        password : action.payload
      }

      
    ]
    default:
      return {state};
  }
  
};

const initialState = [
  { 
    id:'0',
    addTodo: "Todo app practice project by bilal  : )",
    compelete: false,
    deleteTodo: false,
  },
];
export const contextt = createContext();

export const TodoContext = (props) => {
  
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return <contextt.Provider value={{state,dispatch}}>{props.children}</contextt.Provider>;
};
