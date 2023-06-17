import React from 'react'
import { BsBook } from 'react-icons/bs'

export default function Instruction() {
  return (
    <div className='sm:w-[40%] h-full bg-gray-200'>
        <div className='bg-gray-400 flex items-center h-10 gap-1'>
            <BsBook className='text-white text-2xl ml-2'/>
            <p className='font-semibold'>Learn</p>
        </div>
        <ol className='list-decimal text-sm text-start px-5 font-semibold'>
            <li>To start drag the direction key into logic panel to proviede directional step to Robo</li>
            <li>After giving direction hit play button and robo start moving in provided direction</li>
            <li>if you want to add more steps then just drag dirction into logic panel and hit play button again</li>
            <li>To reset game just hit reset button</li>
        </ol>
    </div>
  )
}
