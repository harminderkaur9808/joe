import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import "../styles/Productcrausallink.css"; // Custom styles

// Dummy product data
const carouselData = [
  { id: 1, name: '4 Pcs Ignition Coil & 4 Pcs IRIDIUM Spark Plug Kit', image: '/images/Searchpageimg/Productoneimg.png', price: 100, Rating: 4.1 },
  { id: 2, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 150, Rating: 3.1 },
  { id: 3, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 200, Rating: 4.7 },
  { id: 4, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 250, Rating: 4.1 },
  { id: 5, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 300, Rating: 4.1 },
  { id: 6, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 350, Rating: 4.4 },
  { id: 7, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 400 , Rating: 4.4 },
  { id: 8, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 450, Rating: 2.1 },
  { id: 9, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 500 , Rating: 4.4 },
  { id: 10, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/Searchpageimg/Productoneimg.png', price: 550, Rating: 4.1 },
];

// Responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

// Rating component
const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, i) => <span key={i} className="star full">&#9733;</span>)}
      {halfStar && <span className="star half">&#9733;</span>}
      {[...Array(emptyStars)].map((_, i) => <span key={i} className="star empty">&#9734;</span>)}
    </div>
  );
};

// Custom Left Arrow
  <section>

    
  </section>
const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => (
  <view className='Main-C1-0arr'>

  <button className="custom-arrow custom-left-arrow" onClick={onClick}>
    ❮
  </button>
  </view>

);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="custom-arrow custom-right-arrow" onClick={onClick}>
    ❯
  </button>
);

// Product Carousel component
const Productcrausallink: React.FC = () => {
  return (
    <section className='bodymain121'>
      <div className='headingpcs'>
        <h2>You may also like</h2>
      </div>
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
          customRightArrow={<CustomRightArrow onClick={() => {}} />}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {carouselData.map(product => (
            <div key={product.id} className="product-card">
              <Image className="product-image" src={product.image} alt={product.name} width={150} height={150} />
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <Image src="/images/Searchpageimg/Group1000005162.svg" alt="" className="feature-icon-img123" width={150} height={150} />
                {product.Rating && <Rating rating={product.Rating} />}
                <p className="product-price">
                  ${product.price.toFixed(2)}
                  <span>$87.3</span>
                </p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Productcrausallink;
