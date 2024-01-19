import React from 'react'
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import "../styles/Header.scss";
import { useState } from "react";

const Header = () => {
    
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);



    const handleMobileNavBtn = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    }


    return (
        <header className={`navbar ${isMobileNavOpen ? 'active' : ''}`}>
            <div className="nav-logo">
                <img src='https://gauravgorade.github.io/public/images/logowhite.png' alt="Funkar-logo" />
            </div>
            <div className="nav">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Brands
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div className="mobile-nav-btn" onClick={handleMobileNavBtn}>

                <AiOutlineClose
                    name="mobile-menu-close"
                    className="mobile-menu-btn"
                />

                <AiOutlineAlignRight
                    name="mobile-menu-open"
                    className="mobile-menu-btn"
                />
            </div>
        </header>
    );
  
}

export default Header