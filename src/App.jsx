
import Header from './components/Header'
import Instruction from './components/Instruction'
import GameBoard from './components/GameBoard'

function App() {


  return (
    <div className=' p-20'>
   <Header/>
<div className='flex flex-col sm:flex-row h-[620px]'>
  <Instruction/>
  <GameBoard/>
</div>
    </div>
  )
}

export default App
