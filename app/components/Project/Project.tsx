import React from 'react'

type Props = {}

const Project = (props: Props) => {

  const data = [
    {
      title: 'Learnify',
      description: 'Learning Management System.',
      tech: 'Nextjs, Nodejs, Express, Mongoose, Redis, Sockei.io, Redux, Cloudinary, Tailwind, NodeMailer'
    },
    {
      title: 'Connect',
      description: 'Chatting Web Application',
      tech: 'Reactjs, Nodejs, Express, Mongoose, Socket.io, Tailwind, NodeMailer'
    },
    {
      title: 'Weather App',
      description: 'API based live weather web application',
      tech: 'Reactjs, OpenWeather API, Geolocation, Chartjs '
    },
    {
      title: 'OLX Clone',
      description: 'Cloned version of OLX',
      tech: 'Reactjs, Firebase'
    },
    {
      title: 'Netflix Clone',
      description: 'Cloned version of Netflix',
      tech: 'Reactjs, TheMovieDB API, Axios, CSS'
    },
    {
      title: 'E-Commerce Application',
      description: 'Simple full stacked based e-commerce application',
      tech: 'Nodejs, Handlebars, NodeMailer, Boostrap, Ajax'
    },
    {
      title: 'Digital Diary',
      description: 'A online diary application for diary writers',
      tech: 'Nodejs, Express, Handlebars, Bootstrap'
    },
    {
      title: 'IP Address Tracker',
      description: 'An application which tracks ip address',
      tech: 'Javascript, OpenStreetMap API, IP Geolocation API, Ajax, Bootstrap'
    }
  ]

  return (
    <div id='projects-tab' className='projects-tab h-screen'>
      <h1 className='pt-10 ml-6 text-emerald-400 text-3xl font-semibold border-b-2 pb-2 w-fit'>Project Highlights</h1>
      <br />
      <div className='grid grid-cols-3 gap-6 mt-6'>
        {data.map((item, index) => (
          <div className="block h-96 max-w-sm p-6 bg-[#151515] shadow-[0_3px_10px_rgb(0,0,0,0.5)] rounded-md relative">
            <div className='absolute bg-orange-600 text-white right-0 top-0 rounded-bl-xl'>
              <p className='py-2 px-3'>{index+1}</p>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700">{item.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project