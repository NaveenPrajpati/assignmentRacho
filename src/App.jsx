import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Instruction from './components/Instruction'
import GameBoard from './components/GameBoard'

function App() {


  return (
    <div className=' bg-blue-950'>
<Header/>
<div className='flex flex-col sm:flex-row'>
  <Instruction/>
  <GameBoard/>
</div>
    </div>
  )
}

export default App
