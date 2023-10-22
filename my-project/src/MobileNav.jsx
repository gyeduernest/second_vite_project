import React from "react";
import { useState } from "react";

const MobileMenu = () => {
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

      <div className={`sm:hidden   ${OpenMenu ?  'false' : 'hidden'}`}>
      <nav ClassName="z-50 h-screen">
          <ul className='text-center text-white h-screen p-36'>
            <li><h5>Home</h5></li>
          </ul>
        </nav>

        

      
      </div>
  
    </div>

   
   );
}
 
export default MobileMenu;