import React, { useState } from "react";
import { MdModeOfTravel } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import "./Navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("navBar");

    // Function to show Navbar
    const showNav = () => {
        setActive("navBar activeNavbar");
    };

    // Function to hide Navbar
    const hideNav = () => {
        setActive("navBar");
    };

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdModeOfTravel /> V Travel
                        </h1>
                    </a>
                </div>

                {/* Corrected className binding */}
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItems">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>

                    {/* Close button now hides navbar */}
                    <div className="closeNavbar" onClick={hideNav}>
                        <IoIosCloseCircle className="icon" />
                    </div>
                </div>

                {/* Navbar toggle button */}
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
