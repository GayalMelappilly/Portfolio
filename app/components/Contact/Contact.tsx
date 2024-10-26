import Link from 'next/link';
import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {}

const Contact = (props: Props) => {
    return (
        <div id='contact-tab'>
            <h1 className='pt-10 ml-6 text-emerald-400 text-3xl font-semibold border-b-2 pb-2 w-fit'>Contact</h1>
            <br />
            <h1 className='text-white text-5xl font-bold font-sans text-center'>Get In Touch</h1>
            <div className='py-3 px-32 mb-6 text-center mt-2'>
                <p className='text-lg text-white'>Have a project in mind or just want to chat? I'm always open to new ideas and collaborations. Reach out, and let's make something remarkable together!</p>
                <div className='mt-3'>
                    <Link href={'mailto:gayalsunil@gmail.com'} className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-emerald-400 border-2 border-emerald-400 rounded-lg hover:text-black group hover:bg-[#151515]">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <MdOutlineKeyboardDoubleArrowRight size={30} />
                        </span>
                        <span className="relative">Let's Connect</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact