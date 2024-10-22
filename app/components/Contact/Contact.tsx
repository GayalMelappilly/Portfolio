import React from 'react'
import { MdAlternateEmail, MdPhoneAndroid, MdLocationPin } from "react-icons/md";

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className='flex-col mt-2'>
            <div className='flex'>
                <div className='p-2 bg-[#0f0f0f] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <MdPhoneAndroid className='text-[#DAA520]' size={20} />
                </div>
                <p className='text-zinc-300 mt-1'>&nbsp; +91 956-756-4984</p>
            </div>
            <div className='m-2'></div>
            <div className='flex'>
                <div className='p-2 bg-[#0f0f0f] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <MdAlternateEmail className='text-[#DAA520]' size={20} />
                </div>
                <p className='text-zinc-300 mt-1'>&nbsp; gayalsunil@gmail.com</p>
            </div>
            <div className='m-2'></div>
            <div className='flex'>
                <div className='p-2 bg-[#0f0f0f] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <MdLocationPin className='text-[#DAA520]' size={20} />
                </div>
                <p className='text-zinc-300 mt-1'>&nbsp; Kochi, Kerala, India</p>
            </div>
        </div>
    )
}

export default Contact