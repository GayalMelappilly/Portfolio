import React from 'react'
import { TfiDownload } from "react-icons/tfi";

type Props = {}

const Resume = (props: Props) => {
    return (
        <a href="#_" className="relative inline-flex items-center justify-center px-3 py-1 overflow-hidden font-medium transition duration-300 ease-out border-1 border-orange-700 rounded-md shadow-[0_2px_10px_rgb(0,0,0,0.4)] group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-700 group-hover:translate-x-0 ease">
                <TfiDownload size={20} />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-orange-700 transition-all duration-300 transform group-hover:translate-x-full ease">R E S U M E</span>
            <span className="relative invisible">R E S U M E</span>
        </a>
    )
}

export default Resume