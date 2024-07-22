import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Logo from '../assets/kelisLogo.jpg'

export const Footer = () => {
  return (
    <div className="bg-slate-950 py-10 px-4 flex items-center justify-center flex-col">
      <div className="links flex gap-16">
        <a href="#" className='text-white'>
        <FaTwitter />
        </a>
        <a href="#" className='text-white'>
        <FaFacebookF  className='text-white' />
        </a>
        <a href="#" className='text-white'>
          <FaInstagram />
        </a>
      </div>
      <img src={Logo} className='py-6 h-[100px]' alt="" />
    <p className='text-white'>© 2021 Kelis Concierge - All rights reserved</p>
    </div>
  )
}
