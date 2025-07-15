import React, { useEffect, useState } from "react";
import './Home.css';
import Video from '../../assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi"
import { SiTripadvisor } from "react-icons/si";
import { CiBoxList } from "react-icons/ci";
import { TbApps } from "react-icons/tb"; 

import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () =>{

    useEffect(()=>{
        Aos.init({duration: 3000})
    },[])


    const [maxPrice, setMaxPrice] = useState(15000);
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={Video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="slide-down" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="slide-up">Search Your Holidays</h1>
                </div>
                <div data-aos="fade-left" className="cardDiv grid">
                    <div className="destinantionInput">
                        <label htmlFor="city">Search Your Destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter Name Here..." />
                            <GrLocation className="icon"/>
                        </div>
                    </div>
                    <div className="date">
                        <label htmlFor="city">Enter your Date:</label>
                        <div className="input flex">
                            <input type="date"  />
                            
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">{maxPrice}</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="15000" min="3500" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value) } />
                        </div>
                    </div>
                    <div className="searchOption flex">
                         <HiFilter className="icon"/>
                         <span>MORE FILTERS</span>
                    </div>
                </div>
                <div className="homeFooterIcons">
                    <div className="rightIcons">
                    <FiFacebook className="icon"/>
                    <FiInstagram  className="icon"/>
                    <SiTripadvisor className="icon"/>
                    </div>
                    <div className="leftIcons">
                    <CiBoxList className="icon"/>
                    <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home