import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Instruction from './components/Instruction'
import GameBoard from './components/GameBoard'

function App() {


  return (
    <div className='bg-red-400'>
<Header/>
<div className='flex'>
  <Instruction/>
  <GameBoard/>
</div>
    </div>
  )
}

export default App
