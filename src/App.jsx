import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="grid grid-cols-2 m-[20px] gap-[20px]">
    <Card/>
    <Card/>
 
 </div>
    </>
  )
}

export default App
