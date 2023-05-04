import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

function BlogDetails() {
  return (
    <div data-testid='BlogDetails'>
      <div className='blog-banner flex-col bg-slate-300 flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png)" }}>
        <div className='w-12 mb-5'>
          <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='rounded-full object-cover' />
        </div>
        <p className='ml-5 text-white'>
          <span className='text-lg font-semibold leading-none tracking-tight'>Jese Leos</span>
          <span className='text-lg pl-2'>Aug 15, 2021 · 16 min read</span>
        </p>
        <h2 className='mb-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl text-white'>Test ijsabf wfweijhfw ekkk</h2>
      </div>

      <div className='container mx-auto pt-5'>

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/"> <HomeIcon sx={{ mr: 0.6 }} fontSize="105px" /> <span className='text-sm'>Home</span></Link>
          <Link underline="hover" color="inherit" href="/blog"><span className='text-sm'>Blog</span></Link>
          <p  className='text-sm text-slate-500 font-semibold'>Test ijsabf wfweijhfw ekkk</p>
        </Breadcrumbs>

        <div className='pt-10'>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>

          <div class="grid lg:grid-cols-3 gap-4 pt-10">
            <div className='shadow pt-5 pb-5 pr-5 pl-5'>
              <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='object-cover' />
            </div>

            <div className='shadow pt-5 pb-5 pr-5 pl-5'>
              <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='object-cover' />
            </div>

            <div className='shadow pt-5 pb-5 pr-5 pl-5'>
              <img src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png' className='object-cover' />
            </div>
          </div>

          <p className='mt-10'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>

        </div>
      </div>
    </div>
  )
}

export default BlogDetails