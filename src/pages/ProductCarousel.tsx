// pages/ProductCarousel.tsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StarRating from '../components/StarRating';
import Link from 'next/link';
import { truncateText } from '../utils/truncateText';
import styles from '../styles/ProductCarousel.module.css';
import '../styles/style-r.css';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: string;        // Sale price
  regularPrice: string; // Regular price
  image: string;
  rating?: number;      // Optional rating
  discount: number;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products = [] }) => {
  // Define responsive breakpoints for Carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
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

  // Handle add to cart logic
  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
    // Add your add-to-cart logic here
  };

  // Debugging: Log products to verify data
  console.log('Products:', products);

  return (
    <div className="Carousel-sec">
      <div className="Carousel-head">
        <h3>Popular Items</h3>
      </div>
      <Carousel responsive={responsive}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <div className={styles.discountBadge}>
                <div className='discount_head'>Discount</div>
                <div className='discount_value'>{product.discount}%</div>
              </div>
              <div className="img-sec">
                <Image src={product.image} alt={product.name} width={100} height={100} />
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
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;