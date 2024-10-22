import React from 'react'
import Navbar from '../Navbar/Navbar'

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='flex bg-[#151515] shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[90%] w-[72%] rounded-md'>
        <Navbar />
    </div>
  )
}

export default Content