// pages/ProductPage.tsx
import React, { useState } from 'react';
import ProductCarousel from '../components/ProductCarousel2';
import CategoryCarousel from '../components/CategoryCarousel';
import styles from '../styles/ProductPage.module.css';
import productStyles from '../styles/components/ProductCarousel.module.css';
import '../styles/style-r.css';
import Image from 'next/image';


const makes = [
  { name: "chevrolet", link: "/makes/chevrolet" },
  { name: "ford", link: "/makes/ford" },
  { name: "gmc", link: "/makes/gmc" },
  { name: "dodge", link: "/makes/dodge" },
  { name: "toyota", link: "/makes/toyota" },
  { name: "cadillac", link: "/makes/cadillac" },
  { name: "nissan", link: "/makes/nissan" },
  { name: "buick", link: "/makes/buick" },
  { name: "honda", link: "/makes/honda" },
  { name: "chrysler", link: "/makes/chrysler" },
  { name: "lincoln", link: "/makes/lincoln" },
  { name: "jeep", link: "/makes/jeep" },
  { name: "pontiac", link: "/makes/pontiac" },
  { name: "mercury", link: "/makes/mercury" },
  { name: "bmw", link: "/makes/bmw" },
  { name: "lexus", link: "/makes/lexus" },
  { name: "infiniti", link: "/makes/infiniti" },
  { name: "hyundai", link: "/makes/hyundai" },
  { name: "volkswagen", link: "/makes/volkswagen" },
  { name: "acura", link: "/makes/acura" },
  { name: "ram", link: "/makes/ram" },
  { name: "mazda", link: "/makes/mazda" },
  { name: "kia", link: "/makes/kia" },
  { name: "saturn", link: "/makes/saturn" },
  { name: "audi", link: "/makes/audi" },
  { name: "mercedes-benz", link: "/makes/mercedes-benz" },
  { name: "isuzu", link: "/makes/isuzu" },
  { name: "oldsmobile", link: "/makes/oldsmobile" },
  { name: "saab", link: "/makes/saab" },
  { name: "hummer", link: "/makes/hummer" },
  { name: "subaru", link: "/makes/subaru" },
  { name: "scion", link: "/makes/scion" },
  { name: "suzuki", link: "/makes/suzuki" },
  { name: "mitsubishi", link: "/makes/mitsubishi" },
  { name: "land rover", link: "/makes/land-rover" },
  { name: "volvo", link: "/makes/volvo" }
];


const products = [
  {
    id: 1, name: 'A-PREMIUM AD100 Car Fault Code Reader OBD2 Scanner Engine Diagnostic Tool for All OBDII Protocol Cars',
    image: '/images/A-PREMIUM AD100 Car Fault Code Reader OBD2 Scanner Engine Diagnostic Tool for All OBDII Protocol Cars.png', price: 100, category: 'Category 1'
  },
  {
    id: 2, name: '8 Pcs Ignition Coil & 8 Pcs PLATINUM Spark Plug Kit',
    image: '/images/Brake_Caliper.png', price: 150, discount: 10, category: 'Category 2'
  },
  {
    id: 3, name: '4 Pcs Ignition Coil & 4 Pcs IRIDIUM Spark Plug Kit',
    image: '/images/Brake_Caliper.png', price: 200, category: 'Category 1'
  },
  {
    id: 4, name: 'Intake & Exhaust VVT Solenoid Cam Actuator',
    image: '/images/Brake_Caliper.png', price: 250, category: 'Category 3'
  },
  { id: 5, name: 'Product 4', image: '/images/Brake_Caliper.png', price: 250, category: 'Category 3' },
  { id: 6, name: 'Product 5', image: '/images/Brake_Caliper.png', price: 250, category: 'Category 4' },
  { id: 7, name: 'Product 6', image: '/images/Brake_Caliper.png', price: 250, category: 'Category 5' },
  // Add more products as needed
];

