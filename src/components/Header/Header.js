import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [navShow, setNavShow] = useState(false);

  const handleNavOpen = () => {
    setNavShow(true);
  }

  const handleNavClose = () => {
    setNavShow(false);
  }

  return (
    <div data-testid='header' className='relative z-10'>
      <nav className="flex items-center justify-between flex-wrap bg-black/[.85] lg:bg-black/[.60] p-5 lg:pl-10 lg:pr-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to='/'><span className="font-medium text-4xl tracking-tight text-white">Test <span className='text-red-700 font-extrabold'>Site</span></span></Link>
        </div>
        <div className="block lg:hidden">
          {
            navShow == false ?
              <>
                <button className="flex items-center px-3 py-2" onClick={handleNavOpen}>
                  <MenuIcon className='text-lg text-white' />
                </button>
              </>

              :
              <>
                <button className="flex items-center px-3 py-2" onClick={handleNavClose}>
                  <CloseIcon className='text-lg text-white' />
                </button>
              </>
          }
        </div>

        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:pl-20 ${navShow == true ? 'block' : 'hidden'}`}>
          <div className="text-md lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-white hover:text-red-700 mr-8">
              Home
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-white hover:text-red-700 mr-8">
              About Us
            </a>
            <a href="/blog" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-white hover:text-red-700 mr-8">
              Blog
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-white hover:text-red-700 mr-8">
              Contact Us
            </a>
          </div>

          <div className="block mt-4 lg:mt-0">
            <button type='button' className='bg-red-700 text-white pt-3 pb-3 pl-8 pr-8 rounded-full hover:bg-red-900 w-full sm:w-48'>Sign In <LoginIcon /></button>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header