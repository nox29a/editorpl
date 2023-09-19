import React from 'react';
import Portret from '../img/portret.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
  return (
  <div id="About" className=' pt-40 bg-black'>
    <div className='grid place-items-center'>
      <div className='container mx-auto'>
        <h1 data-aos="flip-down" className='text-[90px] text-center p-8 gap-4'>O mnie</h1>
            <div className='text-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-8 gap-20'>
              <p data-aos="fade-right" className='bg-hero border-2 border-purple-700 text-xl rounded-lg p-8 '><img src={Portret} alt='portret' className='w-fit' /></p>
              <p data-aos="fade-right" className='bg-hero border-2 border-purple-700 text-xl rounded-lg p-8 text-center'>Jestem doświadczonym montażystą wideo, który pasjonuje się tworzeniem dynamicznych i przekonujących produkcji wizualnych. Dzięki mojej wiedzy technicznej i artystycznej kreatywności jestem w stanie przekształcić surowy materiał wideo w płynne narracje, które przyciągają uwagę i emocjonują widzów.</p>
              <p data-aos="fade-left" className='justify-end bg-hero border-2 border-purple-700 text-xl  rounded-lg p-8 text-center'>Moja praca opiera się na dbałości o najmniejsze detale, a moje umiejętności pozwalają mi dostosować się do różnorodnych stylów i potrzeb projektów. Jako montażysta wideo jestem gotów do podjęcia nowych wyzwań i współpracy nad projektami, które wymagają profesjonalnego podejścia i kreatywności.
</p>
            </div>
      </div>
    </div>
  </div>
  )
};

export default About;
