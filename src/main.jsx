import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContext } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoContext>

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </TodoContext>
)
