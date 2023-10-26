import React from 'react'
import MobileNav from './MobileNav'
import { NavLink } from 'react-router-dom'
import {motion as m} from 'framer-motion';


export default function DesktopNavBar() {
  return (
    <m.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.75 , ease: "easeInOut"}}
            
    >
    <div>
      
<nav class="bg-inherit   border-gray-200 dark:bg-gray-900 top-0">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* This is the mobile Nav functional component */}
    <MobileNav/>
  </div>
  <div class="flex md:order-2">


  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 lg:pl-96" id="navbar-cta">
    <ul className="lg:mr-96 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-inherit md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  
      <li>
        <NavLink to="/"><a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-200 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a></NavLink>
      </li>
      <li>
        <NavLink to="/getstarted"><a href="#" class="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:text-gray-200  md:dark:text-blue-500" aria-current="page">Set up</a></NavLink>
        
      </li>
      <li>
        <NavLink to="/features"><a href="#" class="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:text-gray-200  md:dark:text-blue-500" aria-current="page">Features</a></NavLink>
        
      </li>
      <li>
        <NavLink to="/testimony"><a href="#" class="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:text-gray-200  md:dark:text-blue-500" aria-current="page">Testimonials</a></NavLink>
        
      </li>
    </ul>
      <NavLink to="/signup"><button type="button" className=" sm:block md:block lg:block hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button></NavLink>
  </div>
  </div>
</nav>

    </div>
    </m.div>
  )
}
