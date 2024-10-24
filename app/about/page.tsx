import React from 'react'
import Sidepanel from '../components/Sidepanel/Sidepanel'
import Particles from '../components/Particles/Particles'
import Content from '../components/Content/Content'

type Props = {}

const page = (props: Props) => {
    return (
        <div className=' h-full pl-20 pt-20'>
            <div className='flex h-full'>
                <Sidepanel />
                <div className='m-5'></div>
                <Content tab='about' heading='About Me' />
            </div>
            <Particles className="absolute inset-0 pointer-events-none" quantity={10} />
        </div>
    )
}

export default page