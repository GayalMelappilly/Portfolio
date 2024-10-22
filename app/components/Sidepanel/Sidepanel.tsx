import { poppins } from '@/app/layout'
import React from 'react'
import Button from '../Button/Button'
import Social from '../Social/Social'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'

type Props = {}

const Sidepanel = (props: Props) => {
    return (
        <div className='flex bg-[#151515] shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[90%] w-[20%] rounded-md p-2 pt-8 text-center relative'>
            <div className='mx-auto flex-col *:my-4'>
                <p className='text-white text-center font-bold text-3xl'>Gayal M Sunil</p>
                <p className='text-[#DAA520] bg-[#0f0f0f] rounded-md p-2 text-center font-bold text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>Full Stack Web Developer</p>
                <hr className='' />
                <Contact />
                <Resume />
                <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 '>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Sidepanel