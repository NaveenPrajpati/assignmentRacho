import React from 'react'

function Header({dotLength}) {
let arr=[];
  for(let i=1;i<=13;i++){
    arr.push(
      <div className='mt-2'>
    <div className={`h-4 w-4 rounded-full ${i<=dotLength?'bg-green-400':'bg-white'} `}></div>
    <small className='text-gray-400'>{i}</small>
    </div>
    )
    if(i<13)
    arr.push(<div className=' h-0.5 w-5 bg-gray-400 mt-4'></div>
    )
  }

  return (
    <div className='bg-indigo-950 p-1 text-white flex justify-around items-center gap-2'>
    <h1 className='font-bold text-2xl'>Logo</h1>
    <div className='flex flex-wrap'>

    {arr}
    </div>
    </div>
  )
}

export default Header
