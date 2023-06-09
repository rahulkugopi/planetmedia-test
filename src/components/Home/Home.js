import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogTileView from '../Blog/BlogTileView/BlogTileView';


function Home() {

  const navigate = useNavigate();

  const handleViewBlog = () => {
    navigate('/blog');
  }

  return (
    <div data-testid='Home'>
      <div className='home-banner bg-slate-400 flex justify-center flex-row text-center items-center bg-no-repeat mt-0 lg:-mt-24' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1610703122258-5a08b3166416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLOKCrDE5fHx8fHx8MTY4MzI4NzU4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)" }}>
        <div className='container mx-auto ml-5 mr-5 lg:ml-10 lg:mr-10 bg-black/[.1] p-12 rounded-lg mt-0 lg:mt-0'>
          <h2 className='mb-4 text-3xl font-sans font-bold text-gray-900  md:text-4xl lg:text-5xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button type='button' onClick={handleViewBlog} className='mt-5 bg-red-700 text-white pt-4 pb-4 pl-10 pr-10 font-semibold rounded-full text-lg hover:bg-red-900 w-full sm:w-48'>View Blog</button>
        </div>
      </div>

      <div className='bg-red-500 pt-16 pb-16'>
        <div className='container mx-auto'>
          <div className="w-full pl-10 pr-10 box-border text-center lg:text-left">
            <h2 className='mb-4 text-2xl font-semibold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl text-white uppercase'>About Me</h2>
            <p className='text-white'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto pt-10'>
        <h2 className='mb-4 text-2xl font-semibold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl text-black uppercase'>Latest Blogs</h2>
        <BlogTileView page='home' />        
      </div>
    </div >
  )
}

export default Home