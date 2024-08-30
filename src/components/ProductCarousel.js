import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/ProductCarousel.css'; // Ensure you have a CSS file for styling
import Image from 'next/image';

const ProductCarousel = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Image src={product.image} alt={product.name} className="product-image" width={200} height={10} />
          <h3 className="product-name">{product.name}</h3>
          <div className="star-rating">
            &#9733;&#9733;&#9733;&#9733;&#9734; {/* Example star rating, replace with dynamic stars if needed */}
          </div>
          <div className="price-container">
            {product.discount ? (
              <>
                <span className="regular-price">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="sale-price">${product.price}</span>
              </>
            ) : (
              <span className="regular-price">${product.price}</span>
            )}
          </div>
          <button className="view-detail-button">View Detail</button>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
