import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../constants/Api';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Blog() {

  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    featchData();
  }, []);

  const featchData = () => {
    api.get('posts').then((res) => setBlogData(res.data))
      .catch(error => {
        console.log(error);
      });
  }

  const handleReadMore = (evt) => {
    navigate(`/blog-details/${evt}`);
  }

  console.log(blogData)

  return (
    <div data-testid='blog'>
      <div className='blog-banner bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(https://source.unsplash.com/random/?office&€7)" }}>
        <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white'>Blog</h2>
      </div>

      <div className='container mx-auto'>
        <div className="grid lg:grid-cols-3 gap-4 pt-10">

          {
            blogData.map((res, index) => (
              <>
                <div className='shadow pt-5 pb-5 pr-5 pl-5'>
                  <div className='blog-top-img flex align-middle justify-center'>
                    <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${index}`} className='object-cover' />
                  </div>
                  <h2 className='pt-5 text-1xl font-semibold leading-noneindex tracking-tight dark:text-white capitalize'>{res.title}</h2>
                  <div className='blog-content'> 
                    <div className='blog-content-inner'>
                    <p className='pt-2'>{res.body}</p>
                    </div>                                      
                  </div>
                  <div className='flex pt-5'>
                    <div className='w-12'>
                      <AccountCircleIcon style={{ fontSize: '45px' }} />
                    </div>

                    <p className='ml-5'>
                      <span className='text-md font-semibold leading-none tracking-tight dark:text-white'>Jese Leos</span>
                      <br />
                      <span className='text-sm'>Aug 15, 2021 · 16 min read</span>
                    </p>
                  </div>
                  <button id="button" className="mt-8 bg-transparent text-blue duration-300" onClick={e => handleReadMore(index)}>
                    Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
                  </button>
                </div>
              </>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Blog