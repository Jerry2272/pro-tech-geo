import { FaBars } from 'react-icons/fa6'
import  Logo from '../assets/kelisLogo.jpg'
import {useState} from 'react'

export const Navbar = () => {
  const [nav , setNav] =useState(false);

  const displayNav = () =>{
      setNav(!nav)
  }

  return (
    <header className='header'>
    <div className="bg-slate-950 text-center flex lg:justify-center items-center justify-between py-4 px-6 ">
   <a href="/">
   <img src={Logo} className='h-[auto] lg:w-[auto] w-[50%]'  alt="logo" />
   </a>
    <button onClick={displayNav}   className='block lg:hidden text-white text-2xl bg-transparent' >
    <FaBars/>
    </button>
    </div>
    <nav className="lg:flex gap-[40px] justify-center flex-col lg:flex-row bg-slate-800 py-3 text-white hidden" >
        <a href="/" className="text-white nav_link">Home</a>
        <a href="#about" className="text-white nav_link">About Us</a>
        <a href="#how" className="text-white nav_link">How It Works</a>
        <a href="#service" className="text-white nav_link">Services</a>
        <a href="#price" className="text-white nav_link">Pricing</a>
        <a href="contact" className="text-white nav_link">Contact</a>
        <a href="policy" className="text-white nav_link" >Policy</a>
      </nav>
    {
      nav && (
        <nav className="flex gap-[20px] flex-col lg:flex-row bg-slate-950 text-white navMenu" >
        <a href="/" className="text-white nav_link">Home</a>
        <a href="#about" className="text-white nav_link">About Us</a>
        <a href="#how" className="text-white nav_link">How It Works</a>
        <a href="#service" className="text-white nav_link">Services</a>
        <a href="#price" className="text-white nav_link">Pricing</a>
        <a href="contact" className="text-white nav_link">Contact</a>
        <a href="policy" className="text-white nav_link" >Policy</a>
      </nav>
      )
    }

    </header>
  )
}
