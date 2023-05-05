import { Breadcrumbs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import api from '../../../constants/Api';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function BlogDetails() {

  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    featchData();
  }, []);

  const featchData = () => {
    api.get(`posts/${id}`).then((res) => setBlogData(res.data))
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div data-testid='BlogDetails'>
      <div className='blog-banner flex-col bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover pl-10 pr-10 box-border text-center' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLOKCrDc2fHx8fHx8MTY4MzMwMTEwMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)" }}>
        <div className='w-12 mb-5'>
          <AccountCircleIcon style={{ fontSize: '55px', color: '#fff' }} />
        </div>
        <p className='ml-5 text-white'>
          <span className='text-lg font-semibold leading-none tracking-tight'>User {id}</span>
          <span className='text-lg pl-2'>{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} · {id < 60 ? `${id + 1} min` : `1 hours`} min read</span>
        </p>
        <h2 className='mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
      </div>

      <div className='bg-red-400'>
        <div className='container mx-auto pt-3 pb-4 pl-10 pr-10 box-border'>
          <span>
            <Link underline="hover" to="/" className='text-red-900'><HomeIcon sx={{ mr: 0.3 }} style={{ fontSize: 20 }} className='text-red-900' /><span className='text-xs text-red-900 uppercase font-bold'>Home</span></Link>
          </span>
          <span className='text-red-900 pl-2 pr-2'><KeyboardArrowRightIcon style={{ fontSize: 20 }} /></span>
          <span>
            <Link underline="hover" to="/blog" className='text-red-900'><span className='text-xs text-red-900 uppercase font-bold'>Blog</span></Link>
          </span>
          <span className='text-red-900 pl-2 pr-2'><KeyboardArrowRightIcon style={{ fontSize: 20 }} /></span>
          <span className='text-xs text-white font-bold uppercase'>{blogData.title}</span>
        </div>
      </div>

      <div className='container mx-auto pt-5 pr-10 pl-10 box-border'>

        <div className='text-center pt-10'>
          <h2 className='text-2xl font-semibold leading-noneindex tracking-tight text-black capitalize'>{blogData.title}</h2>
        </div>

        <div className='pt-10'>
          <div className="grid lg:grid-cols-1 gap-4">
            <div className='pr-5 pl-5 flex justify-center bg-dt-img'>
              <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover shadow p-3' />
            </div>
          </div>

          <div className='pt-10'>
            <p>{blogData.body}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogDetails