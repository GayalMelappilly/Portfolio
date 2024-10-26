import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

type Props = {}

const Social = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center'>
      <Link href={'https://github.com/GayalMelappilly'}><FaSquareGithub className='text-zinc-100 hover:text-[#DAA520]' size={30} /></Link>
      <Link href={'https://www.linkedin.com/in/gayal-melappilly'}><FaLinkedin className='text-zinc-100 hover:text-[#DAA520]' size={30} /></Link>
      <Link href={'https://x.com/GayalMelappilly'}><FaSquareXTwitter className='text-zinc-100 hover:text-[#DAA520]' size={30} /></Link>
    </div>
  )
}

export default Social