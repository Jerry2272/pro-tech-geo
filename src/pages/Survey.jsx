import Img1 from '../assets/hydro2.png'
import geoImg2 from '../assets/geo2.png'
import hydroBg from '../assets/surveyBg.png'
import { useEffect } from 'react';
import { Navbar } from "../components/Navbar"
import { Footer } from '../components/Footer';
import { Service } from '../components/Service';
import { Services , survey } from '../components/util';
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import Client from '../molecules/Client';
export const Survey = () => {
    const settings = {
        slidesToShow: 3.2,  // Show 3 full slides + a part of the next slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true,
        centerMode: true,  // Enable centering effect
        centerPadding: "50px", // Adjust padding to control the visible part of the next slide
        responsive: [
          {
            breakpoint: 568, // For mobile screens
            settings: {
              slidesToShow: 1.1, // Show one full slide and a small part of the next
              slidesToScroll: 1,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 768, // For tablets
            settings: {
              slidesToShow: 2.2, // Show two full slides and a part of the next
              slidesToScroll: 1,
              centerPadding: "30px",
            },
          },
        ],
      };
   
        useEffect(() =>{
          AOS.init({
            duration: 1000, // Duration of animations
          })
         }, []);
  return (
    <>
    <Navbar />

                {/* hero section  */}
                <section className="md:h-[440px] lg:h-[440px] relative flex justify-center items-center text-center "
                
                style={{
                    backgroundImage:  `url(${hydroBg})`,
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
        >
            <h2 className="md:text-[70px] font-[700] text-white font-manRope z-[999] relative"> Survey & Geomatic < br /> Service</h2>

            <div className="absolute" style={{inset: '0', width: '100%' , height: '100%', background: '#0201014D'}}>  </div>  
        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden pt-[60px] pb-[100px]">
  <div className="md:grid grid-cols-2 justify-center items-center md:h-auto overflow-hidden px-[10px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="">
        <p className="text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]" data-aos="zoom-in">
        At Protech Geosolution Limited (PGSL), our Survey & Geomatics Services are designed to provide precise spatial data that drives the success of engineering, construction, environmental, and infrastructure projects.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-out">
We combine traditional surveying methods with modern technologies such as GPS/GNSS, Total Stations, UAV (drone) mapping, and GIS to deliver reliable, high-accuracy geospatial information. Our team ensures that every dataset we generate meets industry standards and supports your project from planning through execution.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
        Whether you need land boundary surveys, construction staking, topographic mapping, or GIS data integration, PGSL is your trusted partner for accurate, efficient, and cost-effective surveying solutions.
        </p>

        <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our services include:</h2>
    <ul style={{listStyle: 'inside'}} data-aos="zoom-in" data-aos-delay="300">
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Boundary & cadastral surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Engineering and construction surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Topographic and terrain mapping</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">UAV and drone-based surveys</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">GIS data acquisition and processing</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Route and alignment surveys</li>
    </ul>
      </div>
    </div>
    <div className="flex justify-center items-center" data-aos="zoom-in" data-aos-delay="300">
      <img src={Img1} className="w-[80%] h-auto" alt="Geosolutions" />
    </div>
  </div>
</section>
   {/* about section ending */}

                    {/* services images display in grid   */}
                    <section className="lg:px-[100px] px-[30px]">
  <div className="grid lg:grid-cols-3 lg:grid-row-3 gap-4 justify-center mx-auto otherService rounded-[22.79px]">
    {
      survey.map((item, i) => (
        <div key={i} className="flex justify-center">
              <Link to={item.link} >
      <img 
          src={item.img} 
          alt={item.text} 
          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110 mx-5 rounded-[12px] overflow-hidden"
        />
        </Link>
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

export default Survey