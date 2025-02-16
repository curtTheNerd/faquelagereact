import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './navbar.css';
import { RiLogoutCircleRFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    const showNav = () => {
        setActive('navBar activeNavBar');
    }
    const removeNav = () => {
        setActive('navBar');
    }
    const handleClick = () => {
        handleScrollToTop();
        removeNav();
    }

    return (
        <section className='navBarSection'>
            <header className='header flex'>

                <div className='logoDiv'>
                    <Link to="/" className='logo flex'>
                        <div className='icon'>
                            <RiLogoutCircleRFill />
                        </div>
                        <h1 className='title'>[fakla&#658;]</h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem"><Link to="/" className='navLink' onClick={handleClick}>Home</Link></li>
                        <li className="navItem"><Link to="/tour" className='navLink' onClick={handleClick}>Tour</Link></li>
                        <li className="navItem"><Link to="/about" className='navLink' onClick={handleClick}>About</Link></li>
                        <li className="navItem"><Link to="/media" className='navLink' onClick={handleClick}>Media</Link></li>
                    </ul>

                    <div onClick={removeNav} className="closeNavBar">
                        <IoCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavBar">
                    <TbGridDots className='icon' />
                </div>

            </header>
        </section>
    )
}

export default Navbar
