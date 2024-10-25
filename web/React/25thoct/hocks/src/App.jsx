import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hocks from './components/Hocks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hocks/>
    </>
  )
}

export default App
