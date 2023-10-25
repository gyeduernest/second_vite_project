import React from 'react'

export default function Setup() {
  return (
    <div className='py-20 lg:px-20 px-5'>
      <div className='px-5 text-center lg:mt-32 mt-10'>
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
    </div>
  )
}
