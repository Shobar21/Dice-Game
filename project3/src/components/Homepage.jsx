import React from 'react'
import dices from '../images/dices 1.png'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }

  .content {
    margin-top: 20px;

    @media (min-width: 768px) {
      margin-top: 0;
    }

    h1 {
      font-size: 48px; /* Smaller font for mobile */
      white-space: nowrap;

      @media (min-width: 768px) {
        font-size: 72px; /* Adjust for tablet */
      }

      @media (min-width: 1024px) {
        font-size: 96px; /* Larger font for desktop */
      }
    }
  }
`

const Button = styled.button`
  min-width: 160px;
  padding: 10px 15px;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }

  @media (min-width: 768px) {
    min-width: 180px;
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    min-width: 220px;
    font-size: 18px;
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
