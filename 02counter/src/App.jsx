import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    if (counter === 20) {
      return counter
    }
    counter = counter + 1;
    setCounter(counter)
  }
  
  const removeValue = () => {
    if (counter == 0) {
      return counter
    }
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <div>

     </div>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
