// pages/ProductCollection.tsx
import React from 'react';
import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarRating from '../components/StarRating';
import Link from 'next/link';
import Image from 'next/image';
import { truncateText } from '../utils/truncateText';
import styles from '../styles/ProductCollection.module.css';
import '../styles/style-r.css';

interface Product {
  id: number;
  name: string;
  price: string;        // Sale price
  regularPrice: string; // Regular price
  image: string;
  rating?: number;      // Optional rating
  discount: number;
}

interface ProductCollectionProps {
  products?: Product[];
}

const ProductCollection: React.FC<ProductCollectionProps> = ({ products = [] }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
    // Add your add-to-cart logic here
  };

  const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </div>
    );
  };

  const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </div>
    );
  };

  return (
    <div className="Carousel-sec">
      <div className="Carousel-head">
        <h3>You may also like</h3>
      </div>
      <div className={styles.carouselWrapper}>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <div className={styles.discountBadge}>
                <div className='discount_head'>SAVE</div>
                <div className='discount_value'></div>
              </div>
              <div className="img-sec">
                <Image src={product.image} alt={product.name} width={200} height={200} />
              </div>
              <Link href={`/product/${product.id}`}>
                <h3>{truncateText(product.name, 8)}</h3>
              </Link>
              <div className={styles.ratingSection}>
                {product.rating ? (
                  <StarRating rating={product.rating} />
                ) : (
                  <div className={styles.placeholderRating}></div>
                )}
              </div>
              <div className={styles.priceSection}>
                <p className={styles.salePrice}>{product.price}</p>
                <p className={styles.regularPrice}>{product.regularPrice}</p>
              </div>
              <button
                className={styles.addToCartButton}
                onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCollection;
