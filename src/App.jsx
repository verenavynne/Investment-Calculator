import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import { calculateInvestmentResults } from './util/investment'
import Result from './components/Results'

const INITIAL_VALUE = {
  initialInvesment: 10000,
  annualInvesment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {

  const [userInput, setUserInput] = useState(INITIAL_VALUE)

  function handleChange(inputIdentifier, newValue) {
      setUserInput(prevUserInput => {
          return{
              ...prevUserInput,
              [inputIdentifier] : newValue
          }
      })
  }

  const result = calculateInvestmentResults(userInput)

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Result input={userInput} result={result}/>
    </>
  )
}

export default App
