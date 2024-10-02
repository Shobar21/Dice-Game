import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on the dice, if the selected number matches the dice
          number, you will get the same points as the dice.
        </p>
        <p>If you guess wrong, 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .text {
    margin-top: 24px;

    p {
      font-size: 18px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 600px;
    padding: 15px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
    margin-top: 20px;
  }
`
