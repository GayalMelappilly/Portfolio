import Link from 'next/link'
import React from 'react'

type Props = {}

const Project = (props: Props) => {

  const data = [
    {
      title: 'Learnify',
      description: 'Learnify is a dynamic Learning Management System that allows users to create, sell, and enroll in courses. With top-notch authentication for secure access and interactive features to enhance learning, it offers a seamless, engaging experience for both instructors and learners.',
      tech: 'Typescript, Nextjs, Nodejs, Express, MongoDB, Redis, Stripe, Sockei.io, Redux, Cloudinary, Tailwind, NodeMailer',
      source: {
        frontend: 'https://github.com/GayalMelappilly/LMS-Frontend.git',
        backend: 'https://github.com/GayalMelappilly/LMS-Backend.git'
      },
      link: 'https://learnify-client-tau.vercel.app'
    },
    {
      title: 'Connect',
      description: 'A real-time chat application built with the MERN stack, offering secure Gmail authentication, real-time messaging, friend requests, online status indicators, and customizable themes. It provides a seamless and responsive chatting experience across all devices.',
      tech: 'Reactjs, Nodejs, Express, MongoDB, Socket.io, Tailwind, NodeMailer',
      source: {
        frontend: 'https://github.com/GayalMelappilly/Connect-app-frontend.git',
        backend: 'https://github.com/GayalMelappilly/Connect-app-backend.git'
      },
      link: 'https://connect-app-ykav.onrender.com'
    },
    {
      title: 'Weather App',
      description: 'A Live Weather Forecast Web App delivers real-time global weather updates with geolocation, a 7-day forecast, and dynamic icons. It offers responsive design, light/dark modes, and detailed current weather data for an engaging user experience across devices.',
      tech: 'Reactjs, OpenWeather API, Geolocation, Chartjs, Tailwind',
      source: {
        sourceLink: 'https://github.com/GayalMelappilly/Weather-app-intern.git'
      }
    },
    {
      title: 'OLX Clone',
      description: 'A cloned version of OLX enables seamless buying and selling of products with secure user authentication, utilizing Firebase as its database. This setup ensures efficient data management and real-time updates, providing a reliable platform for users to create and manage product listings.',
      tech: 'Reactjs, Firebase, CSS',
      source: {
        sourceLink: 'https://github.com/GayalMelappilly/OLX-Clone.git'
      }
    },
    {
      title: 'Netflix Clone',
      description: 'The Netflix Clone is a web application built with React.js that uses TheMovieDB API for content data, Axios for API requests, and CSS for styling, allowing users to browse and stream movies and TV shows seamlessly.',
      tech: 'Reactjs, TheMovieDB API, Axios, CSS',
      source: {
        sourceLink: 'https://github.com/GayalMelappilly/Netflix-Clone.git'
      }
    },
    {
      title: 'E-Commerce Application',
      description: 'Simple full stacked based e-commerce application',
      tech: 'Nodejs, Handlebars, MongoDB, NodeMailer, Boostrap, Ajax'
    },
    {
      title: 'IP Address Tracker',
      description: 'A responsive web app that tracks IP address locations using the IP Geolocation API by IPify. It features an interactive LeafletJS map displaying user and searched IP locations. The design adapts to all devices, supports domain lookups, and highlights hover states for an engaging user experience.',
      tech: 'Javascript, LeafletJS, OpenStreetMap API, IP Geolocation API, Ajax, Bootstrap',
      source: {
        sourceLink: 'https://github.com/GayalMelappilly/Ip-address-tracker.git'
      }
    },
    {
      title: 'Digital Diary',
      description: 'A online diary application for diary writers',
      tech: 'Nodejs, Express, Handlebars, Bootstrap',
      source: {
        sourceLink: 'https://github.com/GayalMelappilly/DIGITAL-DIARY.git'
      }
    },
  ]

  return (
    <div id='projects-tab' className=''>
      <h1 className='pt-10 ml-6 text-emerald-400 text-3xl font-semibold border-b-2 pb-2 w-fit'>Project Highlights</h1>
      <br />
      <div className='grid grid-cols-3 gap-6 mt-6'>
        {data.map((item, index) => (
          <div className="block h-[27rem] max-w-sm p-6 bg-[#151515] shadow-[0_3px_10px_rgb(0,0,0,0.7)] rounded-md relative mb-5 hover:scale-105 duration-300">
            <div className='absolute bg-orange-600 text-white right-0 top-0 rounded-bl-xl'>
              <p className='py-2 px-3 text-black font-semibold'>{index + 1}</p>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-700">{item.title}</h5>
            <p className="font-normal text-gray-700 dark:text-zinc-300 mt-2 leading-5">{item.description}</p>
            <div className='absolute bottom-5 px-5 left-1/2 transform -translate-x-1/2 w-full'>
              <div className='border-2 border-orange-700 border-solid mt-5'>
                <span className='absolute -mt-3 text-zinc-300 px-1 ml-2 bg-[#151515] text-sm rounded-md'>Tech Stack</span>
                <div className='py-3 flex justify-center text-zinc-300 text-sm px-1.5 text-center'>
                  {item.tech}
                </div>
              </div>
              {
                item.source?.frontend && (
                  <div className='mt-5 w-full text-center'>
                    <Link href={item.source.frontend}>
                      <button className='text-yellow-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-1 rounded-md w-[30%] hover:text-black hover:bg-yellow-500 hover:scale-110 duration-300'>Frontend</button>
                    </Link>
                    <span className='m-1.5'></span>
                    <Link href={item.source.backend}>
                      <button className='text-yellow-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-1 rounded-md w-[30%] hover:text-black hover:bg-yellow-500 hover:scale-110 duration-300'>Backend</button>
                    </Link>
                    <span className='m-1.5'></span>
                    {/* <Link > */}
                      <button className='text-emerald-400 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-1 rounded-md w-[30%] hover:text-black hover:bg-emerald-400 hover:scale-110 duration-300'>Demo</button>
                    {/* </Link> */}
                  </div>
                )
              }
              {
                item.source?.sourceLink && (
                  <div className='mt-5 w-full text-center'>
                    <Link href={item.source.sourceLink}>
                      <button className='text-yellow-500 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-1 rounded-md w-[47%] hover:text-black hover:bg-yellow-500 hover:scale-110 duration-300'>Source</button>
                    </Link>
                    <span className='m-1.5'></span>
                    <button className='text-emerald-400 shadow-[0_3px_10px_rgb(0,0,0,0.5)] px-2 py-1 rounded-md w-[47%] hover:text-black hover:bg-emerald-400 hover:scale-110 duration-300'>Demo</button>
                  </div>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project