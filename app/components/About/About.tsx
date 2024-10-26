import { crisom_pro, poppins } from '@/app/layout'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='about-tab'>
      <h1 className='pt-10 ml-6 text-emerald-400 text-3xl font-semibold border-b-2 pb-2 w-fit'>About Me</h1>
      <br />
      <div className='py-3 px-10 w-[70%] mb-6'>
        <p className='text-lg text-white'>&nbsp;&nbsp;&nbsp; Hi, I'm Gayal - a self-taught web developer with a passion for coding, problem-solving, and
          exploring new technologies. Over the years, I’ve honed my skills through dedication and a love for the craft, constantly pushing
          myself to take on challenging projects. Whether it's building sleek web applications or diving into the latest tech trends,
          I'm always eager to learn and grow.
          <br />
          <br />
          I’m constantly seeking opportunities to expand my expertise and refine my skills. I thrive on tackling challenging projects and value the opportunity to collaborate, turning innovative ideas into impactful, real-world solutions.
          <br />
          <br />
        </p>
        <p className={`text-white ${crisom_pro.className} text-2xl max-w-fit`}>
          "The only way to do great work is to love what you do."
          <br />
          <span>~ Steve Jobs</span>
        </p>
      </div>
    </div>
  )
}

export default About