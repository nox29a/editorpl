import React from 'react';
import HeroImg from '../img/hero.png';
const Header = () => {
  return (
    <header className=' bg-herohead backdrop-blur-sm py-6 fixed w-full z-10 border-b-4 border-purple-800'>
      <div className='container mx-0 flex items-center justify-between h-full  '>
        <div className='cursor-pointer' >
          <a href='#Hero'>
          <img className='sm:flex max-w-[50px] max-h-[50px]' src={HeroImg} alt="hero"></img></a>
        </div>
        <div className='grid grid-cols-2 text-lg text-center sm:flex sm:flex-row sm:text-2xl sm:justify-end'>
            <div className='m-2  p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#About'>About</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Videos'>Videos</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Projects'>Edits</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Projects'>Photos</a></div>
            <div className='m-2 p-2 border-2 border-purple-800 bg-black rounded-xl bg-opacity-60 cursor-pointer' >
            <a href='#Certification'>Socials</a></div>
          </div>    
      </div>
  </header>
  ); 
};

export default Header;
