import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Home() {

  const navigate = useNavigate();

  const handleViewBlog = () => {
    navigate('/blog');
  }

  return (
    <div data-testid='Home'>
      <div className='home-banner bg-slate-400 flex justify-center flex-row text-center items-center bg-no-repeat' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1610703122258-5a08b3166416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLOKCrDE5fHx8fHx8MTY4MzI4NzU4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)" }}>
        <div className='container mx-auto ml-10 mr-10 bg-black/[.1] p-12 rounded-lg mt-20 lg:mt-0'>
          <h2 className='mb-4 text-4xl font-sans font-bold text-gray-900 md:text-3xl lg:text-5xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button type='button' onClick={handleViewBlog} className='mt-5 bg-red-700 text-white pt-4 pb-4 pl-10 pr-10 font-semibold rounded-full text-lg hover:bg-red-900 w-full sm:w-48'>View Blog</button>
        </div>
      </div>

      <div className='bg-red-500 pt-16 pb-16'>
        <div className='container mx-auto'>
          <div className="w-full pl-10 pr-10 box-border text-center lg:text-left">
            <h2 className='mb-4 text-2xl font-semibold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-white'>About Me</h2>
            <p className='text-white'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto pt-10'>
        <h2 className='mb-4 text-2xl font-semibold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-black'>Latest News</h2>

        <div className="grid lg:grid-cols-3 gap-4 pt-10 pl-10 pr-10">
          <div className='shadow rounded-2xl '>
            <div className='blog-top-img flex align-middle justify-center'>
              <img src={`${process.env.REACT_APP_IMG_URL}/?office&€2`} className='object-cover w-full rounded-t-lg' />
            </div>

            <div className='pt-5 pb-5 pl-5 pr-5'>
              <div className='w-full mb-5'>
                <span className='bg-slate-400 pt-1 pb-1 pl-3 pr-3 rounded-sm mr-1'>News</span>
                <span className='bg-slate-400 pt-1 pb-1 pl-3 pr-3 rounded-sm mr-1'>Fashion</span>
                <span className='bg-slate-400 pt-1 pb-1 pl-3 pr-3 rounded-sm mr-1'>Life Style</span>
              </div>


              <div className='blog-header'>
                <h2 className='text-2xl font-semibold leading-noneindex tracking-tight text-black capitalize'>Test Header</h2>
              </div>

              <div className='blog-content'>
                <div className='blog-content-inner'>
                  <p className='pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>

              <button id="button" className="mt-5 bg-transparent text-blue duration-300" >
                Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Home