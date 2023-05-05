import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div data-testid='footer'>
      <footer className="bg-zinc-900 dark:bg-gray-900 mt-20">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/'><span className="font-medium text-4xl tracking-tight text-white">Test <span className='text-red-700 font-extrabold'>Site</span></span></Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 text-white">
              <li><Link to="/" className="mr-4 hover:underline md:mr-6 font-semibold">Home</Link></li>
              <li><Link to="/" className="mr-4 hover:underline md:mr-6 font-semibold">About Us</Link></li>
              <li><Link to="/" className="mr-4 hover:underline md:mr-6 font-semibold">Blog</Link></li>
              <li><Link to="/" className="mr-4 hover:underline md:mr-6 font-semibold">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="block text-sm pt-4 pb-4 bg-black text-gray-500 sm:text-center dark:text-gray-400 text-white font-semibold">© {new Date().getFullYear()} All Rights Reserved.</div>




    </div>
  )
}

export default Footer