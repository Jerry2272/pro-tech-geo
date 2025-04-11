import Img1 from '../assets/hydro2.png'
import hydroBg from '../assets/hydroBg.png'
import { useEffect } from 'react';
import { Navbar } from "../components/Navbar"
import { Footer } from '../components/Footer';
import { Service } from '../components/Service';
import {  hyDroservices } from '../components/util';

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import Client from '../molecules/Client';
export const HydroGraphics = () => {
 
        useEffect(() =>{
          AOS.init({
            duration: 1000, // Duration of animations
          })
         }, []);
  return (
    <>
    <Navbar />

                {/* hero section  */}
                <section className="md:h-[440px] lg:h-[440px] h-[60vh] flex justify-center items-center text-center"
                
                style={{
                    backgroundImage: `url(${hydroBg})`
                }}
        >
             <h2 className="md:hidden lg:hidden block text-[40px] font-[700] text-white md:mb-[40px] font-manRope">
              Hydrographics & Hydrometric Survey</h2>
        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden pt-[60px] pb-[100px]">
  <div className="md:grid grid-cols-2 justify-center items-center md:h-auto overflow-hidden px-[10px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="px-2">
        <p className="text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]" data-aos="zoom-in">
        At Protech Geosolution Limited (PGSL), we provide advanced Hydrographic and Hydrometric Survey services to support water-related projects across sectors such as construction, oil and gas, dredging, coastal engineering, and environmental management.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-out">
        Our team uses state-of-the-art sonar, echo sounders, and GPS positioning systems to collect accurate data on water depths, seabed profiles, flow rates, sediment transport, and tidal patterns. These insights are critical for safe navigation, infrastructure planning, flood control, and resource exploration.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
        Whether it’s rivers, lakes, coastal zones, or offshore environments, we deliver high-quality data that supports informed decision-making and long-term project success.
        </p>
        <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our services include:</h2>
    <ul style={{listStyle: 'inside'}} data-aos="zoom-in" data-aos-delay="300">
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Bathymetric mapping</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">River and coastal surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Current and tide measurements</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Hydrological data collection</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Dredging and reclamation support</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Environmental and flood risk assessments</li>
    </ul>
      </div>
    </div>
    <div className="flex justify-center items-center" data-aos="zoom-in" data-aos-delay="300">
      <img src={Img1} className="md:w-[80%] h-auto" alt="Geosolutions" />
    </div>
  </div>
</section>
   {/* about section ending */}

                    {/* services images display in grid   */}
                    <section className="lg:px-[100px] px-[30px]">
  <div className="grid lg:grid-cols-3 lg:grid-row-3 gap-4 justify-center mx-auto otherService rounded-[22.79px]">
    {
      hyDroservices.map((item, i) => (
        <div key={i} className="flex justify-center">
          <img 
            src={item.img} 
            className="w-full h-auto object-cover rounded-[22.79px]"
            alt={item.name || 'Image'} // Always add alt text for accessibility
            data-aos="zoom-in" data-aos-delay="300"  />
        </div>
      ))
    }
  </div>
</section>
  
                    {/* services images display in grid eding   */}


        <Service />
                 

   
                    
                    <Client />
                    <Footer />
    </>
  )
}

export default HydroGraphics