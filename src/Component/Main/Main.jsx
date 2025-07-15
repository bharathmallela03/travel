import React, {useEffect} from "react";
import './Main.css';
//Icons Imports
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegClipboard } from "react-icons/fa";
//Images Imports
import img from '../../assets/img.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img9.jpeg';
import img10 from '../../assets/img10.jpeg';

import Aos from "aos";
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Gandikota',
        location: 'India',
        Price: '3500',
        description: 'It is the “Grand Canyon of India.” Gandikota is a spectacular and breathtaking work of art chiselled by Prakrti in all her rawness. Its brilliant history dating back almost to a millennium begins with its founding in 1123 CE by a Kakatiya feudatory of Ahavamalla Someshwara I, the monarch of the Kalyana Chalukyas.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Belum Caves',
        location: 'India',
        Price: '1500',
        description: "The Belum Caves, located in Nandyala district of Andhra Pradesh's Rayalaseema region, is the second largest cave system on the Indian subcontinent, known for its speleothems, such as stalactite and stalagmite formations. The Belum Caves have long passages, galleries, spacious caverns with fresh water and siphons."
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Yaganti',
        location: 'India',
        Price: '1500',
        description: " Sri Yaganti Uma Maheswara Temple is a temple of Shiva in Nandyal district in the India state of Andhra Pradesh. It was built according to Vaishnavaite traditions.This temple was constructed by King Harihara Bukka Raya of the Sangama Dynasty of the Vijayanagara Empire in the 15th century.It was built according to Vaishnavaite traditions. "
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Tirumala',
        location: 'India',
        Price: '4000',
        description: "Tirumala or Tirumalai is a spiritual place in Tirupati district of the Indian state of Andhra Pradesh. It is one of the neighbourhoods of the Tirupati city. The town is a part of Tirupati Urban Development Authority and located in Tirupati (urban) mandal of Tirupati revenue division. The town is strictly vegetarian."
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Yadadri',
        location: 'India',
        Price: '4000',
        description: 'The Sri Lakshmi Narasimha Swamy Temple or simply known as Yadadri or Yadagirigutta temple, or Pancha Narasimha Kshetram or Rishi Aradhana Kshetram is a Hindu temple situated on a hillock in the small town of Yadagirigutta in the Yadadri Bhuvanagiri district of the Indian state of Telangana.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Gokarna+Dandeli',
        location: 'India',
        Price: '8000',
        description: 'Gokarna is a town on the Arabian Sea, in the southwestern Indian state of Karnataka. A popular pilgrimage destination for Hindus, it’s known for sacred sites like Mahabaleshwar Temple, which has a shrine dedicated to the deity Shiva. Nearby, Koti Teertha is a temple tank where devotees wash in the holy waters.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Goa',
        location: 'India',
        Price: '13000',
        description: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Alleppey',
        location: 'India',
        Price: '10000',
        description: "Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse      "
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Rameshwaram',
        location: 'India',
        Price: '6000',
        description: "Rameswaram is a town on Pamban Island, in the southeast Indian state of Tamil Nadu. It’s known for Ramanathaswamy Temple, a Hindu pilgrimage site with ornate corridors, huge sculpted pillars and sacred water tanks. Devotees bathe in the waters of Agni Theertham, off the beach east of the temple."
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: 'OOTY',
        location: 'India',
        Price: '8000',
        description:"Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state. Founded as a British Raj summer resort, it retains a working steam railway line. Other reminders of its colonial past include Stone House, a 19th-century residence, and the circa-1829 St. Stephen’s Church."
    }


];

const Main = () => {

        useEffect(()=>{
            Aos.init({duration: 2000})
        },[])
    
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most Visited Places</h3>
            </div>

            <div data-aos="fade-up" className="secContent grid">
                {Data.map(({ id, imgSrc, destTitle, location, Price, description }) => (
                    <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>

                            <span className="continent flex">
                                <HiOutlineLocationMarker className="icon" />
                                <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                                    <h5> Price: ₹{Price}</h5>
                                <div className="price">
                                </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                DETAILS... <FaRegClipboard className="icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Main;
