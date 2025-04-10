import React from 'react'
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Services} from '../components/util';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'

export const Service = () => {

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
      <section className="service pt-[60px] md:mb-[200px] md:pl-[100px] md:pr-[0px] px-4 overflow-hidden" id="service">
      <h2 className="text-[38px] font-[700] text-activeColor font-spaceGrotesk mb-[40px]"> Other Services</h2>
    
      <Carousel {...settings} className=' overflow-hidden'>
        {Services.map((service, i) => (
          <div key={i} className="relative h-[438px] w-[350px] m-[10px] rounded-[12px] overflow-hidden shadow-lg group group-hover:mx-5 group-hover:overflow-hidden"   >
            
            {/* Service Image (Scales on Hover) */}
            <a href={`/${service.link}`} >
            <img 
              src={service.serviceImg} 
              alt={service.text} 
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110 mx-5 rounded-[12px] overflow-hidden"
            />
               </ a>
    
    
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
  )
}

export default Service