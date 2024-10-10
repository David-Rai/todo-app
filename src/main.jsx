import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Portfolio from './Portfolio/Portfolio'
// import ResponisiveNav from './components/ResponisiveNav'
// import Transition from './components/Transition.jsx'
import Todo from './components/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
