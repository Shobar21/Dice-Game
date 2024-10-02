import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
    color: white;

    @media (max-width: 768px) {
      font-size: 60px; /* Adjust font size for mobile */
      line-height: 60px; /* Adjust line height for mobile */
    }

    @media (max-width: 480px) {
      font-size: 48px; /* Further adjustments for very small screens */
      line-height: 48px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 500;
    color: white;

    @media (max-width: 768px) {
      font-size: 18px; /* Adjust font size for mobile */
    }

    @media (max-width: 480px) {
      font-size: 16px; /* Further adjustments for very small screens */
    }
  }

  @media (max-width: 768px) {
    max-width: 150px; /* Reduce max-width for mobile */
  }

  @media (max-width: 480px) {
    max-width: 120px; /* Further reduce for very small screens */
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
