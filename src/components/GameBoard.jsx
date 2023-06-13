import React, { useEffect, useState } from 'react'
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp} from  'react-icons/ai'

function GameBoard() {
const[steps,setSteps]=useState([])
let arrr=[];
const[place,setPlace]=useState({x:4,y:3})

for(let i=1;i<=5;i++){
for(let j=1;j<=5;j++){
    arrr.push(<p className={` w-10 h-10 ${(i==5 && j==5)?' bg-red-400':'bg-yellow-400'}`}>
    {(i==place.x && j==place.y)?'g':''}</p>)
}
}
if(place.x==5 && place.y==5){
setSteps([...steps,'...Robo reached the Destination'])
resetRobo()
}

function resetRobo(){
    setTimeout(() => {
        setPlace({x:1,y:1})
        }, 2000);
}
function looseRobo(){
    setSteps([...steps,'You loose'])
    resetRobo()
}

useEffect(()=>{
   
},[])

function handleKey(e){

switch (e) {
    case 'up':
        if(place.x!=1){
            setSteps([...steps,'Robot move up'])
            setPlace(pre=>{return {...pre,x:place.x-1}})
        }else{
       looseRobo()
        }
        break;
        case 'down':
            if(place.x!=5){
                setSteps([...steps,'Robot move down'])
                setPlace(pre=>{return {...pre,x:place.x+1}})
            }else{
                looseRobo()
            }
            break;
        case 'left':
            if(place.y!=1){
                setSteps([...steps,'Robot move left'])
                setPlace(pre=>{return {...pre,y:place.y-1}})
            }else{
                looseRobo()
            }
            break;
        case 'right':
            if(place.y!=5){
                setSteps([...steps,'Robot move right'])
                setPlace(pre=>{return {...pre,y:place.y+1}})
            }else{
                looseRobo()
            }
            break;

    default:
        break;
}
   
   
}

   

  return (
    <div>
        <div className=' bg-blue-900 text-white'>
            <img src="" alt="image" />Build
        </div>
        <div className='flex p-5 gap-4 bg-blue-600'>
            <div className=' grid-cols-5 grid gap-1'>
            {arrr}
          
            </div>
            <div>
                <div className='bg-blue-400'>instruction implemented</div>
                <div className='bg-blue-800 '>{steps.map((it,index)=>(
                    <p className='text-white text-sm' key={index}>{it}</p>
                ))}</div>
            </div>
        </div>
        <div className='bg-blue-500'>
<p>Logic Panel</p>
<div className='flex gap-1'>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
    <div className='w-10 h-10 bg-white'></div>
</div>
        </div>
        <div className='flex bg-blue-800 gap-2 text-white'>
           <button onClick={()=>handleKey('left')} ><AiOutlineArrowLeft/></button>
           <button onClick={()=>handleKey('up')} ><AiOutlineArrowUp/></button>
           <button onClick={()=>handleKey('down')}><AiOutlineArrowDown/></button>
           <button onClick={()=>handleKey('right')} ><AiOutlineArrowRight/></button>
           
        <button>play</button>
        <button>reset</button>
        </div>
    </div>
  )
}

export default GameBoard