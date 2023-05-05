import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import api from '../../../constants/Api';

function BlogTileView(props) {

  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    featchData();
  }, []);

  const featchData = () => {
    api.get('posts').then(res => {      
      if (props.page == 'home') {
        setBlogData(res.data.slice(0, 3));
      }
      else {
        setBlogData(res.data);
      }

    }).catch(error => {
      console.log(error);
    });
  }

  const handleReadMore = (evt) => {
    navigate(`/blog-details/${evt}`);
  }

  return (
    <div data-testid='BlogTileView'>
      <div className="grid lg:grid-cols-3 gap-6 pt-10 pl-10 pr-10">
        {
          blogData.map((res, index) => (
            <div className='shadow rounded-2xl' key={index}>
              <div className='blog-top-img flex align-middle justify-center'>
                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${index}`} className='object-cover w-full rounded-t-lg' />
              </div>

              <div className='pt-5 pb-5 pl-5 pr-5'>
                <div className='w-full mb-5 flex items-center'>
                  <AccountCircleIcon />
                  <span className='text-sm text-slate-900 pl-2 font-semibold'>{new Date().getDate()} / {new Date().getMonth() + 1} / {new Date().getFullYear()} · 1 hours  read</span>
                </div>

                <div className='w-full mb-5'>
                  <span className='bg-zinc-600 pt-1 pb-1 pl-3 pr-3 rounded-sm mr-1 text-white'>News</span>
                  <span className='bg-zinc-600 pt-1 pb-1 pl-3 pr-3 rounded-sm mr-1 text-white'>Fashion</span>
                  <span className='bg-zinc-600 pt-1 pb-1 pl-3 pr-3 rounded-sm mr-1 text-white'>Life Style</span>
                </div>


                <div className='blog-header'>
                  <h2 className='text-2xl font-semibold leading-noneindex tracking-tight text-black capitalize'>{res.title}</h2>
                </div>

                <div className='blog-content'>
                  <div className='blog-content-inner'>
                    <p className='pt-2'>{res.body}</p>
                  </div>
                </div>

                <button id="button" className="mt-5 bg-transparent text-blue duration-300" onClick={e => handleReadMore(index)}>
                  Read more <ArrowForwardIcon style={{ fontSize: '16px' }} />
                </button>
              </div>
            </div>
          ))
        }
      </div >
    </div>
  )
}

export default BlogTileView