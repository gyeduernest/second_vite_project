import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='mt-20 lg:px-40  flex justify-center items-center text-white'>
      
            <div className='w-80 p-3 ml-10 md:w-96 md:p-8 rounded-lg border-2 shadow-lg hover:border-blue-400 hover:border-2 border-gray-300'>
              <div className=' text-white'>
                <form action="" className='text-white'>
                      <div className='mb-10'><h1 className=''> Sign up</h1>
                      <p> Enter your detailes to enjoy this Platform</p></div>
                      <div className=''>
            <label htmlFor="first_name" class="block mb-2 text-sm font-medium text-gray-0 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div><div>
            <label htmlFor="last_name" class="block mb-2 text-sm font-medium text-gray-0 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
           <div class="mb-6">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-0 dark:text-white">Email address</label>
                          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 md:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
           </div> 
                      <div class="mb-6">
                          <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-0 dark:text-white">Password</label>
                          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 md:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                      </div> 
                      <div>
            <label htmlFor="phone" class="block mb-2 text-sm font-medium text-gray-0 dark:text-white">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-80 w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
                              <div className='mb-5 mt-5 w-80'>
                              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-full w-72  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </div>
            <NavLink to="/login">

            <div><p className='text-center'>Have an Account? Log in</p></div>
            </NavLink>
            </form>

                  
              </div>
              

            </div>


    </div>
  )
}
