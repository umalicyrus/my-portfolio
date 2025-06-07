import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
        Hi! I`m Cyrus P. Umali 
        <Image src={assets.hand_icon} className='w-6' alt=''/>
      </h3> 

      <h2 className='text-3xl sm:text-6xl lg:text-[40px] font-ovo'>
        Fullstack Web Developer
      </h2>

      <p className='max-w-2xl mx-auto font-ovo'>
        Skilled web developer with front-end and back-end experience. 
        Proficient in HTML, CSS, JavaScript, PHP, Tailwind CSS, React, Laravel, and Git.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contanct" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contanct me
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </a>
        <a href="/sample-resume.pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume
          <Image src={assets.download_icon} alt='' className='w-4'/>
        </a>        
      </div>
    </div>
  )
}

export default Header
