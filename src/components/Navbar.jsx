import { FaBars } from 'react-icons/fa6'
import  Logo from '../assets/pgl-logo.png'
import {useState} from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav , setNav] =useState(false);

  const displayNav = () =>{
      setNav(!nav)
  }
  return (
    <header className='md:flex justify-between items-center h-[96px] bg-white px-[100px] py-[52px]   hidden'>
    <span className=" ">
   <a href="/">
   <img src={Logo} className=''  alt="logo" />
   </a>
    <FaBars  onClick={displayNav}   className='block md:hidden text-white text-2xl bg-transparent' />
    </span>
    <nav className=" flex items-center gap-[30px]" >
        <a href="/" className="text-activeColor text-[16px] font-[600] font-manRope">Home</a>
        <a href="#about" className="text-navColor text-[16px] font-[400] font-manRope">About Us</a>
        <a href="#service" className="text-navColor text-[16px] font-[400] font-manRope">Our Services</a>
        <Link to="/contact" className="bg-activeColor text-white text-[16px] font-[400] font-manRope" 
        style={{
          padding: '10px 12px 10px 12px',
          borderRadius: '8px',
          border: '0',
        }}
        >
        Contact Us 
        </Link>
       
      </nav>
    {
      nav && (
        <nav className="flex gap-[20px] flex-col lg:flex-row bg-slate-950 text-white navMenu" >
        <a href="/" className="text-white nav_link">Home</a>
        <a href="#about" className="text-white nav_link">About Us</a>
        <a href="#how" className="text-white nav_link">How It Works</a>
        <a href="#service" className="text-white nav_link">Services</a>
        <a href="#price" className="text-white nav_link">Pricing</a>
        <Link to="/contact" className="text-white nav_link">Contact</Link>
        <Link to="/blog" className="text-white nav_link">Blog</Link>
      </nav>
      )
    }

    </header>
  )
}