const categories = [
  { id: 1, name: 'Brake Caliper', image: '/images/Brake_Caliper.png' },
  { id: 2, name: 'CV Axle Shaft', image: '/images/CV_Axle_Shaft.png' },
  { id: 3, name: 'Shock Absorber', image: '/images/Shock_Absorber.png' },
  { id: 4, name: 'Drive Shaft', image: '/images/Drive_Shaft.png' },
  { id: 5, name: 'AC Compressor', image: '/images/AC_Compressor.webp' },
  { id: 6, name: 'Hub bearing', image: '/images/Hub_bearing.png' },
  { id: 7, name: 'Control Arm', image: '/images/Control_Arm.webp' },
  { id: 8, name: 'Power Steering Pump', image: '/images/Power_Steering_Pump.webp' },
  { id: 9, name: 'Steering Knuckle', image: '/images/Steering_Knuckle.webp' },
  { id: 10, name: 'Power Steering Rack', image: '/images/Power_Steering_Rack.webp' },
  // Add more categories as needed
];

const ProductPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className='main-sec main43'>

      <div className={`${styles.cateSec1} ${styles.cateSec1Background}`}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Featured Categories</h1>
          <div className={styles.arrows}>
            <button className={styles.viewMore}>View More</button>
            <button
              className={styles.arrowButton}
              onClick={() => {
                const prevButton = document.querySelector('.slick-prev') as HTMLElement;
                prevButton?.click();
              }}
            >
              <Image className='arrows-svg' src="/images/left-arrow.svg" alt="" width={35} height={35} /> {/* Left arrow */}
            </button>

            <button
              className={styles.arrowButton}
              onClick={() => {
                const nextButton = document.querySelector('.slick-next') as HTMLElement;
                nextButton?.click();
              }}
            >
              <Image className='arrows-svg' src="/images/right-arrow.svg" alt="" width={35} height={35} /> {/* Right arrow */}
            </button>

          </div>
        </div>
        <div className={styles.carouselContainer}>
          <CategoryCarousel categories={categories} />
        </div>
      </div>

      <section className="home-jumpbox-container">
        <div className="home-jumpbox-item" style={{ backgroundImage: "url('/Home Images/Seach by make.png')" }}>
          <div className="home-jumpbox-item-info">
            <h1 className="home-jumpbox-heading">Search By Make</h1>
            <div className="home-jumpbox-btn-content">
              <a data-yt-name="click_search_by_make_from_homepage" href="#">
                <button className="SearchCar-button" style={{ whiteSpace: 'pre-wrap' }}>Start Here</button>
              </a>
            </div>
          </div>
        </div>
        <div className="home-jumpbox-item" style={{ backgroundImage: "url('/Home Images/Search By Car.png')" }}>
          <div className="home-jumpbox-filter">
            <div className="home-jumpbox-item-info">
              <h1 className="home-jumpbox-title">Search By Car</h1>
              <div className="home-jumpbox-btn-content">
                <a data-yt-name="click_search_by_make_from_homepage" href="#">
                  <button className="SearchCar-button" data-yt-name="click_search_by_car_from_homepage" style={{ whiteSpace: 'pre-wrap' }} > Start Here</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/******************************* Shop by Popular makes section ****************************/}
      <section className="ShopByPopularMakes_section">
        <div className="ShopByPopularMakes_container">
          <div className="ShopByPopularMakes_section_Heading">
            <h1 className="ShopByPopularMakes_section_HeaderTitle"> Shop By Popular Makes</h1>
          </div>
        </div>
      </section>

      <section className="ShopByPopularMakes_section">
        <div className="ShopByPopularMakes_container">
          <div className="HomeMakes_content__xboha">
            <div role="row" className="ant-row" style={{ marginLeft: "-8px", marginRight: "-8px" }}>
              {makes.map((make, index) => (
                <div key={index} role="cell" className="ant-col ant-col-4" style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                  <a href="#" className="HomeMakes_makesItem__link">
                    <div className="HomeMakes_makesItem__ofJO3">
                      {make.name.charAt(0).toUpperCase() + make.name.slice(1)}
                      <div className="HomeMakes_rightIcon__TuUVi flexCenter">
                        <span className="HomeMakes_icon__eV_Sd">&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="Explore_more">
              <a href="/Show-More" className="Explore_moreBtn">
                {/* <a href='/Show-More'> */}


                <span>Explore More</span>
                <span className="HomeMakes_moreIcon flexCenter">
                  <Image className='red11' src="/Home Images/Arrow left icon.svg" alt="Left Arrow Icon" width={35} height={35} />
                  <Image className='wht11' src="/Home Images/wht-ar.png" alt="Left Arrow Icon" width={35} height={35} />

                </span>
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------------------- */}

      {/******************************* A Little About US section ****************************/}
      <section className="LittleAboutUs_section">
        <div className="LittleAboutUs_container">
          <h1 className="LittleAboutUs_section-heading">A Little About Us</h1>
          <div className="LittleAboutUs_columns-container">
            <div className="LittleAboutUs_column">
              <a href="#" className="LittleAboutUs_box-link">
                <div className="LittleAboutUs_box">
                  <Image src="/Home Images/Professional team.png" alt="Professional Team" className="box-image" width={100} height={100} />
                  <h2 className="box-heading">Professional Team</h2>
                  <p className="box-text">Our team are a combination of car enthusiasts and project DIYers. Since 2013, we have helped millions of drivers among the world to fix their cars. We secure the parts fitment!</p>
                </div>
              </a>
            </div>
            <div className="LittleAboutUs_column">
              <a href="#" className="LittleAboutUs_box-link">
                <div className="LittleAboutUs_box">
                  <Image src="/Home Images/Affordable parts.png" alt="Affordable Parts" className="box-image" width={100} height={100} />
                  <h2 className="box-heading">Affordable Parts</h2>
                  <p className="box-text">By operating online and skipping the middleman, we can bring you the same high-quality parts as those supplied to the biggest brands in the US, direct to your door at a fraction of the cost.</p>
                </div>
              </a>
            </div>
            <div className="Fastdelivery_column">
              <a href="#" className="LittleAboutUs_box-link">
                <div className="Fastdelivery_box">
                  <Image src="/Home Images/Fast delivery.png" alt="Fast Delivery" className="box-image" width={100} height={100} />
                  <h2 className="box-heading">Fast Delivery</h2>
                  <p className="box-text">We have several warehouses in California, Illinois, Georgia, and New Jersey. You can enjoy our free and fast shipping.</p>
                </div>
              </a>
            </div>
            <div className="ExcellentShopping_Exp_column">
              <a href="#" className="LittleAboutUs_box-link">
                <div className="ExcellentShopping_Exp_box">
                  <Image src="/Home Images/Excellent shopping.png" alt="Excellent Shopping Experience" className="box-image" width={100} height={100} />
                  <h2 className="box-heading">Excellent Shopping Exp</h2>
                  <p className="box-text">24/7 Service time, great product quality, 90 days free return, 3 years warranty, we always believe that your shopping experience matters a lot.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="LittleAboutUs_button-container">
            <a href="#" className="explore-button">Spareshive Story</a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}

      <br />
      <div className={`${styles.ProductSec1} ${styles.ProductSec1Background}`}>
        <div className={styles.header}>
          <h1 className={styles.heading}>You May Also Like</h1>
          <div className={styles.arrows}>
            <button
              className={styles.arrowButton}
              onClick={() => {
                const element = document.querySelector('.product-carousel .slick-prev') as HTMLElement;
                element?.click();
              }}
            >
              <Image className='arrows-svg' src="/images/left-arrow.svg" alt="" width={35} height={35} /> {/* Left arrow */}
            </button>

            <button
              className={styles.arrowButton}
              onClick={() => {
                const element = document.querySelector('.product-carousel .slick-next') as HTMLElement;
                element?.click();
              }}
            >
              <Image className='arrows-svg' src="/images/right-arrow.svg" alt="" width={35} height={35} /> {/* Right arrow */}
            </button>
          </div>
        </div>
        <div className={productStyles.carouselContainer}>
          <ProductCarousel products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
