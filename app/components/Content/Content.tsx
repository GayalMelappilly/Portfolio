import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Project from '../Project/Project'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

type Props = {
  tab: string,
  heading: string
}

const Content = (props: Props) => {
  return (
    <div className='bg-[#151515] shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[90%] w-[72%] rounded-md overflow-scroll scrollbar-hidden scroll-smooth'>
      <div className='flex'>
        <Navbar />
      </div>
      <div className='px-10'>
        <Home />
        <div>
          <About />
        </div>

        <div>
          <Project />
        </div>

        <div>
          <Contact />
        </div>

      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  )
}

export default Content