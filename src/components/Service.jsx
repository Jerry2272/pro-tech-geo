import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Services } from '../components/util';
import { useEffect } from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';

export const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    slidesToShow: 3.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <section className="service pt-[60px] md:mb-[200px] px-4 overflow-hidden" id="service">
      <h2 className="text-[38px] font-bold text-activeColor font-spaceGrotesk mb-[40px]">
        Other Services
      </h2>

      <Carousel {...settings}>
        {Services.map((service, i) => (
          <div key={i} className="px-2">
            <a href={`/${service.link}`} className="block relative h-[430px] rounded-[12px] overflow-hidden shadow-md group">
              {/* Image */}
              <img
                src={service.serviceImg}
                alt={service.text}
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div
                className="absolute bottom-0 left-0 w-full p-4 text-white"
                style={{
                  background: 'linear-gradient(1.98deg, rgba(2, 1, 1, 0.6) 66.76%, rgba(2, 1, 1, 0) 93.65%)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <h2 className="text-[22px] md:text-[26px] font-semibold font-manRope">
                  {service.text}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Service;
