import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {motion as m} from 'framer-motion';

export default function  MobileMenu () {
  const [OpenMenu , setOpenMenu] = useState (false);
  const toggleMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  return ( 
    


    <div className="">
      <button className="MobileMenu" onClick={toggleMenu}>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <m.div className={` ${OpenMenu ?  'false' : 'hidden'}`}>
      <nav ClassName="z-50 h-screen">
          <ul className='text-center text-white h-screen pl-32 pt-32 justify-center items-center'>
            <NavLink to="/"><li><h5 className="mb-10">Home</h5></li></NavLink>
            <NavLink to="/getstarted"><li><h5 className="mb-10">Set up</h5></li></NavLink>
            <NavLink to="/features"><li><h5 className="mb-10">Features</h5></li></NavLink>
            <NavLink to="/testimony"><li><h5 className="mb-10">Testimonials</h5></li></NavLink>
            <NavLink to="/signup"><button type="button" className=" sm:block md:block lg:block  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button></NavLink>
          </ul>
        </nav>

        

      
      </m.div>
  
    </div>

   
   );
}
 
