import React from 'react'

export default function LogIn() {




  return (
    <div>
          <div className='w-80 p-3 ml-10 md:w-96 md:p-8 rounded-lg border-2 shadow-lg hover:border-blue-400 hover:border-2 border-gray-300' >
            <form action="">
              <div className='w-80 mb-8'><h1> Log in</h1>
              <p className='w-full'>Welcome back! You can now Log in your account details</p></div>
              <div class="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 md:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div class="mb-6">
        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 md:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
        <p className=''>Forgot Password?</p>
    </div> 
            <div className='mb-5 mt-10 w-80'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-full w-72  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </div>
            <div><p className='text-center'>Dont have an Account? Sign up</p></div>


            </form>
          </div>
    </div>
  )
}
