import { useState ,useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { services } from './components/service';
import { prices } from './components/prices';
import Carousel from 'react-slick';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './components/Modal';  // Import the modal component;
import { HeroSlide } from './components/util';
import Ab from '../src/assets/aboutUs.avif';

import Mission from '../src/assets/Ourmission.avif'

import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'



function App() {
 useEffect(() =>{
  AOS.init({
    duration: 1000, // Duration of animations
  })
 }, []);

  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent('');
    setIsModalOpen(false);
  };
  const settings = {
    slidesToShow: 3,   // Default: 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 568,  // For screen widths <= 568px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  // For screen widths <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints here
    ],
  };

  const heroSettings = {
    infinite: true,
    speed: 600,
    fade: true, 
    autoplay: true,
    arrows: false
  };
  

  return (
    <main>
    <Navbar />

    {/* hero section  */}
      <Slider {...heroSettings} className="heroSlide">
        {HeroSlide.map((slide, i) => (
          <div key={i}>
            <section
              className="hero lg:h-screen h-screen text-white flex items-center pt-[1em] lg:pt-4 justify-start lg:pl-11 pl-4"
              id="home"
              style={{
                backgroundImage: `linear-gradient( rgba(2, 6, 23, 0.95) ,  rgba(2, 6, 23,1) ), url(${slide.img})`,
              }}
            >
              <div className="lg:mt-6 mt-[5em] pr-4">
                <div className="lg:w-[65%]">
                  <h2 className="text-[20px] text-white lg:text-4xl font-[400] lg:font-[500] uppercase" data-aos="fade-up">
                    {slide.title}
                  </h2>
                  <h3
                    className="text-2xl lg:text-4xl font-[400] lg:font-[500] uppercase leading-10 lg:leading-[50px] text-white"
                    data-aos="fade-up"
                  >
                    {slide.description}
                  </h3>
                  <button className="text-black my-10 bg-white" data-aos="zoom-in">
                   <a href="https://bit.ly/KelisConRequestform"   target='_blank' className='text-blueSlate'> Send Request</a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
 
    {/* hero section ending */}


    {/* about section  */}
    <section className="about lg:grid grid-cols-2 gap-16 lg:my-[6em] my-[3em] px-4 lg:h-[100vh]" id='about'>
      <div className="imgContainer lg:w-[110%] lg:pt-[2em] pl-0 lg:ml-[-20px] flex items-center" data-aos="zoom-in" data-aos-delay="300">
        <img src={Ab} className='w-full h-full' alt="" />
      </div>
      <div className="textArea flex items-center justify-self-start pl-4">
        <div className='lg:px-1 pr-3'>
          <h2 className='text-2xl lg:text-4xl font-[400] lg:font-[800] text-left lg:pl-6 py-4 text-blueSlate uppercase pt-[1em]' data-aos="fade-up">About <br className="hidden lg:block" /> <span className='text-yellowSlate'> Us</span> </h2>
          <p className='text-left lg:py-3 mb-8 lg:px-6 py-4 font-[600] text-2xl' data-aos="zoom-in">
            Kelis Concierge is a Lifestyle Management and Concierge service, we exist to serve both individual and business clients alike. Our purpose is to give our clients the most precious commodity of all…. TIME. Thats why we help you focus on the things that are important to you while you let us finish that time-consuming to-do list.
          </p>
          <button className='lg:w-[30%] lg:ml-6 bg-blueSlate text-white'><a href="#mission" className='text-white'>Learn More</a></button>
        </div>
      </div>
    </section>
    {/* about section ending */}

    {/* mission section  */}
    <section className="mission lg:grid grid-cols-2 gap-1 mt-[5em] lg:pt-[3em] bg-blueSlate py-10 items-center lg:mr-[4em] relative lg:pl-[4em] pb-10" id='mission'>
      <div className='textArea flex justify-center lg:px-3 p-4 leading-7 flex-col'>
        <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] text-left lg:px-6 text-white uppercase '> <span className='text-yellowSlate'>Our</span> <br /> Mission</h2>
        <p className='text-left py-6 lg:px-2 px-1 text-gray-300 lg:text-[20px] font-[500]' data-aos="fade-up" data-aos-delay="400">
          Our Mission is to provide a personalized solution to help you balance your work life and your personal life in which you will be allowed freedom and time to spend with your family, focus on growing your business, or relaxing and simply doing whatever it is you enjoy doing. We can confidently tell you this, we respond to every need from the simplest of errands to satisfying complex and time-consuming requests.
        </p>
        <button className='w-[40%] lg:ml-6 bg-white'><a href="#service" className='text-blueSlate font-[600]' data-aos="zoom-out">Learn More</a></button>
      </div>
      <div className="imgContainer w-[90%] order-[first] relative">
        <img src={Mission} className='w-full hidden lg:block absolute right-[-6.75em] top-[-9em]' alt="" />
      </div>
    </section>
    {/* mission section ending */}

    {/* how it works  */}
    <section className="howItwork flex justify-between items-center my-[4em] mx-auto lg:px-16 w-full flex-col lg:flex-row" id='how'>
      <div className="imgContain px-4 mt-12 lg:w-[100%]">
        <h3 className='text-left py-1 text-blueSlate font-[500] text-[22px]' data-aos="fade-in" data-aos-delay="200">
          Requests are made in a minimum of 12 hours advance notice. Although last minute emergency requests are accommodated (that will depend on the task).
        </h3>
        <h3 className='text-left py-2 text-blueSlate font-[500]' >
         --- <span className='font-bold'>General Hours</span>  are from Mondays - Fridays 8am - 5pm; Saturdays 9am - 4pm. 
        </h3>
        <h3 className='text-left py-2 text-blueSlate font-[500]' >
         --- <span className='font-bold'>
         Premium hours  
          </span> are after work hours (general hours), weekends, and holidays.
        </h3>
      </div>
      <div className="textArea p-10 pb-16 bg-blueSlate mt-[4em] lg:relative right-[-4em] lg:ml-[2em]">
        <h2 className='text-4xl font-[800] text-left uppercase'> <span className='text-yellowSlate'>How </span> <br /> it works</h2>
        <ul className='text-start flex flex-col gap-3 py-3 lg:text-1xl text-[18px]'>
          <li  data-aos="fade-up" data-aos-delay="200">1. Get the price estimate for the task or service.</li>
          <li data-aos="fade-up" data-aos-delay="200">
            2. Enter the location where you want the task or service performed.
          </li>
          <li  data-aos="fade-up" data-aos-delay="200">
            3. Confirmation of the request (by contacting you to verify the details of your request and gather any additional information before presenting you with payment option).
          </li>
          <li  data-aos="fade-up" data-aos-delay="200">
            4. Once payment has been made, Kelis Concierge will send out a personnel to execute the task or service.
          </li>
          <li>
            5.  Our charges are based on hourly services or dependent on the task(s) to be executed. Requests are sent through our form link Request Form or either via Email, Phone call, SMS message, or WhatsApp.
          </li>
        </ul>
        <code className='text-start '>
          <b>NOTE:</b>
          <span className='text-start '>Cancellation of a request must be made at least a minimum of 6-12 hours in advance of scheduled appointment, unless a penalty fee will be attached (A penalty of a 1-hour service charge).</span>
        </code>
      </div>
    </section>
    {/* how it works ending */}

    {/* services section  */}
    <section className="service my-[5em] bg-blueSlate py-10 lg:px-14 px-4" id='service'>
      <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] lg:px-6 text-white uppercase'>
        <span className='text-yellowSlate'>Our </span>
        <br className="hidden lg:block" />
         Services</h2>

      <Carousel {...settings}>
        {
          services.map((content, i) => (
            <div key={i} className="gridContent border bg-white rounded my-12 relative" style={{
              boxShadow: '2px 2px 2px red'
            }}>
              <div className="cardImg lg:h-[250px] overflow-hidden h-[340px] w-full">
                <img src={content.img} alt=""  className=" w-full h-full relative" data-aos="zoom-in" data-aos-delay="100" style={{
                  objectFit: 'cover',
                  objectPosition: 'top bottom'
                }} />
              </div>
              <div className='p-4 bg-yellowSlate'>
                <h5 className='py-2 text-blueSlate text-[22px] 
                font-[700]'>{content.title}</h5>
                <p className='text-[18px] text-white' data-aos="fade-out"  data-aos-delay="70" > 
                  {content.shortContent}
                </p>
                <button
                  className='bg-blueSlate text-white  my-4'
                  onClick={() => openModal(content.content || content.title)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        }
      </Carousel>
    </section>
    {/* services section ending */}

    {/* pricing  */}
    <section className='p-10 pb-0 price' id='price'>
      <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] lg:px-6 text-blueSlate uppercase text-center '> <span className='text-yellowSlate'>
        Pricing
      </span>  <br className='hidden lg:block' />  & Rating </h2>
      <div className="lg:grid grid-cols-5">
        {
          prices.map((content, i) => (
            <div key={i} className="gridContent border m-2 bg-white rounded my-12" style={{
              boxShadow: '2px 2px 2px white'
            }}>
              <div className="cardImg lg:h-[160px] overflow-hidden">
                <img src={content.img} alt="" data-aos="fade-up" data-aos-delay="100" / >
              </div>
              <h5 className='text-[18px] py-2 font-[600]'>{content.title}</h5>
              <p className='p-2'>#{content.price}/hr</p>
            </div>
          ))
        }
      </div>
    </section>
    {/* pricing ending */}
       <div className='note bg-yellowSlate text-blueSlate p-10 lg:m-[3em] mb-10'>
         <p className='pt-2'>
       <span className="font-bold">NOTE:</span>
     </p>
     <ul className='' style={{listStyle: 'inside'}}>
      <li>
      After the first hour, time will be billed in 15-minute increments. 
      </li>
      <li>
      The hourly rate begins from the time the task commences until the requested task is completed.
      </li>
      <li>
      Cancellation requests should be made 6-12 hours in advance; otherwise, a cancellation/penalty fee will be incurred.
      </li>
      <li>
      Free phone consultations are available to assess your needs and provide a free quote. 
      </li>
      <li>
      Rates and fees do not include the cost of purchases made on behalf of the client.
      </li>
      <li>
      Emergency requests will only be accepted if our schedule permits it.
      </li>
      <li>
      All service fees are to be paid in advance.
      </li>
      <li>
      Our services vary with the amount of time required.
      </li>
      <li>
      The task service charge will be discussed based on the specifics of the tasks before providing you with a quotation. 
      </li>
     </ul>
     <div className="noteOverlay"></div>
       </div>

    {/* Render the modal */}
    <Modal
      isOpen={isModalOpen}
      content={modalContent}
      onClose={closeModal}
    />

    <Footer />
  </main>
  )
}

export default App;
