import React from 'react'
import img4 from '../images/fly.png';
import img5 from '../images/rocket.jpg';
import img7 from '../images/sticky.png';
import img1 from '../images/notepad.jpg';
import {motion as m} from 'framer-motion';

export default function MyFeatures() {
  return (
    <m.div  initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.75 , ease: "easeInOut"}}
    
    className='py-20 lg:px-20 px-5 h-full bg-slate-900'>
      <div><h1 className='text-white text-center'>what you wil get to do</h1></div>
      <div className="lg:flex lg:grid-cols-4 lg:mt-40">
        <div className=" lg:mt-96 w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900 lg:mb-20">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <img src={img4} alt="my hero" className='lg:w-10 lg:h-10 animate-bounce'/>
          </div>
          <div><h4 className='text-center text-white'>Many More</h4>
          <p className='text-center'>You can get access to more functions and games on this Platform</p></div>

        </div>
    
        <div className="lg:mt-72 w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <img src={img5} alt="my hero" className='lg:w-10 lg:h-10 animate-bounce'/>
         

          </div>
          <div><h4 className='text-center text-white'>To do list</h4>
          <p className='text-center'>create a to do list and save it to help in task managment</p></div>

        </div>
        <div className="lg:mt-40 w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2  border-purple-700 bg-slate-900">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <img src={img1} alt="my hero" className='lg:w-10 lg:h-10 animate-bounce'/>
         

          </div>
          <div><h4 className='text-center text-white'>Income Tracker</h4>
          <p className='text-center'>create a to do list and save it to help in task managment</p></div>

        </div>
        <div className=" w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3 '>
          <img src={img7} alt="my hero" className='lg:w-10 lg:h-10 animate-bounce'/>
         

          </div>
          <div><h4 className='text-center text-white '>Quote Genrator</h4>
          <p className='text-center'>create a to do list and save it to help in task managment</p></div>

        </div>
        

  </div>

    </m.div>
  )
}
