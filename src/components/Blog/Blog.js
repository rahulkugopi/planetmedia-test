import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import BlogTileView from './BlogTileView/BlogTileView';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Blog() {

  return (
    <div data-testid='blog'>
      <div className='blog-banner bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover text-center pb-3 pl-10 pr-10 box-border mt-0 lg:-mt-24' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523289333742-be1143f6b766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLOKCrDd8fHx8fHwxNjgzMjk3OTA1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)" }}>
        <h2 className='mb-4 text-3xl font-sans font-bold text-gray-900 md:text-4xl lg:text-5xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
      </div>

      <div className='bg-red-400'>
        <div className='container mx-auto pt-3 pb-4 pl-10 pr-10 box-border'>
          <span>
            <Link underline="hover" to="/" className='text-red-900'> <HomeIcon sx={{ mr: 0.3 }} style={{ fontSize: 20 }}  /> <span className='text-xs text-red-900 uppercase font-bold'>Home</span></Link>
          </span>
          <span className='text-red-900 pl-2 pr-2'><KeyboardArrowRightIcon style={{ fontSize: 20 }} /></span>
          <span className='text-xs text-white font-bold uppercase'>Blog</span>          
        </div>
      </div>

      <div className='container mx-auto pt-10'>
        <h2 className='mb-4 text-2xl font-semibold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl text-black uppercase'>Latest Blogs</h2>
        <BlogTileView page='blogs' />
      </div>
    </div>
  )
}

export default Blog