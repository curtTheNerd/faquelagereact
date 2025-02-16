import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import { SiOnlyfans } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className='footer'>

      <div className='iconDiv flex'>
        <a href="https://www.instagram.com/faquelage/?locale=en_US" className='iconLinks' target='_blank'>
          <BiLogoInstagramAlt className='icon instagram' />
        </a>
        <a href="https://www.facebook.com/faquelage/" className='iconLinks' target='_blank'>
          <FaFacebook className='icon facebook' />
        </a>
        <a href="https://www.youtube.com/channel/UCQgfM9ENDqaf25Lm-AbaapA" className='iconLinks' target='_blank'>
          <FaYoutube className='icon youtube' />
        </a>
        <a href="https://open.spotify.com/intl-de/album/1fmgk5J9jZjMylWKgvdnRI" className='iconLinks' target='_blank'>
          <FaSpotify className='icon spotify' />
        </a>
        <Link to="/datenschutz" className="iconLinks" onClick={handleScrollToTop}>
          <IoMdMail className='icon email' />
        </Link>
      </div>

      <div className="copyright">
        <FaRegCopyright className='copyrightIcon'/>
        <h4 className="copyrightText">Copyright Faquelage 2024</h4>
        <h4 className="copyrightTextBreaker">||</h4> 
        <Link to="/datenschutz" className="copyrightText dsLink" onClick={handleScrollToTop}>Impressum & Datenschutz</Link>
      </div>
    </section>
  )
}

export default Footer
