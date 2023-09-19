import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Github from '../img/25231.png';
import Vercel from '../img/25331.png';
AOS.init();

const Socials = () => {

  return (
    <section className="bg-black">
      <div id='Socials' className='place-items-center pt-2 bg-black'>
        <div className='text-[30px] text-center p-8 gap-4'>
        <p className='mb-4'>Oto moje profile w mediach społecznościowych:</p>
      <div className='flex flex-row justify-between mt-10 gap-4 md:mx-40 mb-20'>
          <a href="https://www.linkedin.com/in/%C5%82ukasz-adamczyk-aa6374199https://www.instagram.com/nox29a/"><img className='max-w-[50px] max-h-[50px] cursor-pointer border-2 rounded-md border-purple-800 bg-white' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin"></img></a>
          <a href="https://www.facebook.com/nox29a/"><img className='max-w-[50px] max-h-[50px] cursor-pointer border-2 rounded-md border-purple-800 bg-white' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="facebook"></img></a>
          <a href="https://www.tiktok.com/nox29a/"><img className='max-w-[50px] max-h-[50px] cursor-pointer border-2 rounded-md border-purple-800 bg-white' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjkwOC1jYS03Ml8xLnBuZw.png" alt="tiktok"></img></a>
          <a href="https://www.instagram.com/nox29a/"><img className='max-w-[50px] max-h-[50px] cursor-pointer border-2 rounded-md border-purple-800 bg-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png" alt="instagram"></img></a>
          <a href="https://www.x.com/nox29a/"><img className='max-w-[50px] max-h-[50px] cursor-pointer border-2 rounded-md border-purple-800 bg-white' src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png" alt="instagram"></img></a>
          <a href="https://www.youtube.com/nox29a/"><img className='max-w-[50px] max-h-[50px] cursor-pointer border-2 rounded-md border-purple-800 bg-white' src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube"></img></a>
</div>
          <p className='mb-4'>Zapraszam do kontaktu mailowego:</p>
          <p className=' mb-12 text-sm sm:text-2xl lg:96 sm:mx-5 md:mx-32  p-4 bg-black-400 hover:bg-gray-700 text-white  border-2 border-purple-700 rounded-full'>adamczyk29a@interia.pl</p>
  


          </div></div>
    </section>
  )
};

export default Socials;
