import React from 'react';
import BlogTileView from './BlogTileView/BlogTileView';

function Blog() {

  return (
    <div data-testid='blog'>
      <div className='blog-banner bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(https://source.unsplash.com/random/?office&€7)" }}>
        <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white'>Blog</h2>
      </div>

      <div className='container mx-auto pt-10'>
        <h2 className='mb-4 text-2xl font-semibold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-black'>Latest Blogs</h2>
        <BlogTileView page='blogs' />        
      </div>
    </div>
  )
}

export default Blog