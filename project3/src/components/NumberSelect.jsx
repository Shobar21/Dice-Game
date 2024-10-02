import styled from 'styled-components'

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6]

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError('')
  }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className='select-number'>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px; /* Padding for mobile */

  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 8px; /* Reduced gap for mobile */
    justify-content: center;

    @media (min-width: 768px) {
      gap: 16px; /* Larger gap for tablets */
    }

    @media (min-width: 1024px) {
      gap: 20px; /* Largest gap for desktop */
    }
  }

  .select-number {
    font-size: 14px; /* Smaller font for mobile */
    font-weight: 700;
    color: white;
    margin-top: 12px; /* Add space between boxes and text */
    align-self: center; /* Center on mobile screens */

    @media (min-width: 768px) {
      font-size: 18px; /* Slightly larger font for tablets */
      align-self: flex-end; /* Align to the right on larger screens */
    }

    @media (min-width: 1024px) {
      font-size: 22px; /* Larger font for desktop */
    }
  }

  .error {
    color: red;
    font-size: 12px; /* Smaller font for mobile */
    margin-bottom: 8px; /* Add spacing between error and boxes */

    @media (min-width: 768px) {
      font-size: 14px; /* Slightly larger for tablets */
    }
  }
`

const Box = styled.div`
  height: 40px; /* Smaller height for mobile */
  width: 40px; /* Smaller width for mobile */
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 16px; /* Slightly smaller font for mobile */
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05); /* Small hover effect */
  }

  @media (min-width: 768px) {
    height: 64px; /* Larger height for tablets */
    width: 64px;
    font-size: 20px; /* Slightly larger font for tablets */
  }

  @media (min-width: 1024px) {
    height: 72px; /* Largest size for desktop */
    width: 72px;
    font-size: 24px; /* Larger font for desktop */
  }
`
