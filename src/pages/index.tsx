import React from 'react';
import Header from './Header';
import ProductCarousel from './ProductCarousel';
import ProductPage from './ProductPage';
import Footer from './Footer';
import CustomerReviews from '../components/CustomerReviews';
import Banner from "./Banner";
import SliderComponent from "./Slider";
import Trending from "./Trending";
import Navigation from './Navigation';
import "../styles/IndexPage.css";
import  IndependenceDayPopup from "./Independencedaypopup"
import Image from 'next/image';
import Categoriessection from "./Categoriessection";
import { useState, useEffect } from 'react';

const products = [
  { id: 1, name: '2 Pcs Rear Window Lift Supports Shock Struts', price: '$28.99', regularPrice: '$30.99', image: '/images/ProductsMainCategories/Main-img101.png', discount: -10, rating: 4.5 },
  { id: 2, name: '2 Pcs Front Hood Lift Supports Shock Struts', price: '$33.99', regularPrice: '$34.99', image: '/images/ProductsMainCategories/2 Pcs Front Hood Lift Supports Shock Struts.webp', discount: -15, rating: 3.8 },
  { id: 3, name: '2 Pcs Front Bonnet Lift Supports Shock Struts', price: '$36.99', regularPrice: '$38.99', image: '/images/ProductsMainCategories/2 Pcs Front Bonnet Lift Supports Shock Struts.webp', discount: -20, rating: 3.8 },
  { id: 4, name: '2 Pcs Rear Tailgate Lift Supports Shock Struts', price: '$23.99', regularPrice: '$25.99', image: '/images/ProductsMainCategories/2 Pcs Rear Tailgate Lift Supports Shock Struts.webp', discount: -25, rating: 2.8 },
  { id: 6, name: '2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs', price: '$26.99', regularPrice: '$28.99', image: '/images/ProductsMainCategories/2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs.webp', discount: -5, rating: 3.8 },
  { id: 7, name: '2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs', price: '$26.99', regularPrice: '$28.99', image: '/images/ProductsMainCategories/2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs.webp', discount: -10, rating: 4.8 },
  { id: 8, name: '2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs', price: '$26.99', regularPrice: '$28.99', image: '/images/ProductsMainCategories/2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs.webp', discount: -15, rating: 3.8 },
  { id: 9, name: '2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs', price: '$26.99', regularPrice: '$28.99', image: '/images/ProductsMainCategories/2 Pcs Universal Lift Supports Gas Struts with Spike Extended Length 13.98in. 24lbs.webp', discount: -20, rating: 3.8}
];


