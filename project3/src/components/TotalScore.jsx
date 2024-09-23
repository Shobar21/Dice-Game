import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
     max-width:200px;
     text-align:center;
    h1{
        font-size:100px;
        line-height:100px
    }
    p{
        font-size:24px;
        font-weight: 500
    }
`
function TotalScore() {
  return (
    <Container>
      <h1>0</h1>
      <p>Total Score</p>
    </Container>
  )
}

export default TotalScore
