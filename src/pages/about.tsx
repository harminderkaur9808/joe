import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Footer from './Footer';
import Header from "./Header";
import "../styles/about.css"

const AboutPage = () => {
  return (
    <>
   <Header/>
    <section className="aboutSection">
      <div className="about_topBox">
        <div className="expectMoreContainer">
          <div className="overlayText">
            <h1 className="heading">
              <span className="whiteText">Expect<br /></span>
              <span className="redText">More</span>
            </h1>
            <p className="paragraph">
              <span className="whiteText">We're built to provide you with<br /></span>
              <span className="whiteText">premium parts and a premium service.<br /></span>
              <span className="redText">That's A-Premium.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="OurPromise_section ">
        <div className="OurPromise_container">
          <div className="OurPromise_content">
            <div className="OurPromise_ourLabel">Our Promise</div>
            <div className="OurPromise_ourTitle">
              To build a framework that makes auto repairs predictable.
            </div>
            <div className="OurPromise_oneValue">
              <div className="OurPromise_ourValue">
                That's the purpose of A-Premium's life. We started out as a supplier, devoted to manufacturing the highest quality car parts and fulfilling the aftermarket requirements around the world. Today, we're proud to offer one of the most comprehensive ranges of auto parts and services directly to consumers. Our ride from then till now wasn't always smooth, but our mission stayed firmly in its place.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="OurPurpose_section">
        <div className="OurPurpose_container">
          <div className="OurPurpose_left">
            <div className="OurPurpose_ourLabel">Our Purpose</div>
            <div className="OurPurpose_ourTitle">To make aftermarket auto parts an afterthought.</div>
            <div className="OurPurpose_ourValue">
              We have always been passionate about our cars and what goes into them. Our team are a combination of car enthusiasts and project DIYers. That's why we work so hard towards making this dream a reality, it's all we know, and everything we care about. By operating online and skipping the middleman, we can bring you the same high-quality parts supplied to the biggest brands in your country, direct to your door at a fraction of the cost. We are also building your own local A-Premium warehouses across the globe to bring you same-day convenience in both purchases and returns.
            </div>
          </div>
          <div className="OurPurpose_right">
            <img src="/About us/Our Purpose.png" alt="Description of Image" className="OurPurpose_image" />
          </div>
        </div>
      </div>

      <div className="OurRoadToYou_section">
        <div className="OurRoadToYou_container">
          <div className="OurRoadToYou_ourLabel">Our Road to You</div>
          <div className="OurRoadToYou_ourTitle">Just like your vehicle, we're in motion.</div>
          <div className="OurRoadToYou_twoValue">
            <div className="OurRoadToYou_ourValue">
              We believe the auto parts and auto repairs industry should be simple and accessible to everyone, no matter if you choose to repair yourself or work with a professional, we want to make a better car repair experience for everyone.
              <br /><br />
              To make repairs and servicing your car predictable, we need to build a predictable and accessible framework that not only offers the most comprehensive range of parts for every car but enables them to repair any problem at the lowest price and highest quality.
            </div>
          </div>
        </div>
      </div>

      <section className="Our-road_section">
        <div className="Our-road_backgroundImageContainer">
          <div className="Our-road_overlayText">
            <p className="Our-road_Text">
              Building convenience in a premium package is the key to our strategy. By leveraging the cost benefits being online allows us to offer you, while bringing back the convenience of a physical presence, we’re breaking down barriers and welcoming a new age in the auto markets.
            </p>
          </div>
        </div>
      </section>

      <section className="SparashV_Container">
        <div className="SparashV_Container_loading">
          <div className="SparashV_Container-container">
            <div className="SparashV_Container_pageContent">
              <div className="SparashV_Container_Image">
                <Image
                  src="/About us/sparesh img.png"
                  alt="Description of Image"
                  width={700}
                  height={300}
                />
                <div className="SparashV_Container_text">
                  <p>We're built to provide you with premium parts and a premium service. That's A-Premium.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <Footer/>
    </>
  );
};

export default AboutPage;
