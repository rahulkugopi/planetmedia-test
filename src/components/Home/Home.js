import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const handleViewBlog = () => {
    navigate('/blog');
  }

  return (
    <div data-testid='Home'>
      <div className='home-banner bg-slate-400 flex justify-center flex-row text-center items-center' style={{ backgroundImage: "url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png)" }}>
        <div className='container mx-auto'>
          <h2 className='mb-4 text-4xl font-normal leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
          <button type='button' onClick={handleViewBlog} className='mt-4 bg-red-500 pt-3 pb-3 pl-10 pr-10 text-white cursor-pointer'>View Blog</button>
        </div>
      </div>

      <div className='container mx-auto'>

      <div className="grid lg:grid-cols-1 gap-4 pt-10">
        <h2 className='mb-4 text-4xl font-normal text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-black'>About Me</h2>
      </div>

        <div className="grid lg:grid-cols-2 gap-4 pt-10">
          <div className='main-about'>
            <img src={`${process.env.REACT_APP_IMG_URL}/?office&€2`} className='object-cover' />
          </div>

          <div className='pt-5'>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

            <p className='mt-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

            <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home