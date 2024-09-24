import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelect() {
  const arr = [1, 2, 3, 4, 5, 6]
  const [selectedNumber, setSelectedNumber] = useState()
  console.log(selectedNumber)
  return (
    <Container>
      <div className='flex'>
        {arr.map((value, i) => (
          <Box
            key={i}
            isSelected={selectedNumber === value} //prps
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>select Number</p>
    </Container>
  )
}

export default NumberSelect
const Container = styled.div`
  /* margin: 20px; */

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    margin: 15px;
    font-size: 24px;
    font-weight: 700;
    float: right;
  }
`
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
`
