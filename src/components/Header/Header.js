import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div data-testid='header'>
      <nav className="flex items-center justify-between flex-wrap bg-slate-200  p-5 pl-10 pr-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to='/'><span className="font-medium text-4xl tracking-tight">Test <span className='text-red-700 font-extrabold'>Site</span></span></Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:pl-20">
          <div className="text-md lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-slate-600 hover:text-red-700 mr-8">
              Home
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-slate-600 hover:text-red-700 mr-8">
              About Us
            </a>
            <a href="/blog" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-slate-600 hover:text-red-700 mr-8">
              Blog
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-slate-600 hover:text-red-700 mr-8">
              Contact Us
            </a>
          </div>

          <div className="text-md lg:flex-row-reverse flex pt-5">
            <div className="block">
              <button type='button' className='bg-red-700 text-white pt-3 pb-3 pl-8 pr-8 rounded-full hover:bg-red-900'>Sign In</button>
            </div>          
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header