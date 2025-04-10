import { useEffect } from 'react';
import './App.css';
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
// import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Carousel from 'react-slick';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeroSlide, Services } from './components/util';
import AboutImg from '../src/assets/aboutP.png';

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import Client from './molecules/Client';


function App() {
 useEffect(() =>{
  AOS.init({
    duration: 1000, // Duration of animations
  })
 }, []);
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

  const heroSettings = {
    infinite: true,
    speed: 5000,
    fade: true, 
    autoplay: true,
    arrows: false
  };


  return (
    <>
    <Navbar />
    <main>
    {/* hero section  */}
      <Slider {...heroSettings}>
        {HeroSlide.map((slide, i) => (
          <div key={i} 
          >
            <section
              className="md:h-[85vh] h-[80vh] flex text-left md:pl-[100px] items-center  pl-[10px]"
              id="home"
              style={{
                backgroundImage: `linear-gradient(270.47deg, rgba(2, 1, 1, 0) 20.32%, rgba(2, 1, 1, 0.51) 50.96%, #020101 122.45%), url(${slide.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:  'cover',
                backgroundPosition: 'center'
              }}
            >
                <div className=" text-center flex  flex-col md:w-[641px]">
                  <h4 className="md:text-[60px] text-[40px] font-[700] text-white font-spaceGrotesk text-left md:leading-[80px] mb-[12px] leading-[55px]" data-aos="fade-up">
                  {slide.title}
                  </h4>
                  <h6
                    className="md:text-[28px] text-[18px] font-[500] text-white font-manRope text-left mb-[55px]"
                    data-aos="fade-up"
                  >
                   {slide.description}
                  </h6>
                 <div className="flex gap-[24px]">
                 <Link to="/geo" className="bg-white text-navColor text-[16px] font-[400] font-manRope" 
        style={{
          padding: '12px 16px 12px 16px',
          borderRadius: '8px',
          border: '0',
        }}
        >
        Our Services
        </Link>
        <Link to="/contact" className="bg-activeColor text-white text-[16px] font-[400] font-manRope" 
        style={{
          padding: '12px 16px 12px 16px',
          borderRadius: '8px',
          border: '0',
        }}
        >
        Contact Us 
        </Link>
                  </div>
                </div>
            </section>
          </div>
        ))}
      </Slider>
    
 
    {/* hero section ending */}
    
    {/* about section  */}
    <section className="about md:grid grid-cols-2 justify-center items-center  md:h-auto    overflow-hidden md:pl-[100px] pl-[30px] pr-[30px] pt-[100px] pb-[100px] bg-bgBackground" id='about'>
      <div className=" " data-aos="zoom-in" data-aos-delay="300">
        <img src={AboutImg} className='' alt="" />
      </div>
      <div className=" ">
        <div className=''>
          <h2 className=' text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk ' data-aos="fade-up">About Us</h2>
          <p className=' text-[17px] font-[400] text-textColor font-manRope leading-[28px] mb-[20px]' data-aos="zoom-in">
          At Protech Geosolution Limited (PGSL), we are committed to delivering precision-driven and innovative geospatial solutions that power industries and infrastructure development. Established in Nigeria and duly incorporated under the Companies and Allied Matters Act on January 9, 2020, we have consistently provided top-tier technical services across multiple sectors, including surveying, geospatial mapping, hydrography, mining, petroleum, and telecommunications
          </p>
          <p className=" text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[40px]" data-aos="zoom-out">
          Our expertise spans Survey & Geomatics Services, Hydrographic & Hydrometric Surveys, Geographic Information Systems (GIS), and Geodetic Resource Data tailored for the mining, petroleum, exploration, and telecommunication sectors. We also specialize in geotechnical investigations, environmental impact assessments, dredging support services, and civil construction projects—ensuring seamless integration of our solutions into real-world applications.
          </p>
          <Link to="/about" className="bg-activeColor text-white text-[16px] font-[400] font-manRope" 
        style={{
          padding: '12px 16px 12px 16px',
          borderRadius: '8px',
          border: '0',
        }}
        >
       See All
        </Link>
        </div>
      </div>
    </section>
    {/* about section ending */}

    {/* services section  */}
    <section className="service pt-[100px] md:mb-[200px] md:pl-[100px] md:pr-[0px] px-4 overflow-hidden" id="service">
 <div className="flex md:pr-[3em]">
 <h2 className="text-[38px] font-[700] text-activeColor font-spaceGrotesk mb-[40px]">Our Services</h2>
<div className="flex ml-auto gap-[20px]">
<button
           
           className="rounded-[4px] flex justify-center items-center"
           style={{
            color: '#323232',
            width: '42px',
height: '40px',
background: '#E3E3E333'
           }}
         >
         <FiChevronLeft size={24} />
         </button>
         <button
           className="rounded-[4px] flex justify-center items-center"
           style={{
            color: '#323232',
            width: '42px',
height: '40px',
background: '#E3E3E333'
           }}
         >
            <FiChevronRight size={24} />

         </button>
</div>
</div>

  <Carousel {...settings} className=' overflow-hidden'>
    {Services.map((service, i) => (
      <div key={i} className="relative h-[438px] w-[350px] m-[10px] rounded-[12px] overflow-hidden shadow-lg group group-hover:mx-5 group-hover:overflow-hidden"   >
        
        {/* Service Image (Scales on Hover) */}
      <a href={service.link} >
      <img 
          src={service.serviceImg} 
          alt={service.text} 
          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110 mx-5 rounded-[12px] overflow-hidden"
        />
        </a>


        {/* Text Content */}
        <div className="absolute bottom-0 left-0 w-full text-left text-white font-[300] text-[32px] pl-[14px] rounded-[12px] md:ml-5 pb-5  duration-500"
        style={{
        background: 'linear-gradient(1.98deg, rgba(2, 1, 1, 0.5) 66.76%, rgba(2, 1, 1, 0) 93.65%)',
        backdropFilter: 'blur(6px)'
        }}
        >     
          <h2 className='text-[32px] font-[400] text-white font-manRope'>{service.text}</h2>
        </div>
      </div>
    ))}
  </Carousel>
</section>


    {/* services section ending */}
<Client />
{/* client Section */}

    {/* client Section ending*/}
    <Footer />
  </main>
  </>
  )
}


export default App;
