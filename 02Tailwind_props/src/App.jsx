import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div style={{backgroundColor: color}}>
      <h1>This are my cards</h1>
      <Card name="Sneh" image="https://images.unsplash.com/photo-1737069222401-afd3720775ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name="Devansh" image="https://images.unsplash.com/photo-1736604970225-2633e0739d17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <button onClick={() => setColor("blue")} className='bg-blue-300'>Blue</button>
      <button onClick={() => setColor("red")} className='bg-red-300'>Red</button>
      <button onClick={() => setColor("green")} className='bg-green-300'>Green</button>
        
      </div>
    </>
  )
}

export default App
