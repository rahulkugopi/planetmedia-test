import { Breadcrumbs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import api from '../../../constants/Api';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <div className='blog-banner flex-col bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png)" }}>
        <div className='w-12 mb-5'>
          <AccountCircleIcon style={{ fontSize: '55px', color:'#fff' }} />
        </div>
        <p className='ml-5 text-white'>
          <span className='text-lg font-semibold leading-none tracking-tight'>User {id}</span>
          <span className='text-lg pl-2'>{new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()} · {id < 60 ? `${id+1} min` : `1 hours` } min read</span>
        </p>
        <h2 className='mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl text-white'>{blogData.title}</h2>
      </div>

      <div className='container mx-auto pt-5'>

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/"> <HomeIcon sx={{ mr: 0.6 }} fontSize="105px" /> <span className='text-sm'>Home</span></Link>
          <Link underline="hover" color="inherit" href="/blog"><span className='text-sm'>Blog</span></Link>
          <p  className='text-sm text-slate-500 font-semibold'>{blogData.title}</p>
        </Breadcrumbs>

        <div className='pt-10'>
          <p>{blogData.body}</p>

          <div className="grid lg:grid-cols-1 gap-4 pt-10">
            <div className='pt-5 pb-5 pr-5 pl-5 flex justify-center bg-dt-img'>
              <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${id}`} className='object-cover'  />
            </div>           
          </div>        

        </div>
      </div>
    </div>
  )
}

export default BlogDetails