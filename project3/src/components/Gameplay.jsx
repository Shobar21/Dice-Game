import React from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'

function Gameplay() {
  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore />
        <NumberSelect />
      </div>
      <RollDice />
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
  }
`
