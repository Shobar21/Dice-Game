// import styled from 'styled-components'

import Gameplay from './components/Gameplay'
import Homepage from './components/Homepage'
import { useState } from 'react'

function App() {
  const [Playnow, setPlaynow] = useState(false)

  const toggleGamePlay = () => {
    setPlaynow((prev) => !prev)
  }
  return <>{Playnow ? <Gameplay /> : <Homepage toggle={toggleGamePlay} />}</>
}

export default App
