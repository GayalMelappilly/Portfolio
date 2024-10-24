import Link from 'next/link'
import React from 'react'
import Resume from '../Resume/Resume'
require('dotenv')

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-[#1a1a1a] p-6 h-[14%] w-[60%] ml-auto rounded-se-md rounded-bl-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-[#DAA520] border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block  flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href='#about-tab' className="block mt-4 lg:inline-block lg:mt-0 text-[#DAA520] hover:text-white mx-6">
                        A B O U T
                    </Link>
                    <Link href="#projects-tab" className="block mt-4 lg:inline-block lg:mt-0 text-[#DAA520] hover:text-white mx-6">
                        P R O J E C T S
                    </Link>
                    <Link href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-[#DAA520] hover:text-white mx-6">
                        C O N T A C T
                    </Link>
                </div>
                <div>
                    <Resume />
                </div>
            </div>
        </nav>
    )
}

export default Navbar