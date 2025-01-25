import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {

  return (
    <>
      <h1>Learning Redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
