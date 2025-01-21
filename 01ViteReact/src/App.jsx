import { useState } from "react"
import Card from "./Card"

function App() {
const [counter, setCounter] = useState(1)

  // let counter = 1
  const addValue = () =>{
    setCounter(counter + 1)
  }
  const decValue = () =>{
    if (counter <=0 ){
      console.log("Can't update value")
    } else {
      setCounter(counter - 1)
    }
  }
  return (
    <>
     <h1>This is my first react App</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>Increase</button>
     <button onClick={decValue}>Decrease</button>
    </>
  )
}


export default App
