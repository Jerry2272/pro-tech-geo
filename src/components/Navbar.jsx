import { FaBars } from 'react-icons/fa6';
import Logo from '../assets/pgl-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const displayNav = () => {
    setNav(!nav);
  };

  return (
    <header className='md:flex justify-between items-center lg:h-[96px] h-[80px] bg-white px-[20px] py-[20px] md:px-[100px] md:py-[52px] shadow-lg transition-all ease-in-out'>
      <span className='flex items-center'>
        <Link to='/'>
          <img src={Logo} className='w-[120px] md:w-[150px]' alt='logo' />
        </Link>
        <FaBars
          onClick={displayNav}
          className='block md:hidden text-2xl text-activeColor cursor-pointer ml-auto'
        />
      </span>

      {/* Navbar for Desktop */}
      <nav className='hidden md:flex items-center gap-[30px]'>
        <Link to='/' className='text-activeColor text-[16px] font-[600] font-manRope hover:text-navColor transition-all'>
          Home
        </Link>
        <Link to='/about' className='text-navColor text-[16px] font-[400] font-manRope hover:text-activeColor transition-all'>
          About Us
        </Link>
        <Link to='/geo' className='text-navColor text-[16px] font-[400] font-manRope hover:text-activeColor transition-all'>
          Our Services
        </Link>
        <Link
          to='/contact'
          className='bg-activeColor text-white text-[16px] font-[400] font-manRope px-[12px] py-[10px] rounded-[8px] hover:bg-navColor transition-all'
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Navbar */}
      {nav && (
        <nav className='md:hidden flex flex-col gap-[20px] bg-white text-activeColor p-[20px] absolute top-[80px] left-0 w-full z-[999] h-[60vh] items-center justify-center transition-all ease-in-out duration-500'>
          <Link to='/' className='text-activeColor text-[16px] font-[600] font-manRope hover:text-navColor transition-all'>
            Home
          </Link>
          <Link to='/about' className='text-navColor text-[16px] font-[400] font-manRope hover:text-activeColor transition-all'>
            About Us
          </Link>
          <Link to='/geo' className='text-navColor text-[16px] font-[400] font-manRope hover:text-activeColor transition-all'>
            Our Services
          </Link>
          <Link
            to='/contact'
            className='bg-activeColor text-white text-[16px] font-[400] font-manRope px-[12px] py-[10px] rounded-[8px] hover:bg-navColor transition-all'
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};
