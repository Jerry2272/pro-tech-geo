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
import Ab from '../src/assets/ab.jpg';
import Mission from '../src/assets/mission.jpg'
import Logo from  '../src/assets/kelis.jpg'
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';
import { ClipLoader } from 'react-spinners'; // Import spinner from react-spinners



function App() {
 useEffect(() =>{
  AOS.init({
    duration: 1000, // Duration of animations
  })
 }, []);

  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(!loading), 1000); // Simulating loading for 2 seconds
  }, []);
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
  if (loading) {
    return (
      <div className="spinner-container">
        <ClipLoader size={150} color={"#123abc"} loading={loading}>
        <img src={Logo} className='logo' alt="" />
          </ClipLoader >
        <h2>Loading.........</h2>
      </div>
    );
  }

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
                backgroundImage: `linear-gradient( rgba(2, 6, 23, 0.30) ,  rgba(2, 6, 23,1) ), url(${slide.img})`,
              }}
            >
              <div className="lg:mt-6 mt-[8em] pr-4">
                <div className="lg:w-[65%]">
                  <h2 className="text-[22px] text-white lg:text-5xl font-[400] lg:font-[500] uppercase" data-aos="fade-up">
                    {slide.title}
                  </h2>
                  <h3
                    className="text-2xl lg:text-5xl font-[400] lg:font-[500] uppercase leading-10 lg:leading-[70px] text-white"
                    data-aos="fade-up"
                  >
                    {slide.description}
                  </h3>
                  <button className="text-black my-10 bg-white" data-aos="zoom-in">
                    Send Request
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
 
    {/* hero section ending */}


    {/* about section  */}
    <section className="about lg:grid grid-cols-2 gap-16 lg:my-[5em] my-[3em] px-4" id='about'>
      <div className="imgContainer lg:w-[110%]" data-aos="zoom-in" data-aos-delay="300">
        <img src={Ab} className='w-full' alt="" />
      </div>
      <div className="textArea flex items-center justify-self-start pl-4">
        <div className='lg:px-5 pr-4'>
          <h2 className='text-2xl lg:text-4xl font-[400] lg:font-[500] text-left lg:pl-6 py-4 text-slate-950 uppercase' data-aos="fade-up">About Kelis Concierge</h2>
          <p className='text-left lg:py-6 lg:px-6 py-4' data-aos="zoom-in">
            Kelis Concierge is a Lifestyle Management and Concierge service, we exist to serve both individual and business clients alike. Our purpose is to give our clients the most precious commodity of all…. TIME. Thats why we help you focus on the things that are important to you while you let us finish that time-consuming to-do list.
          </p>
          <button className='lg:w-[30%] lg:ml-6 bg-slate-950 text-white'><a href="#mission" className='text-white'>Learn More</a></button>
        </div>
      </div>
    </section>
    {/* about section ending */}

    {/* mission section  */}
    <section className="mission lg:grid grid-cols-2 gap-16 my-[5em] bg-slate-950 py-10" id='mission'>
      <div className='textArea flex justify-center lg:px-3 p-4 leading-7 flex-col lg:pl-[3em]'>
        <h2 className='lg:text-4xl text-3xl lg:font[600] font-[300] text-left lg:px-6 text-white uppercase '>Our Mission</h2>
        <p className='text-left py-6 lg:px-6 px-1 text-gray-300 lg:text-[20px]' data-aos="fade-up" data-aos-delay="400">
          Our Mission is to provide a personalized solution to help you balance your work life and your personal life in which you will be allowed freedom and time to spend with your family, focus on growing your business, or relaxing and simply doing whatever it is you enjoy doing. We can confidently tell you this, we respond to every need from the simplest of errands to satisfying complex and time-consuming requests.
        </p>
        <button className='w-[40%] lg:ml-6 bg-white'><a href="#service" className='text-slate-950 font-[600]' data-aos="zoom-out">Learn More</a></button>
      </div>
      <div className="imgContainer w-[90%] order-[first]">
        <img src={Mission} className='w-full hidden lg:block' alt="" />
      </div>
    </section>
    {/* mission section ending */}

    {/* how it works  */}
    <section className="mission flex justify-between my-[1em] mx-auto lg:px-16 w-full gap-10 flex-col lg:flex-row" id='how'>
      <div className="imgContain px-4 mt-12">
        <h3 className='text-left py-1 uppercase text-slate-950 font-[600]' data-aos="fade-in" data-aos-delay="200">
          Requests are made in a minimum of 12 hours advance notice. Although last minute emergency requests are accommodated (that will depend on the task).
        </h3>
        <h3 className='text-left py-2 uppercase text-slate-950 font-[600]' >
          General Hours are from Mondays - Fridays 8am - 5pm; Saturdays 9am - 4pm. Premium hours are after work hours (general hours), weekends, and holidays.
        </h3>
        <h3 className='text-left uppercase text-slate-950 font-[600]' data-aos="fade-up" data-aos-delay="300">
          Our charges are based on hourly services or dependent on the task(s) to be executed. Requests are sent through our form link Request Form or either via Email, Phone call, SMS message, or WhatsApp.
        </h3>
      </div>
      <div className="textArea p-4">
        <h2 className='text-4xl font-bold text-left'>How it works</h2>
        <ul className='text-start flex flex-col gap-3 py-3'>
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
        </ul>
        <code className='text-start '>
          <b>NOTE:</b>
          <span className='text-start '>Cancellation of a request must be made at least a minimum of 6-12 hours in advance of scheduled appointment, unless a penalty fee will be attached (A penalty of a 1-hour service charge).</span>
        </code>
      </div>
    </section>
    {/* how it works ending */}

    {/* services section  */}
    <section className="service my-[5em] bg-slate-950 py-10 lg:px-14 px-4" id='service'>
      <h2 className='lg:text-4xl text-3xl lg:font-[600] font-[300] lg:px-6 text-white uppercase text-center'>Our Services</h2>

      <Carousel {...settings}>
        {
          services.map((content, i) => (
            <div key={i} className="gridContent border bg-white rounded my-12 relative" style={{
              boxShadow: '2px 2px 2px red'
            }}>
              <div className="cardImg">
                <img src={content.img} alt="" data-aos="zoom-in" data-aos-delay="100" />
              </div>
              <div className='p-4'>
                <h5 className='py-5 text-slate-950 text-2xl font-[500]'>{content.title}</h5>
                <p className='text-[18px] text-slate-700' data-aos="fade-out"> 
                  {content.shortContent}
                </p>
                <button
                  className='bg-slate-950 text-white  my-4'
                  onClick={() => openModal(content.content)}
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
    <section className='p-10 price' id='price'>
      <h2 className='lg:text-4xl text-3xl lg:font-[600] font-[300] lg:px-6 text-slate-950 uppercase text-center'>Explore Our Different Prices</h2>
      <div className="lg:grid grid-cols-5">
        {
          prices.map((content, i) => (
            <div key={i} className="gridContent border m-2 bg-white rounded my-12" style={{
              boxShadow: '2px 2px 2px white'
            }}>
              <div className="cardImg">
                <img src={content.img} alt="" data-aos="fade-up" data-aos-delay="100" / >
              </div>
              <h5 className='text-[18px] py-2 font-[500]'>{content.title}</h5>
              <p className='p-2'>#{content.price}/hr</p>
            </div>
          ))
        }
      </div>
      <p className='lg:p-10 pt-2'>
        <span className="font-bold">NOTE:</span>
        <span>After the first hour time will be billed by the 15-minutes increment. The hourly rate begins from the time the task commences until the requested task is completed.

</span>
        <span>
        Cancellation request should be within 6-12 hours advance notice or else it will incur the Cancellation/Penalty fee. Free phone Consultation to assess your needs and to get a free quote is allowed. All service fees are to be paid in advance. Rates and fees do not include the cost of purchases made on behalf of the client. Our services vary with the amount of time required. Needless to say, the task service charge will be discussed based on the specifics of the tasks before providing you with a quotation. We accept the following payment methods: POS, Mobile App Transfer, Bank Check, Mobile USSD Transfer, Cash & Online Payment. On Emergency requests, we can only accept it if our Schedule permits it.
        </span>
      </p>
    </section>
    {/* pricing ending */}

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
