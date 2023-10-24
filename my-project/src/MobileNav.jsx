import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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

      <div className={` ${OpenMenu ?  'false' : 'hidden'}`}>
      <nav ClassName="z-50 h-screen">
          <ul className='text-center text-white h-screen pl-32 pt-32 justify-center items-center'>
            <NavLink to="/"><li><h5 className="mb-10">Home</h5></li></NavLink>
            <NavLink to="/"><li><h5 className="mb-10">Set up</h5></li></NavLink>
            <NavLink to="/"><li><h5 className="mb-10">Benefits</h5></li></NavLink>
            <NavLink to="/"><li><h5 className="mb-10">Testimonials</h5></li></NavLink>
          </ul>
        </nav>

        

      
      </div>
  
    </div>

   
   );
}
 
