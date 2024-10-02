import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'

function Gameplay() {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState(null) // Use `null` consistently
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState('')
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const restoreScore = () => {
    setScore(0)
  }

  const rolDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number')
      return
    }
    setError('') // Clear error if dice is rolled successfully

    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice(randomNumber)

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(null) // Reset to `null`
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelect
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        rolDice={rolDice}
        restoreScore={restoreScore} // Pass restoreScore as a prop
        showRules={showRules}
        setShowRules={setShowRules}
      />
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`
