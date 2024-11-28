import { useState ,useEffect } from 'react';
import './App.css';
// import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { testimonies } from './components/service';
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
    speed: 5000,
    fade: true, 
    autoplay: true,
    arrows: false
  };
  

  return (
    <main>
   

    {/* hero section  */}
      <Slider {...heroSettings} className="heroSlide">
        {HeroSlide.map((slide, i) => (
          <div key={i} 
          >
            <section
              className="hero lg:h-[120vh] h-screen text-white flex pt-[5em]  justify-center lg:pl-11 pl-4"
              id="home"
              style={{
                backgroundImage: `linear-gradient( rgb(5, 46, 22 , 0.75),  rgb(5, 46, 22 , 1) ), url(${slide.img})`,
              }}
            >
              <div className="lg:mt-6 mt-[5em] pr-4 mx-auto w-[60%]">
                <div className=" text-center flex justify-center flex-col items-center">
                  <h2 className="text-[20px] text-white lg:text-4xl font-[400] lg:font-[600] uppercase mb-5" data-aos="fade-up">
                  Welcome to Green passion Believer Fellowship
                  </h2>
                  <h6
                    className="text-2xl lg:text-4xl font-[400] lg:font-[400] uppercase leading-10 lg:leading-[50px] text-white"
                    data-aos="fade-up"
                  >
                    ...United in Faith, Strengthened in Christ
                  </h6>
                  <button className="text-black my-10 bg-white" data-aos="zoom-in">
                   <a href="https://bit.ly/KelisConRequestform"   target='_blank' className='text-green'>Join Our WhatApp</a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
 
    {/* hero section ending */}

    {/* about section  */}
    <section className="about lg:grid grid-cols-2 gap-16 lg:my-[6em] my-[2em] px-4 lg:h-[100vh]" id='about'>
      <div className="imgContainer lg:w-[110%] lg:pt-[2em] pl-0 lg:ml-[-20px] flex items-center" data-aos="zoom-in" data-aos-delay="300">
        <img src={Ab} className='w-full h-full' alt="" />
      </div>
      <div className="textArea flex items-center justify-self-start pl-4">
        <div className='lg:px-1 lg:pr-3'>
          <h2 className='text-2xl lg:text-4xl font-[400] lg:font-[800] text-left lg:pl-6 py-4 text-green uppercase pt-[1em]' data-aos="fade-up">About GPBF</h2>
          <p className='text-left lg:py-3 mb-4 lg:px-6 py-4 font-[600] text-2xl' data-aos="zoom-in">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus labore asperiores sequi ducimus non quod sed, nulla provident perspiciatis aut ut accusantium sint maxime quidem tempora eaque fugiat, commodi dignissimos? Amet incidunt ut architecto officia illo corporis. Quibusdam quod animi unde porro nostrum sint? 
          </p>
          <button className='lg:w-[30%] lg:ml-6 bg-green text-white'><a href="#mission" className='text-white'>Learn More</a></button>
        </div>
      </div>
    </section>
    {/* about section ending */}

      {/* mission section  */}
  <section className="mission lg:grid grid-cols-2 gap-1 mt-[1em] lg:pt-[3em] bg-green-950 py-10 items-center lg:mr-[4em] relative lg:pl-[4em] pb-10 lg:h-[55vh]" id='vision'>
      <div className='textArea flex justify-center lg:px-3 p-4 leading-7 flex-col pl-[40px] '>
        <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] text-left lg:px-6 text-white uppercase '> Our Vision</h2>
        <p className='text-left py-6 lg:px-2 px-1 text-gray-300 lg:text-[20px] font-[500]' data-aos="fade-up" data-aos-delay="400">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus cumque dignissimos aut magni qui saepe dolorem consequuntur illum minima?
        </p>
        <button className='w-[40%] lg:ml-6 bg-white'><a href="#service" className='text-green font-[600]' data-aos="zoom-out">Learn More</a></button>
      </div>
      <div className="imgContainer w-[90%] order-[first] relative">
        <img src={Mission} className='w-full hidden lg:block absolute right-[-6.75em] top-[-9em]' alt="" />
      </div>
    </section>
    {/* mission section ending */}

    {/* misson section  */}
    <section className='lg:h-[100vh] lg:mt-[11em] flex flex-col justify-center items-center mt-[3em]'>
      <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] text-left lg:px-6  uppercase my-5'>Our Mission</h2>
      <p>Loving radically, living generously</p>

      <div className="grid lg:grid-cols-3  lg:p-[6em] lg:pt-[4em]">
        <div className='m-[1em] bg-green-950 text-white p-4 lg:h-[70vh]'>
          <h2 className='font-bold text-2xl my-8'>watching Jesus do the extraordinary.</h2>
          <h6>
          At the core of everything we do, our commitment to radical love sets us apart. We believe in embracing all individuals just as they are—with open arms and without judgement. This love motivates us to serve, support, and lift each other up in all walks of life.
          </h6>
        </div>
        <div className='m-[1em] bg-green-950 text-white p-4 lg:h-[70vh]'>
          <h2 className='font-bold text-2xl my-8'>Live Generously</h2>
          <h6>
          Generosity is not just about giving; its about living. We make it our mission to live generously in every interaction, whether it’s with time, energy, or resources.
          </h6>
        </div>
        <div className='m-[1em] bg-green-950 text-white p-4 lg:h-[70vh]'>
          <h2 className='font-bold text-2xl my-8'>Watch the Extraordinary</h2>
          <h6>
          When we come together in faith, extraordinary things happen. We are a testament to the power of Jesus and the incredible acts that follow when we put our trust in Him. Witnessing miracles, big and small, is part of our journey.
          </h6>
        </div>
      </div>
    </section>
    {/* misson section  */}

    {/* how it works  */}
    {/* <section className="howItwork flex justify-between items-center my-[4em] mx-auto lg:px-16 w-full flex-col lg:flex-row" id='how'>
      <div className="imgContain px-4 mt-12 lg:w-[100%]">
        <h3 className='text-left py-1 text-green font-[500] text-[22px]' data-aos="fade-in" data-aos-delay="200">
          Requests are made in a minimum of 12 hours advance notice. Although last minute emergency requests are accommodated (that will depend on the task).
        </h3>
        <h3 className='text-left py-2 text-green font-[500]' >
         --- <span className='font-bold'>General Hours</span>  are from Mondays - Fridays 8am - 5pm; Saturdays 9am - 4pm. 
        </h3>
        <h3 className='text-left py-2 text-green font-[500]' >
         --- <span className='font-bold'>
         Premium hours  
          </span> are after work hours (general hours), weekends, and holidays.
        </h3>
      </div>
      <div className="textArea p-10 pb-16 bg-green mt-[4em] lg:relative right-[-4em] lg:ml-[2em]">
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
    </section> */}
    {/* how it works ending */}

    {/* testimonial section  */}
    <section className="service my-[5em] py-10 lg:px-14 px-4"  id='service'>
      <h2 className='lg:text-4xl text-3xl lg:font-[800] font-[300] lg:px-6 text-green text-center uppercase'> Testimonial</h2>

      <Carousel {...settings}>
        {
          testimonies.map((content, i) => (
            <div key={i} className="gridContent border bg-white rounded my-12 relative" >
              <div className="cardImg lg:h-[280px] overflow-hidden h-[340px] w-full">
                <img src={content.img} alt=""  className=" w-full h-full relative" data-aos="zoom-in" data-aos-delay="100" style={{
                  objectFit: 'cover',
                  objectPosition: 'top bottom'
                }} />
              </div>
              <div className='p-4 bg-green-950'>
                <h5 className='py-2 text-white text-[22px] 
                font-[700]'>{content.title}</h5>
                <p className='text-[18px] text-white' data-aos="fade-out"  data-aos-delay="70" > 
                  {content.content}
                </p>
              </div>
            </div>
          ))
        }
      </Carousel>
    </section>
    {/* testimonial section ending */}

{/* Events Section */}
<section id="events" className="events p-8 bg-white my-12 lg:px-16">
  <h2 className="text-3xl lg:text-4xl font-bold text-center text-green uppercase mb-6">
    Upcoming Events
  </h2>
  <div className="event-list grid lg:grid-cols-2 gap-12">
    <div className="event-item bg-green-950 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
      <h3 className="text-xl font-bold mb-4">Weekly Bible Study</h3>
      <p className="text-lg">Join us every Monday at 6:30 PM for an uplifting Bible study session.</p>
    </div>
    <div className="event-item bg-green-950 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-bold mb-4">Prayer Meetings</h3>
      <p className="text-lg">Come together every Thursday at 7:00 PM for powerful prayer meetings.</p>
    </div>
    <div className="event-item bg-green-950 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-xl font-bold mb-4">Community Outreach</h3>
      <p className="text-lg">Be a part of our community outreach every last Saturday of the month.</p>
    </div>
  </div>
</section>

{/* Resources Section */}
<section id="resources" className="resources p-8 bg-gray-100 my-12 lg:px-16">
  <h2 className="text-3xl lg:text-4xl font-bold text-center text-green uppercase mb-6">
    Useful Resources
  </h2>
  <div className="resource-list grid lg:grid-cols-3 gap-12">
    <div className="resource-item bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
      <h3 className="text-xl font-bold mb-4">Bible Study Guide</h3>
      <p className="text-lg">Explore the depths of Gods word with our Bible study guide, available for download.</p>
      <button className="bg-green-950 text-white p-2 rounded mt-4">
        <a href="link-to-guide" className="text-white">Download Now</a>
      </button>
    </div>
    <div className="resource-item bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-bold mb-4">Christian Articles</h3>
      <p className="text-lg">Read a variety of insightful Christian articles on faith, life, and growth.</p>
      <button className="bg-green-950 text-white p-2 rounded mt-4">
        <a href="link-to-articles" className="text-white">Read Articles</a>
      </button>
    </div>
    <div className="resource-item bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-xl font-bold mb-4">Community Forum</h3>
      <p className="text-lg">Join the conversation in our Christian community forum for fellowship and support.</p>
      <button className="bg-green-950 text-white p-2 rounded mt-4">
        <a href="link-to-forum" className="text-white">Join Now</a>
      </button>
    </div>
  </div>
</section>


   {/* Contact Section */}
<section id="contact" className="contact p-8 bg-white my-12 lg:px-16">
  <h2 className="text-3xl lg:text-4xl font-bold text-center text-green uppercase mb-6">
    Contact Us
  </h2>
  <div className="contact-form bg-green-950 text-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
    <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
    <p className="text-lg mb-6"> We  love to hear from you. Fill out the form below to get in touch with us.</p>
    <form action="#" method="POST">
      <div className="form-group mb-4">
        <label htmlFor="name" className="block text-lg">Your Name</label>
        <input type="text" id="name" className="w-full p-3 bg-white text-gray-900 rounded" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email" className="block text-lg">Your Email</label>
        <input type="email" id="email" className="w-full p-3 bg-white text-gray-900 rounded" />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="message" className="block text-lg">Your Message</label>
        <textarea id="message" className="w-full p-3 bg-white text-gray-900 rounded" rows="4"></textarea>
      </div>
      <button type="submit" className="bg-green-950 text-white py-3 px-6 rounded-lg mt-4">
        Submit
      </button>
    </form>
  </div>
</section>


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
