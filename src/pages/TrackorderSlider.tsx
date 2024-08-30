import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import "../styles/TrackorderSlider.css"; // Custom styles

// Dummy product data
const carouselData = [
  { id: 1, name: 'A-ExampleAD 1 00 Car Fault Code Reader OBD', image: '/images/Searchpageimg/Productoneimg.png', price: 100, Rating: 4.1 },
  { id: 2, name: 'Intake & Exhaust VVT Solenoid Cam Actuator', image: '/images/TrackOrder/Product1img.svg', price: 150, Rating: 3.1 },
];

// Responsive settings for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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
const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="custom-arrow custom-left-arrow" onClick={onClick}>
    ❮
  </button>
);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="custom-arrow custom-right-arrow" onClick={onClick}>
    ❯
  </button>
);

// Product Carousel component
const TrackorderSlider: React.FC = () => {
  return (
    <section className='bodymain121'>
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
                <img src="/images/TrackOrder/SaveIco.svg" alt="" className="feature-icon-img123" />
                <p className="product-price">
                  ${product.price.toFixed(2)}
                  <span>$87.3</span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TrackorderSlider;
