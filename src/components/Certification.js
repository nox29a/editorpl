import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Certification = () => {
      return (
<div id='Certification' className='grid place-items-center pt-32 bg-black'>
<div class="relative flex min-h-screen items-center justify-center overflow-hidden ">
  <div class="max-w-2xl px-24">
    <div class="relative h-80 w-[32rem] shadow-xl shadow-black/60">
      <div class="top-left absolute -top-6 -left-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      
      <div class="top-right absolute -top-6 -right-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <div class="bottom-right absolute -bottom-6 -right-10 h-12 w-20 -rotate-45 bg-purple-900"></div>
      <div class="bottom-left absolute -bottom-6 -left-10 h-12 w-20 rotate-45 bg-blue-900"></div>
      <img class="h-full w-full object-cover" src="https://as2.ftcdn.net/v2/jpg/04/80/78/59/1000_F_480785959_uBzp37VuAD3NkLNMm8Ia93guQ1HyH2aT.jpg" alt="" />
    </div>
  </div>
</div>
</div>
      )
};

export default Certification;
