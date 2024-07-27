import { FaFacebookF, FaInstagram, FaTwitter , FaEnvelope } from 'react-icons/fa'
import Logo from '../assets/kelisLogo.jpg'

export const Footer = () => {
  return (
    <div className="bg-blueSlate py-16 px-4 flex items-center justify-center flex-col">
      <div className="links flex gap-16">
        <a href="https://x.com/ConciergeKelis?t=pNBQ41lAFQ0M6ICEgJ8pyA&s=09" className='text-white'>
        <FaTwitter />
        </a>
        <a href="https://www.facebook.com/KelisCon" className='text-white'>
        <FaFacebookF  className='text-white' />
        </a>
        <a href="https://www.instagram.com/keliscon?igsh=MTRza2ozemIydWJsbQ==" className='text-white'>
          <FaInstagram />
        </a>
        <a href="mailto:kelisconciergeservices@gmail.com" className='text-white'>
           <FaEnvelope />
        </a>
      </div>
      <img src={Logo} className='py-6 h-[90px]' alt="" />
    <p className='text-white text-[16px] text-center'>© 2021 Kelis Concierge - All rights reserved</p>
    </div>
  )
}