export default function Home() {


  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Function to show the popup
    const showPopupHandler = () => setShowPopup(true);

    // Function to hide the popup
    const hidePopupHandler = () => setShowPopup(false);

    // Show popup every 3 minutes (180000 ms)
    const intervalId = setInterval(() => {
      showPopupHandler();
      // Hide popup after 10 seconds
      setTimeout(hidePopupHandler, 1000000);
    }, 22000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <main>
      <Header />
      <section className='Main-section-Navigations'>
      <Navigation />

       <section className="Main-Class-Independce">
      <IndependenceDayPopup show={showPopup} onClose={handleClosePopup} />
    </section>

           </section>


        <Banner/>

   <SliderComponent />

<Trending />



{/* /////////////------Search By Category------///////// */}
< Categoriessection />



{/* //////////--End-Search By Category----/////// */}


  <ProductPage/>
{/********************************* Customer Review Section ************************************/}
<CustomerReviews/>


{/* --------------------------------------------------------------------------------------  */}
  <section className="guide-section">
  <div className="guide-wrapper">
    <div className="guide-main-col">
      <div className="guide-column">
        <div className="guide-item">
          <div className="guide-content">
            <div className="guide-title">Help Guide</div>
            <div className="guide-info">
              <div className="guide-desc">
                Get help with any questions or concerns by speaking with an expert.
              </div>
              <a href="#">
                <div className="guide-button">
                  <button className="btn-guide">GET HELP</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-column">
        <div className="guide-item align-center">
          <div className="guide-title">
            <span role="img" aria-label="mail" className="guide-icon">
              <img src="/Home Images/Envelop.svg" alt="mail icon" className="guide-icon-img" />
            </span>
          </div>
          <div className="guide-info">
            <div className="guide-desc align-center">
              <span>Support Hours Mon-Sun: 24/7</span>
            </div>
            <a href="#">
              <div className="chat-button">
                <button className="btn-chat">CHAT WITH US</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/************************* What's New at a premium section ********************************/}
<div className="marginContainer maxWidthContainer">
  <section className="HomeBlogsBox_container">
    <div className="HomeBlogsBox_head_title">
      <div className="HomeBlogsBox_title">What's New At Spareshive</div>
    </div>
    <div className="HomeBlogsBox_blogsContainer">
      <div className="HomeBlogsBox_blogsItem HomeBlogsBox_first">
        <div className="HomeBlogsBox_cover">
          <div className="HomeBlogsBox_tag">Portable Car Fridge</div>
          <img src="/Home Images/Portable Car Fridge.png" alt="image" className="HomeBlogsBox_blogImage" />
        </div>
        <div className="HomeBlogsBox_articleMain">
          <a href="#" className="HomeBlogsBox_articleTitle">How to Tell if Your Brake Hose or Caliper is Bad?</a>
          <div className="HomeBlogsBox_articleContent">
            The braking system's safety is contingent on the regular inspection of components like brake hoses and calipers to avoid issues such as leaks, spongy pedals, or reduced braking power, ensuring safe driving.
          </div>
        </div>
        <div className="HomeBlogsBox_bottom">
          <div>July 18th, 2024</div>
          <a href="#" className="HomeBlogsBox_iconLink">
         <img src="/Home Images/arrow icon.svg" alt="icon" className="HomeBlogsBox_icon" />
          </a>
        </div>
      </div>
      <div className="HomeBlogsBox_blogsItem">
        <div className="HomeBlogsBox_cover">
          <div className="HomeBlogsBox_tag">OBD Codes</div>
          <img src="/Home Images/OBD Codes.png" alt="image" className="HomeBlogsBox_blogImage" />
        </div>
        <div className="HomeBlogsBox_articleMain">
          <a href="#" className="HomeBlogsBox_articleTitle">Safety Considerations for Our Exterior Door Handles</a>
          <div className="SafetyConsiderations_Content">
            The car door handle is a highly used component. A good door handle can not only protect your personal safety, but also reduce unnecessary property damage.
          </div>
        </div>
        <div className="HomeBlogsBox_bottom">
          <div>July 17th, 2024</div>
          <a href="#" className="HomeBlogsBox_iconLink">
            <img src="/Home Images/arrow icon.svg" alt="icon" className="HomeBlogsBox_icon" />
          </a>
        </div>
      </div>
      <div className="HomeBlogsBox_blogsItem">
        <div className="HomeBlogsBox_cover">
          <div className="HomeBlogsBox_tag">Oil Cooler</div>
          <img src="/Home Images/Oil Cooler.png" alt="image" className="HomeBlogsBox_blogImage" />
        </div>
        <div className="HomeBlogsBox_articleMain">
          <a href="#" className="HomeBlogsBox_articleTitle">How To Replace Your Outside Door Handle</a>
          <div className="HomeBlogsBox_articleContent">
            Replace your vehicle's exterior door handles with confidence using high-quality replacement parts and expert installation, maintaining smooth and safe operation of your vehicle.
          </div>
        </div>
        <div className="HomeBlogsBox_bottom">
          <div>July 17th, 2024</div>
          <a href="#" className="HomeBlogsBox_iconLink">
            <img src="/Home Images/arrow icon.svg" alt="icon" className="HomeBlogsBox_icon" />
          </a>
        </div>
      </div>
      <div className="HomeBlogsBox_blogsItem HomeBlogsBox_last">
        <div className="HomeBlogsBox_cover">
          <div className="HomeBlogsBox_tag">OBD Codes</div>
          <img src="/Home Images/OBD Codes (1).png" alt="image" className="HomeBlogsBox_blogImage" />
        </div>
        <div className="HomeBlogsBox_articleMain">
          <a href="" className="HomeBlogsBox_articleTitle">Please Pay More Attention To The Exterior Door Of Your Vehicle</a>
          <div className="HomeBlogsBox_articleContent">
            Understanding more about how outside door handles work can help you make use, maintenance, and replacement smoother and more convenient.
          </div>
        </div>
        <div className="HomeBlogsBox_bottom">
          <div>July 16th, 2024</div>
          <a href="#" className="HomeBlogsBox_iconLink">
            <img src="/Home Images/arrow icon.svg" alt="icon" className="HomeBlogsBox_icon" />
          </a>
        </div>
      </div>
    </div>
    <a href="/BlogPage">

    <div className="HomeBlogsBox_buttonContainer">
      <button className="HomeBlogsBox_button">
        
        View More</button>

      
    </div>
    </a>

  </section>
</div>
      <br/>
      <br/>
      <Footer/>
    </main>
  );
}