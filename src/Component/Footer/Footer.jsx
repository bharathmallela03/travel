import React from "react";
import './Footer.css';
import video2 from '../../assets/video(2).mp4';
import { FiSend } from "react-icons/fi";
import { MdModeOfTravel } from "react-icons/md";
import { FaInstagram, FaYoutube, FaTripadvisor, FaChevronRight } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="videoBackground">
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
                <div className="overlay"></div>
            </div>
            
            <div className="content container">
                <div className="contactSection flex">
                    <div className="text">
                        <small>STAY CONNECTED</small>
                        <h2>Explore With Us</h2>
                    </div>

                    <div className="subscribe flex">
                        <input type="text"  />
                        <input type="email" placeholder="Enter Your Email" />
                        <button className="btn flex">
                            Subscribe <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerContent">
                    <div className="footerIntro flex">
                        <a href="#" className="logo flex">
                            <MdModeOfTravel className="icon" /> V Travel
                        </a>
                        <p>Discover breathtaking destinations with the best travel deals and experiences.</p>
                        <div className="socialIcons flex">
                            <RiTwitterXFill className="icon" />
                            <FaInstagram className="icon" />
                            <FaYoutube className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">OUR SERVICES</span>
                            <ul>
                                <li><FaChevronRight className="icon" /> Travel Packages</li>
                                <li><FaChevronRight className="icon" /> Insurance</li>
                                <li><FaChevronRight className="icon" /> Guided Tours</li>
                                <li><FaChevronRight className="icon" /> Payment Options</li>
                            </ul>
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <ul>
                                <li><FaChevronRight className="icon" /> Booking.com</li>
                                <li><FaChevronRight className="icon" /> Hostel World</li>
                                <li><FaChevronRight className="icon" /> Trivago</li>
                                <li><FaChevronRight className="icon" /> TripAdvisor</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <small>Best Travel Experiences</small>
                    <small>&copy; 2025 V Travel. All Rights Reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
