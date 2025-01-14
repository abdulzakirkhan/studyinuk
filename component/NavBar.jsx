"use client";  // Ensures the component is rendered on the client side

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from "../styles/nav.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [activeLink, setActiveLink] = useState('/'); 

  const handleLinkClick = (path) => {
    setActiveLink(path); 
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${style.custNav} navbar-expand-lg border shadow-lg border-0`} style={{zIndex: "22"}}>
      <div className="container">
        <Link className={`navbar-brand ${style.logo}`} href="/" onClick={() => handleLinkClick('/')}>
          Logo
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen ? 'true' : 'false'}  aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className={`navbar-nav ${style.navbarNav} mb-2 mb-lg-0 justify-content-center w-100 ms-lg-5`}>
            <li className="nav-item px-1">
              <Link className={`nav-link ${style.cutNav} px-0 mx-2 ${activeLink === '/' ? 'active' : ''}`} aria-current="page" href="/" onClick={() => handleLinkClick('/')} >
                Home
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className={`nav-link ${style.cutNav} px-0 mx-2 ${activeLink === '/universities' ? 'active' : ''}`} href="/universities" onClick={() => handleLinkClick('/universities')} >
                Universities
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className={`nav-link ${style.cutNav} px-0 mx-2 ${activeLink === '/newsblogs' ? 'active' : ''}`} href="/newsblogs" onClick={() => handleLinkClick('/newsblogs')} >
                News/Blogs
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className={`nav-link ${style.cutNav} px-0 mx-2 ${activeLink === '/about-us' ? 'active' : ''}`} href="/about-us" onClick={() => handleLinkClick('/about-us')} >
                About Us
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className={`nav-link ${style.cutNav} px-0 mx-2 ${activeLink === '/faqs' ? 'active' : ''}`} href="/faqs" onClick={() => handleLinkClick('/faqs')} >
                FAQs
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link className={`nav-link ${style.cutNav} px-0 mx-2 ${activeLink === '/contact-us' ? 'active' : ''}`} href="/contact-us" onClick={() => handleLinkClick('/contact-us')} >
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex align-items-center gap-2" role="search">
            <Image src="/emriates flag.png" width={50} height={30} alt="flag" />
            <div className="position-relative">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Image src="/Vector.png" width={20} height={16} className={`position-absolute end-0 ${style.top25} me-4`} alt="search" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
