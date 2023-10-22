import React from 'react'
import { PrimaryBtn, SecondaryBtn } from '../Components'
import MyTestimony from '../Main_components/Testimonials'


export default function Home() {
  return (
    
<div className='py-20 lg:px-20 px-5'>
        <div className='lg:flex'>
          <div className='lg:w-2/3 '>
          <h2 className='text-white p-5 text-center'>Get to have Fun with this <span className='rounded-md px-2 py-0 leading-relaxed bg-purple-700 '>Platform</span>
          </h2>
        <p className='px-3 text-center mb-10'>The all in one Application is what you need to releae stress and make time very productive
        </p>
          </div>
          <div>
      <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
          </div>

        </div>
        
        <div className='lg:justify-center lg:items-center lg:w-full lg:mx-auto lg:flex mx-auto flex justify-center items-center'>
        <SecondaryBtn text="Get the App"/>
        </div>
        
      <div className='px-5 text-center mt-10'>
         <h3 className='text-purple-700'>How to Get <span className='leading-relaxed px-2 rounded-md bg-white'> Started</span></h3>
      </div>

        <div className='w-40 rounded-full h-40 bg-purple-200  shadow-2xl blur-3xl z-0 fixed justify-center'>
        
        </div>

  <div className='grid-cols-3 lg:flex mt-10  mb-10'>
        <div className='ml-10 mb-10'> <h2 className='text-center w-16 h-16 rounded-full border-2 border-purple-700 hover:bg-purple-700 text-white '>1</h2>
        <h4 className='text-white '>Click on the button</h4>
        <p className='text-center'>Click on the Get the App button which will redirect you to the Create Account page if you are new</p>
        </div>
        <div className='ml-10 mb-10 lg:mt-56'> <h2 className='ml-20 text-center w-16 h-16 rounded-full border-2 border-purple-700 hover:bg-purple-700 text-white '>2</h2>
        <h4 className='text-white  text-center px-5'>Create Account or Log in</h4>
        <p className='text-center mr-4'>You can begin to input your details if you are new or click to Log into your account if you are an old user</p>
        </div>
        <div className='ml-10 mb-10 lg:mt-96'> <h2 className='ml-40 text-center w-16 h-16 rounded-full border-2 border-purple-700 hover:bg-purple-700 text-white '>3</h2>
        <h4 className='text-white text-center '>Enjoy the App</h4>
        <p className='text-center'>Click on the Get the App button which will redirect you to the Create Account page if you are new</p>
        </div>
      
  </div>

  <div className="lg:flex lg:grid-cols-4 ">
        <div className=" lg:mt-96 w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900 lg:mb-20">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <span class="h-8 w-8 animate-pulse absolute inline-flex   rounded-full bg-white opacity-75"></span>

          </div>
          <div><h4 className='text-center text-white'>Many More</h4>
          <p className='text-center'>You can get access to more functions and games on this Platform</p></div>

        </div>
    
        <div className="lg:mt-72 w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <span class="h-8 w-8 animate-pulse absolute inline-flex   rounded-full bg-yellow-400 opacity-75"></span>


          </div>
          <div><h4 className='text-center text-white'>To do list</h4>
          <p className='text-center'>create a to do list and save it to help in task managment</p></div>

        </div>
        <div className="lg:mt-40 w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <span class="h-8 w-8 animate-pulse absolute inline-flex   rounded-full bg-red-400 opacity-75"></span>


          </div>
          <div><h4 className='text-center text-white'>Income Tracker</h4>
          <p className='text-center'>create a to do list and save it to help in task managment</p></div>

        </div>
        <div className=" w-64 rounded-md p-2  h-64 mx-auto mb-10 border-2 border-purple-700 bg-slate-900">
          <div className='w-16 h-16 rounded-full border-2 border-purple-200 p-3'>
          <span class="h-8 w-8 animate-pulse absolute inline-flex   rounded-full bg-orange-400 opacity-75"></span>


          </div>
          <div><h4 className='text-center text-white '>Quote Genrator</h4>
          <p className='text-center'>create a to do list and save it to help in task managment</p></div>

        </div>
        

  </div>

        
          
        <div className="w-full lg:px-20 md:px-20 lg:mb-20 mb-10 ">
          <div className='lg:mb-20 mb-10'><h2 className='px-5 py-2 rounded-lg text-purple-700 bg-white text-center'> Testimonials</h2></div>
          <div className='grid-col-3'>
          <MyTestimony  />
          </div>
        
        

        </div>



      




 </div>
        
      

      
    
  )
}
