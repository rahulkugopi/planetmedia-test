import React from 'react'

function Footer() {
  return (
    <div data-testid='footer'>
      <footer className="bg-red-400 dark:bg-gray-900 mt-20">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">              
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Test Site </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li><a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a></li>
              <li><a href="#" className="mr-4 hover:underline md:mr-6">Blog</a></li>
            </ul>
          </div>                    
        </div>
      </footer>

      <div className="block text-sm pt-2 pb-2 bg-red-500 text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.</div>

      


    </div>
  )
}

export default Footer