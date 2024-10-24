import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='about-tab'>
      <h1 className='pt-10 ml-6 text-emerald-400 text-3xl font-semibold border-b-2 pb-2 w-fit'>About Me</h1>
      <br />
      <p className='text-lg text-white'>&nbsp;&nbsp;&nbsp; Hi, I'm Gayal—a self-taught web developer with a passion for coding, problem-solving, and 
        exploring new technologies. Over the years, I’ve honed my skills through dedication and a love for the craft, constantly pushing
         myself to take on challenging projects. Whether it's building sleek web applications or diving into the latest tech trends, 
         I'm always eager to learn and grow.
        <br />
        <br />
      If you're looking for someone who thrives on creative problem-solving and loves to bring ideas to life through code, let's 
      connect!</p>
    </div>
  )
}

export default About