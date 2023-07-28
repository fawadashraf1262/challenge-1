import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [step, setStep] = useState(1)
  const [counter, setCounter] = useState(step - 1)
  const date = new Date("July 26 2023");
  date.setDate(date.getDate() + counter)

  function handleReset(){
    setStep(1);
    setCounter(0)
  }
  return (
    <div className='App'>
      <div>
        <input type="range" min={1} max={365} value={step} onChange={(e) => setStep(Number(e.target.value))} />
        {/* <button onClick={() => setStep(step - 1)}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={() => setStep(step + 1)}>+</button> */}
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCounter(counter - step)}>-</button>
        <input type="text" value={counter} onChange={(e) => setCounter(Number(e.target.value))}/>
        <button onClick={() => setCounter(counter + step)}>+</button>
      </div>
      <p>
        <span>{counter === 0 ? "Today is " : counter > 0 ? `${counter} days from today is` : `${counter} day ago was `}</span>
        {date.toDateString()}
      </p>
      { counter !== 0 || step !== 1 ? (
      <div>
      <button onClick={handleReset}>Reset</button>
      </div>
      ) : null }


    </div>
  )
}

export default App