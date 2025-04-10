import Img1 from '../assets/procre.png'
import geoImg2 from '../assets/geo2.png'
import procurementBg from '../assets/ProcurementBg.png'
import { useEffect } from 'react';
import { Navbar } from "../components/Navbar"
import { Footer } from '../components/Footer';
import { Service } from '../components/Service';
import { Services , Procurement } from '../components/util';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'
import Client from '../molecules/Client';


export const ProcureMent = () => {
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
                    backgroundImage:  `url(${procurementBg})`,
                    backgroundRepeat: 'none',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
        >
            {/* <h2 className="md:text-[70px] font-[700] text-white font-manRope z-[999] relative"> ProcureMent</h2> */}

        </section>

                    {/* about section  */}
                    <section className="flex  items-center  flex-col md:h-auto overflow-hidden pt-[60px] pb-[100px]">
  <div className="md:grid grid-cols-2 justify-center items-center md:h-auto overflow-hidden px-[10px] md:px-[80px] pt-[60px] mx-auto pb-5">
    <div className="md:ml-[50px]">
      <div className="">
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-in">
      At Protech Geosolution Limited (PGSL), we understand that access to the right tools is crucial for project success. That’s why we offer reliable procurement and leasing services for a wide range of geographic, hydrographic, and geotechnical equipment to support your operations.
        </p>
        <p className="text-[18px] font-[400] text-textColor font-manRope leading-[28px] mb-[50px]" data-aos="zoom-out">
        Whether you’re executing a short-term survey project or need specialized tools for a long-term assignment, PGSL provides well-maintained, industry-grade instruments sourced from trusted global manufacturers. Our procurement services ensure you get authentic, high-performance equipment, while our flexible leasing options help you reduce costs and project delays.
        </p>

        <h2 className='text-[38px] font-[700] text-activeColor mb-[20px] font-spaceGrotesk '>Our offerings include:</h2>
    <ul style={{listStyle: 'outside'}} data-aos="zoom-in" data-aos-delay="300">
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Sales and leasing of GPS/GNSS receivers, total stations, echo sounders, drones, etc.</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Procurement of hydrographic, geophysical, and geotechnical equipment</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Equipment setup, calibration, and technical support</li>
        <li className="text-[18px] text-textColor font-[400] font-manRope leading-[32px]">Short-term and long-term leasing options</li>
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
      Procurement.map((item, i) => (
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

export default ProcureMent