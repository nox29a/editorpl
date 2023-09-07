import React from 'react';

import Promo1 from '../img/promo1.jpg';
import Promo2 from '../img/promo2.jpg';
import Promo3 from '../img/promo3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Videos = () => {
  return (
    <div id="Videos" className=' pt-32 bg-black'>
    <div className='grid place-items-center'>
      <div className='container mx-auto'>
    <h1 data-aos="flip-down" className='text-[70px] sm:text-[90px] text-center p-8 gap-4'>Filmy</h1>
    <div className='text-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-8 gap-20'>
    {/* FIRST CARD */}
  <div  data-aos="flip-left" class="group w-72 sm:w-96 h-[500px] [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Promo1} alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">

          <p class="text-2xl m-2">Kompleksowe edycje 📹</p>
          <p class="text-base m-2">Jestem pasjonatem montażu kompleksowych filmów video, tworzę wyjątkowe historie z dbałością o każdy detal. Zapraszam do odkrywania moich produkcji!</p>
          <button class="border p-1 m-2 rounded-xl">Zobacz</button>
   
        </div>
      </div>
      </div></div>
    {/* SECOND CARD */}
    <div  data-aos="flip-left" class="group w-72 sm:w-96 h-[500px] [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Promo3} alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">

        <p class="text-2xl m-2">Śmieszne edycje 🤣</p>
          <p class="text-base m-2">Mam bogate doświadczenie w montażu filmów, specjalizuję się w tworzeniu zabawnych, niepowtarzalnych produkcji. Zobacz, jak mogę uczynić twoje pomysły jeszcze lepszymi!</p>
          <button class="border p-1 m-2 rounded-xl">Zobacz</button>
   
        </div>
      </div>

      
      </div></div> 
    {/* THIRD CARD */}
    <div  data-aos="flip-left" class="group w-72 sm:w-96 h-[500px] [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] overflow-visible [-webkit-transform-style: preserve-3d] group-hover:[-webkit-transform:rotateY(180deg)] [transform:rotateY(180deg)] z-1">
      <div class="absolute inset-0">
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={Promo2} alt="" />
      </div>
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [-webkit-transform:rotateY(180deg)] [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] z-5">
        <div class="flex min-h-full flex-col items-center justify-center">

          <p class="text-2xl m-2">Rozwój marki 📈</p>
          <p class="text-base m-2">Zbuduj swój wizerunek i powiększ lojalną społeczność za pomocą strategii wideo. Tworzę treści, które wzmacniają markę i przyciągają uwagę. Razem osiągniemy sukces! </p>
          <button class="border p-1 m-2 rounded-xl">Zobacz</button>
        </div>
      </div>
      </div></div> 
      </div>
    </div>
  </div>
  </div>

  )
};

export default Videos;
