import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const handleViewBlog = () => {
    navigate('/blog');
  }

  return (
    <div data-testid='Home' className='home-banner bg-slate-400 flex justify-center flex-row text-center items-center' style={{ backgroundImage: "url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png)" }}>
      <div className='container mx-auto'>
        <h2 className='mb-4 text-4xl font-normal leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <button type='button' onClick={handleViewBlog} className='mt-4 bg-red-500 pt-3 pb-3 pl-10 pr-10 text-white cursor-pointer'>View Blog</button>


      </div>            
    </div>
  )
}

export default Home