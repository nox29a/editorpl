import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import sliderimg from '../img/hero3.jpg'
import sliderimg2 from '../img/hero2.jpg'
import sliderimg3 from '../img/hero1.jpg'
import HeroImg from '../img/hero.png';

const sliderData = [
  {
    img: sliderimg,
    title: "Montaż rolek",
  },
  {
    img: sliderimg2,
    title: "Filmy reklamowe",
  },
  {
    img: sliderimg3,
    title: "Napisy do filmów",
    },
    {
        img: HeroImg,
        title: "Loga i Awatary",
        },
]

const MainSlider = () => {

  return (
  <Swiper
      className='mainSlider h-full rounded-sm'
      modules={[Autoplay]}
      loop={true}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false
      }}
      

    >
  
    <>
      {sliderData.map((slide, index) => {
      return <SwiperSlide key={index}>

          <div className='h-[400px] w-[400px]'>
            <div className='absolute font-semibold flex text-[35px] text-center uppercase z-20 text-primary border-2 rounded-full bg-black border-purple-800 w-[220px]  top-[220px] lg:left-44 lg:top-80 p-2'>{slide.title}</div>
            <img className='absolute w-full rounded-full' src={slide.img} alt='promoimages'></img>
          </div>
      </SwiperSlide>
      })}
    </>
  </Swiper>
  );
};

export default MainSlider;
