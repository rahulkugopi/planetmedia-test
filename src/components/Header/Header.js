import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div data-testid='header'>
      <nav className="flex items-center justify-between flex-wrap bg-red-500 p-4 pl-6 pr-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to='/'><span className="font-semibold text-xl tracking-tight">Test Site</span></Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow lg:text-right">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
              Home
            </a>
            <a href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
              Blog
            </a>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header