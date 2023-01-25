import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Nav/>
    <Home/>
    </div>
  )
}

export default App
