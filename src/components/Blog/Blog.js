import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

function Blog() {

  const navigate = useNavigate();

  const handleReadMore = () =>{
    navigate("/blog-details/1");
  }

  return (
    <div data-testid='blog'>
      <div className='blog-banner bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png)" }}>
        <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white'>Blog</h2>
      </div>

      <div className='container mx-auto'>

        <div class="grid lg:grid-cols-3 gap-4 pt-10">
          <div className='shadow pt-5 pb-5 pr-5 pl-5'>
            <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png' />
            <h2 className='pt-5 text-1xl font-semibold leading-none tracking-tight dark:text-white'>Test Header</h2>
            <p className='pt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex pt-5'>
              <div className='w-12'>
                <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='rounded-full object-cover' />
              </div>

              <p className='ml-5'>
                <span className='text-md font-semibold leading-none tracking-tight dark:text-white'>Jese Leos</span>
                <br />
                <span className='text-sm'>Aug 15, 2021 · 16 min read</span>
              </p>
            </div>
            <button id="button" class="mt-8 bg-transparent text-blue duration-300" onClick={handleReadMore}>
              Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
            </button>
          </div>

          <div className='shadow pt-5 pb-5 pr-5 pl-5'>
            <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png' />
            <h2 className='pt-5 text-1xl font-semibold leading-none tracking-tight dark:text-white'>Test Header</h2>
            <p className='pt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex pt-5'>
              <div className='w-12'>
                <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='rounded-full object-cover' />
              </div>

              <p className='ml-5'>
                <span className='text-md font-semibold leading-none tracking-tight dark:text-white'>Jese Leos</span>
                <br />
                <span className='text-sm'>Aug 15, 2021 · 16 min read</span>
              </p>
            </div>
            <button id="button" class="mt-8 bg-transparent text-blue duration-300">
              Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
            </button>
          </div>

          <div className='shadow pt-5 pb-5 pr-5 pl-5'>
            <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png' />
            <h2 className='pt-5 text-1xl font-semibold leading-none tracking-tight dark:text-white'>Test Header</h2>
            <p className='pt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex pt-5'>
              <div className='w-12'>
                <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='rounded-full object-cover' />
              </div>

              <p className='ml-5'>
                <span className='text-md font-semibold leading-none tracking-tight dark:text-white'>Jese Leos</span>
                <br />
                <span className='text-sm'>Aug 15, 2021 · 16 min read</span>
              </p>
            </div>
            <button id="button" class="mt-8 bg-transparent text-blue duration-300">
              Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
            </button>
          </div>

          <div className='shadow pt-5 pb-5 pr-5 pl-5'>
            <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png' />
            <h2 className='pt-5 text-1xl font-semibold leading-none tracking-tight dark:text-white'>Test Header</h2>
            <p className='pt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex pt-5'>
              <div className='w-12'>
                <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='rounded-full object-cover' />
              </div>

              <p className='ml-5'>
                <span className='text-md font-semibold leading-none tracking-tight dark:text-white'>Jese Leos</span>
                <br />
                <span className='text-sm'>Aug 15, 2021 · 16 min read</span>
              </p>
            </div>
          </div>

          <div className='shadow pt-5 pb-5 pr-5 pl-5'>
            <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png' />
            <h2 className='pt-5 text-1xl font-semibold leading-none tracking-tight dark:text-white'>Test Header</h2>
            <p className='pt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex pt-5'>
              <div className='w-12'>
                <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='rounded-full object-cover' />
              </div>

              <p className='ml-5'>
                <span className='text-md font-semibold leading-none tracking-tight dark:text-white'>Jese Leos</span>
                <br />
                <span className='text-sm'>Aug 15, 2021 · 16 min read</span>
              </p>
            </div>
            <button id="button" class="mt-8 bg-transparent text-blue duration-300">
              Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog