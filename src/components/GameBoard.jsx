import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineReload} from  'react-icons/ai'
import im from '../assets/robot.png'
import  {BsFillPlayFill} from 'react-icons/bs'

function GameBoard() {
const[steps,setSteps]=useState([])
let arrr=[];
const dragItem = useRef();
const[place,setPlace]=useState({x:1,y:1})
const[comands,setComands]=useState([])
let controlePanel=[]

for(let i=1;i<=5;i++){
for(let j=1;j<=5;j++){
    arrr.push(<div className={` w-12 h-12  border border-gray-500 ${(i==5 && j==5)?' bg-red-400':'bg-yellow-400'}`}>
    {(i==place.x && j==place.y)?(<img src={im} alt='img'/>):''}</div>)
}
}


for(let i=1;i<10;i++){
controlePanel.push(
    <div className='w-10 h-10 bg-white text-center text-2xl rounded-sm font-semibold' onDrop={(e)=>handleDrop(e)} onDragOver={(e)=>handledragover(e)}></div>
)
}
if(place.x==5 && place.y==5){
setSteps([...steps,'...Robo reached the Destination'])
resetRobo()
}

function resetRobo(){
    setTimeout(() => {
        setPlace({x:1,y:1})
        }, 1000);
        setSteps([])
        setComands([])
}
function looseRobo(){
    setSteps([...steps,'You loose'])
    resetRobo()
}



function handleKey(e){
    if(e==='up'){
        if(place.x!=1){
            setSteps([...steps,'Robot move up'])
            setPlace(pre=>{return {...pre,x:place.x-1}})
        }else{
       looseRobo()
        }}
       else if(e==='down'){
            if(place.x!=5){
                setSteps([...steps,'Robot move down'])
                setPlace(pre=>{return {...pre,x:place.x+1}})
            }else{
                looseRobo()
            }}
            else if(e==='left'){
            if(place.y!=1){
                setSteps([...steps,'Robot move left'])
                setPlace(pre=>{return {...pre,y:place.y-1}})
            }else{
                looseRobo()
            }}
            else if(e==='right'){
            if(place.y!=5){
                setSteps([...steps,'Robot move right'])
                setPlace(pre=>{return {...pre,y:place.y+1}})
            }else{
                looseRobo()
            }}
     
}


 function handleStart(){
  
    comands.forEach((e)=>{
      
   handleKey(e)
})

}


const dragStart = (e) => {
    dragItem.current = e.target
    
  };



function handledragover(e){
e.preventDefault()

}

function handleDrop(e){
    
    const clone = dragItem.current.cloneNode(true);
    e.target.appendChild(clone)
    setComands([...comands,clone.name])
}
   

  return (
    <div className='w-full h-full'>
        <div className=' bg-blue-950 text-white flex h-10'>
            <img src="" alt="image" />Build
        </div>
        <div className='flex flex-wrap p-5 gap-4 bg-blue-700 justify-center'>
            <div className=' grid-cols-5 grid'>
            {arrr}
          
            </div>
            <div className='w-[50%] '>
                <div className='bg-blue-400 underline text-center text-white font-semibold'>instruction implemented</div>
                <div className='bg-blue-900 h-48'>{steps.map((it,index)=>(
                    <p className='text-white text-sm font-semibold' key={index}>{it}</p>
                ))}</div>
            </div>
        </div>
        <div className='bg-blue-500 p-2 text-start'>
<p className='text-white font-semibold'>Logic Panel</p>
<div className='flex gap-1 '>
{controlePanel}
   

   
</div>
        </div>
        <div className='flex bg-blue-950 gap-2 text-white p-1'>
           <button className='h-8 min-w-9 p-1 rounded-sm bg-white text-black'  name='left' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowLeft /></button>
           <button className='h-8 min-w-9 p-1 rounded-sm bg-white text-black'  name='up' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowUp/></button>
           <button className='h-8 min-w-9 p-1 rounded-sm bg-white text-black'  name='down' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowDown/></button>
           <button className='h-8 min-w-9 p-1 rounded-sm bg-white text-black'  name='right' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowRight/></button>  
           <button className='h-8 min-w-9 p-1 rounded-sm bg-yellow-400 text-blue-400 flex gap-1 items-center'  onClick={handleStart}><BsFillPlayFill/> play</button>
           <button className='h-8 min-w-9 p-1 rounded-sm bg-yellow-400 text-blue-400'  onClick={resetRobo}> <AiOutlineReload/></button>
        </div>
    </div>
  )
}

export default GameBoard