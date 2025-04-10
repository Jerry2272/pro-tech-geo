import { useEffect } from 'react';
import { Navbar } from "../components/Navbar"
import AboutImg from '../assets/aboutTing.png'
import missionVision from '../assets/mission_vision.png'

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import Client from '../molecules/Client';
import { Footer } from '../components/Footer';


export const About = () => {
    const mission = [
        {
            id: 1,
            headText: 'Our',
            headTextspan: 'Mission',
            bodyText:'To deliver precise and innovative geospatial solutions that empower industries through quality surveying, mapping, and technical services—driven by expertise, technology, and continuous staff development.'
        },
        {
            id: 2,
            headText: 'Our',
            headTextspan: 'Vision',
            bodyText:'To be a leading provider of geospatial and technical solutions, setting the standard for accuracy, innovation, and sustainable impact across key industries.'
        },
        {
            id: 3,
          img : missionVision
        }
    ]
    useEffect(() =>{
      AOS.init({
        duration: 1000, // Duration of animations
      })
     }, []);
  return (
    <>
        <Navbar />

        {/* hero section  */}
        <section className="md:h-[440px] lg:h-[440px] aboutBg"  
        >
            {/* <h2>About Us</h2> */}
        </section>

            {/* about section  */}
            <section className="about md:grid grid-cols-2 justify-center items-center  md:h-auto    overflow-hidden px-[120px]  pt-[60px] pb-[100px]" id='about'>
              <div className=" " data-aos="zoom-in" data-aos-delay="300">
                <img src={AboutImg} className='' alt="" />
              </div>
              <div className=" ">
                <div className=''>
                  <p className=' text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]' data-aos="zoom-in">
                  At Protech Geosolution Limited (PGSL), we are committed to delivering precision-driven and innovative geospatial solutions that power industries and infrastructure development. Established in Nigeria and duly incorporated under the Companies and Allied Matters Act on January 9, 2020, we have consistently provided top-tier technical services across multiple sectors, including surveying, geospatial mapping, hydrography, mining, petroleum, and telecommunications
                  </p>
                  <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
                  Our expertise spans Survey & Geomatics Services, Hydrographic & Hydrometric Surveys, Geographic Information Systems (GIS), and Geodetic Resource Data tailored for the mining, petroleum, exploration, and telecommunication sectors. We also specialize in geotechnical investigations, environmental impact assessments, dredging support services, and civil construction projects—ensuring seamless integration of our solutions into real-world applications.
                  </p>
                  <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
                  As a company, we prioritize technical excellence and innovation by continuously training and retraining our team to uphold global best practices. We also facilitate the importation, exportation, sales, and leasing of hydrographic and geographic equipment, ensuring that our clients have access to the latest tools and technology for their projects.
                  </p>
                  <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
                  At PGSL, we don’t just provide services; we deliver solutions that empower businesses, enhance decision-making, and shape the future of infrastructure and environmental sustainability.                  </p>
                </div>
              </div>
            </section>
            {/* about section ending */}

            {/* vision | Mission  */}
            <section className='px-[120px] '>
                <h1 className='md:text-[60px] font-[700] text-navColor md:mb-[40px] font-spaceGrotesk'>Our <span className='text-activeColor '>Mission <br /> </span> 
                & <span className='text-activeColor '>Vision</span> Statement</h1>

               <div className='grid grid-cols-3'>
                {mission.map((item , i ) =>(
                    <div key={i} className='mission_vision px-[24px] pt-[40px]'>
                        <h2 className=' font-[700] text-white md:mb-[40px] font-manRope text-[32px]'>{item.headText} <span className='text-navColor'>{item.headTextspan}</span> </h2>
                        <p className='md:text-[18px] font-[400] text-white md:mb-[40px] font-manRope'>{item.bodyText}</p>
                        <img src={item.img} className="w-[100%]" alt="" />
                     </div>   
                ))}
               </div>
            </section>

            {/* client  */}
            <Client />
                <Footer />
    </>
  )
}

export default About