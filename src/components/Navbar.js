import React, { useState, useEffect } from 'react'; // Import useEffect
import images from '../Assets/images.png';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
      <header className='w-full fixed top-0 right-0 left-0'>
        <nav className={`py-4 md:px-12 bg-white ${sticky?"sticky top-0 left-0 right-0 bg-white":" "}`}>

        <div className='flex items-center justify-between'>

          <div >
          
            <img alt='' src={images} />
          </div>

          <div className="lg:flex items-center gap-3 hidden text-body">

    <Link to ='Home' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Home</Link>
    <Link to ='Skills' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Skills</Link>
    <Link to ='About' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>About</Link>
    <Link to ='Portfolio' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Portfolio</Link>
    <Link to ='Contact' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Contact</Link>
   
          </div>


          <div className='lg:block hidden'><Link to='Contact' spy={true} activeClass='active' smooth={true} offset={-100} className='outLineBtn cursor-pointer'> Contact me </Link>
          </div>
          
          <button className='lg:hidden text-body text-3xl'onClick={toggleMenu}>

            <HiMenu/>
          </button>
          {
            isMenuOpen && <div bg-body rounded-lg text-white>
 <a href='/Home' className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Home</a>
    <a href='/skills' className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Skills</a>
    <a href='/about' className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>About</a>
    <a href='/portfolio' className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Portfolio</a>
    <a href='/Contacts' className='block py-2 px-4 cursor-pointer text-primary hover:text-green-600 text-xl'>Contact</a>
   </div>


          }
          
                   </div>
        </nav>
      </header>
  
  );
}

export default Navbar;
