import React from 'react'
import { MdWavingHand } from "react-icons/md";

type Props = {}

const Home = (props: Props) => {
    return (
        <div className='h-screen p-16'>
            <div>
                <p className='text-white font-mono text-2xl flex'>Hey there!</p>
                <h1 className='text-white text-3xl gap-2 flex font-bold ml-7 mt-1'>My name is <span className='text-[#daab33]'>Gayal M Sunil.</span></h1>
                <h1 className='text-white text-3xl gap-2 flex font-bold ml-7 mt-1'> I am a <span className='text-orange-600'>Web Developer.</span></h1>
            </div>
            <button className='border-emerald-400 border-2 text-emerald-400 py-2 px-3 ml-7 rounded-md mt-4 font-mono text-lg hover:bg-emerald-400 hover:text-black'>Say Hello</button>
        </div>
    )
}

export default Home