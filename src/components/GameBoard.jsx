import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp, AiOutlineReload} from  'react-icons/ai'
import im from '../assets/robot.png'
import  {BsFillPlayFill} from 'react-icons/bs'
 import {GiPuzzle} from 'react-icons/gi'
function GameBoard({setDotLength}) {
const[steps,setSteps]=useState([])
const dragItem = useRef();
const[place,setPlace]=useState({x:1,y:1})
let controlePanel=[]
//try new things
 const[placeValue,setPlaceValue]=useState([])

const [selectedPlace, setSelectedPlace] = useState({x:1,y:1});

const[renderAr,setRenderAr]=useState([])
 
  const handlePlaceClick = () => {
    placeValue.forEach((item, index) => {
      
      console.log(item)
      
   const id= setTimeout(() => {
     setRenderAr(steps.slice(0, index+1))
     
     if(item.x==0 && item.y==0){
        clearTimeout(id)
      return
    }
    setDotLength(index+1)
    setSelectedPlace(item);
      }, (index + 1) * 1000);
    });
  };
console.log(steps)

const renderGrid = () => {
  const arrr = [];
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      const isSelectedPlace = selectedPlace.x === i && selectedPlace.y === j;
      arrr.push(
        <div
          key={`${i}-${j}`}
          className={`w-14 h-14 border border-gray-500 ${i === 5 && j === 5 ? 'bg-red-400 ' : 'bg-yellow-400'}`}
        >
          {isSelectedPlace && <img src={im} alt='img' className={`${i === 5 && j === 5 ? ' animate-bounce ' : ''}`}/>}
        </div>
      );
    }
  }
  return arrr;
};

for(let i=1;i<15;i++){
controlePanel.push(
    <div className='w-10 h-10 bg-white text-center text-2xl rounded-sm font-semibold' onDrop={(e)=>handleDrop(e)} onDragOver={(e)=>handledragover(e)}></div>
)
}



  
useEffect(() => {
  // Update placeValue whenever place changes, excluding the initial value
  if (place.x !== 1 || place.y !== 1) {
    setPlaceValue((prevSteps) => [...prevSteps, place]);
  }
}, [place]);

  function placeValueFunction(e) {
  
    if((place.x==0 && place.y==0) || (place.x==5 && place.y==5)){
      return
    }

     else if (e === 'up') {
      if(place.x!==1){
        setPlace(pre=>({...pre,x:pre.x-1}))
        setSteps(pre=>([...pre,'Robot move up']))
      }else{
        setPlace({x:0,y:0})
        setSteps(pre=>([...pre,'Robot strike to wall']))
        
      }
      } 
      else if (e === 'down') {
        if(place.x!==5){
          setPlace(pre=>({...pre,x:pre.x+1}))
          if(place.x==4 && place.y==5){
            setSteps(prevSteps => [...prevSteps,'...Robo reached the Destination'])
          }else
        setSteps(pre=>([...pre,'Robot move down']))
          
        }else{
        
          setPlace({x:0,y:0})
        setSteps(pre=>([...pre,'Robot strike to wall']))
         
        }
      } else if (e === 'left') {
        if(place.y!==1){
          setPlace({...place,y:place.y-1})
        setSteps(pre=>([...pre,'Robot move left']))
          
        }else{
          setPlace({x:0,y:0})
        setSteps(pre=>([...pre,'Robot strike to wall']))
          
        }
      } else if (e === 'right') {
        if(place.y!==5){
          setPlace({...place,y:place.y+1})
          if(place.x==5 && place.y==4){
            setSteps(prevSteps => [...prevSteps,'...Robo reached the Destination'])
          }else
        setSteps(pre=>([...pre,'Robot move right']))
          
        }else{
          if(place.x==5 && place.y==5){
            setSteps(prevSteps => [...prevSteps,'...Robo reached the Destination'])
           
          }else{
          setPlace({x:0,y:0})
        setSteps(pre=>([...pre,'Robot strike to wall']))
          }
        }
      }
     
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
    placeValueFunction(clone.name)
}
   

  return (
    <div className='w-full  bg-indigo-950 '>
        <div className=' bg-indigo-900 text-white flex h-10 items-center gap-1'>
            <GiPuzzle className='text-2xl ml-5'/>
            <p className='text-xl'>Build</p>
        </div>
        <div className='flex flex-wrap p-5 gap-4 bg-blue-900 justify-center py-20'>
            <div className=' grid-cols-5 grid'>
            {renderGrid()}
          
            </div>

            {/* steps box */}
            <div className='sm:w-[50%] bg-indigo-900 h-64'>
                <div className='bg-indigo-400 underline pl-5 text-white font-semibold h-8'>instruction implemented</div>
                <div className=''>{renderAr.map((it,index)=>
                   <p className='text-white text-sm font-semibold pl-5' key={index}>{it}</p>
                )}</div>
            </div>
        </div>
        <div className='bg-indigo-400 p-2 text-start'>
<p className='text-white font-semibold my-2'>Logic Panel</p>
<div className='flex gap-1 flex-wrap'>
{controlePanel}
   

   
</div>
        </div>
        <div className='flex gap-2 text-white p-1'>
           <button className='h-8 w-9 p-1 rounded-sm bg-white text-black'  name='left' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowLeft /></button>
           <button className='h-8 w-9 p-1 rounded-sm bg-white text-black'  name='up' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowUp/></button>
           <button className='h-8 w-9 p-1 rounded-sm bg-white text-black'  name='down' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowDown/></button>
           <button className='h-8 w-9 p-1 rounded-sm bg-white text-black'  name='right' draggable onDragStart={(e)=>dragStart(e)}><AiOutlineArrowRight/></button>  
           <button className='h-8  px-2 rounded-sm bg-yellow-400 text-blue-400 flex gap-1 items-center'  onClick={handlePlaceClick}><BsFillPlayFill/> play</button>
           <button className='h-8  px-2 rounded-sm bg-yellow-400 text-blue-400'  onClick={()=>window.location.reload(false)}> <AiOutlineReload/></button>
        </div>
    </div>
  )
}
export default GameBoard
