import React from 'react'
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

type Props = {}

const Social = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center'>
        <FaSquareGithub className='text-zinc-100' size={30} />
        <FaLinkedin className='text-zinc-100' size={30} />
        <FaSquareXTwitter className='text-zinc-100' size={30} />
    </div>
  )
}

export default Social