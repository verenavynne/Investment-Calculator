import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Results'
import { calculateInvestmentResults } from './util/investment'

const INITIAL_VALUE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {

  const [userInput, setUserInput] = useState(INITIAL_VALUE)
  const isInputValid = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
      setUserInput(prevUserInput => {
          return{
              ...prevUserInput,
              [inputIdentifier] : +newValue
          }
      })
  }

  const result = calculateInvestmentResults(userInput)

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!isInputValid && <p className='center'>Please enter a duration greater than 0</p>}
      {isInputValid && <Result result={result}/>}
      
    </>
  )
}

export default App
