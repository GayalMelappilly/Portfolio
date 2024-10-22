import React from 'react'
import Sidepanel from './components/Sidepanel/Sidepanel'
import Particles from './components/Particles/Particles'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' h-full pl-20 pt-20'>
      <div className='flex h-full'>
        <Sidepanel />
      </div>
        <Particles className="absolute inset-0 pointer-events-none" quantity={50} />
    </div>
  )
}

export default page