import React from 'react';
import HeroImg from '../img/hero.png';
const Hero = () => {
  return (
<div id="Hero" className='grid h-screen place-items-center bg-black'>
  <div className='container mx-auto flex flex-col justify-center'>
    <div className='absolute font-semibold flex items-center uppercase'>
      <h1 className='text-[50px] sm:text-[70px] leading-[1.1] font-light'> 
      <span data-aos="zoom-out-down" className='font-semibold'>
      Łukasz Adamczyk<br />
      </span> 
      <span data-aos="zoom-out-right" className='text-[40px] sm:text-[60px] text-purple-700'>Video editor<br /></span>
      <span data-aos="zoom-in-left" className='text-[20px] sm:text-[40px] '>
      Open to work
      </span></h1>
    </div>
      <div className='hidden animate-in md:flex-rows lg:flex justify-end'>
        <img className='max-w-[400px] max-h-[400px]' src={HeroImg} alt="hero"></img>
      </div>
  </div>
</div>
    );
};

export default Hero;
