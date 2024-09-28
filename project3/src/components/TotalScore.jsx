import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
     max-width:200px;
     text-align:center;
    h1{
        font-size:100px;
        line-height:100px;
        color:white;

    }
    p{
        font-size:24px;
        font-weight: 500;
        color:white;
    }
`
function TotalScore({ score }) {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  )
}

export default TotalScore
