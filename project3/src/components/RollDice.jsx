import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import dice1 from '../images/dice_1.png'
import dice2 from '../images/dice_2.png'
import dice3 from '../images/dice_3.png'
import dice4 from '../images/dice_4.png'
import dice5 from '../images/dice_5.png'
import dice6 from '../images/dice_6.png'

function RollDice({
  currentDice,
  rolDice,
  restoreScore,
  showRules,
  setShowRules,
}) {
  const [isRolling, setIsRolling] = useState(false)
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

  const handleDiceRoll = () => {
    setIsRolling(true)
    setTimeout(() => {
      setIsRolling(false)
      rolDice()
    }, 1000)
  }

  return (
    <DiceContainer>
      <div className='dice' onClick={handleDiceRoll}>
        <DiceImage
          src={diceImages[currentDice - 1]}
          alt={`Dice ${currentDice}`}
          isRolling={isRolling}
          isDice4={currentDice === 4} // Conditional prop for dice 4 styling
        />
      </div>
      <p>Click on Dice to roll</p>
      <ButtonContainer>
        <Button onClick={restoreScore}>Reset Score</Button>
        <BlackButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? 'Hide' : 'Show'} Rules
        </BlackButton>
      </ButtonContainer>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 500;
    color: white;
  }
  .dice {
    cursor: pointer;
  }
`

// Keyframes for dice rotation
const rollAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const DiceImage = styled.img`
  width: ${(props) => (props.isDice4 ? '220px' : '220px')};
  border-radius: ${(props) => (props.isDice4 ? '30px' : '')};
  height: auto;
  ${(props) =>
    props.isRolling &&
    css`
      animation: ${rollAnimation} 1s ease;
    `}
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  min-width: 220px;
  padding: 15px 18px;
  border-radius: 5px;
  background-color: white;
  font-size: 18px;
  border: 1px solid black;
  font-weight: 600;
  cursor: pointer;
  margin: 10px 0;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
  }
`

const BlackButton = styled(Button)`
  color: white;
  background-color: black;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`
