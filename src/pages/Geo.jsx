import geoImg1 from '../assets/geo1.png'
import geoImg2 from '../assets/geo2.png'
import { useEffect } from 'react';
import { Navbar } from "../components/Navbar";
import { Service } from '../components/Service';
import { Footer } from '../components/Footer';

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import Client from '../molecules/Client';
export const Geo = () => {
   
        useEffect(() =>{
          AOS.init({
            duration: 1000, // Duration of animations
          })
         }, []);
  return (
    <>
    <Navbar />

                {/* hero section  */}
                <section className="md:h-[440px] lg:h-[440px] geoBg h-[70vh] flex justify-center items-center text-center"  
        >
      <h2 className="md:hidden lg:hidden block text-[40px] font-[700] text-white md:mb-[40px] font-manRope">Geographic & 
      Geodetic Survey</h2>
        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden pt-[60px] pb-[100px]">
  <div className="md:grid grid-cols-2 justify-center items-center md:h-auto overflow-hidden px-[10px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="">
        <p className="text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]" data-aos="zoom-in">
          At Protech Geosolution Limited (PGSL), we offer highly accurate Geographic and Geodetic Surveying services that form the backbone of reliable spatial data for infrastructure, exploration, and environmental projects.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-out">
          Using advanced GNSS technology, total stations, and satellite imagery, we provide precise location-based data for engineering, construction, land development, telecommunications, mining, and petroleum exploration. Our geodetic surveys establish control networks that serve as reference points for all types of mapping and surveying activities
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
          Whether its for boundary demarcation, large-scale infrastructure planning, topographic mapping, or resource exploration, we ensure our clients receive accurate, consistent, and dependable data every time
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center" data-aos="zoom-in" data-aos-delay="300">
      <img src={geoImg1} className="md:w-[80%] h-auto" alt="Geosolutions" />
    </div>
  </div>
    <div className=' flex md:flex-row flex-col justify-between lg:gap-[350px] px-[1em] md:px-0 lg:px-0'>
   <div className=''>
   <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our services include:</h2>
    <ul style={{listStyle: 'inside'}} className='mb-5' data-aos="zoom-in" data-aos-delay="300">
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Control network establishment</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Boundary and cadastral surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Topographic and terrain mapping</li>
        <li className="text-[17px] text-textColor font-[400] font-manRope leading-[32px]">Geodetic data for mining and oil industries</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Survey support for telecom infrastructure</li>
    </ul>
   </div>
    <img src={geoImg2} alt="" data-aos="fade-up" />
    </div>
</section>

                    {/* about section ending */}

      <Service />
                    <Client />
                    <Footer />
    </>
  )
}

export default Geo