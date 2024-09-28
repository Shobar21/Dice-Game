import React from 'react'
import dices from '../images/dices 1.png'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  max-width: 1180px;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
      /* color: white; */
      white-space: nowrap;
    }
  }
`
const Button = styled.button`
  float: right;
  min-width: 220px;
  padding: 15px 18px;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`

function Homepage({ toggle }) {
  return (
    <Container>
      <div>
        <img src={dices} alt='Dice' />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Homepage
