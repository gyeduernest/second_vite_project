import React from 'react'
import img3 from '../images/phone.png';


export default function Hero() {
  return (
    <div className='py-20 lg:px-20 px-5'>
      <div className='mb-20 lg:flex lg:mb-10 lg:justify-center lg:items-center'>
          <div className='lg:w-1/2 lg:mr-40'>
          <h2 className='text-white p-5 text-center'>Get to have Fun with this <span className='rounded-md px-2 py-0 leading-relaxed bg-purple-700 '>Platform</span>
          </h2>
        <p className='px-3 text-center mb-10'>The all in one Application is what you need to releae stress and make time very productive
        </p>
          </div>
          <div>
            <img src={img3} alt="my hero" className='lg:w-96 lg:h-96'/>
      
          </div>

        </div>
        
        <div className='lg:justify-center lg:items-center lg:w-full lg:mx-auto lg:flex mx-auto flex justify-center items-center'>
        <SecondaryBtn text="Get the App"/>
        </div>
    </div>
  )
}
