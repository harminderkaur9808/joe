import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productStyles from '../styles/components/ProductCarousel.module.css';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number; // Optional discount property
}

interface ProductCarouselProps {
  products: Product[];
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={productStyles.carouselContainer}>
      <button className={`${productStyles.arrowButton} ${productStyles.left}`} onClick={() => sliderRef.current?.slickPrev()}>
        <Image className='arrows-svg' src="/images/left-arrow.svg" alt=""  width={20} height={20}/> {/* Left arrow */}
      </button>
      <Slider ref={sliderRef} {...settings} className="product-carousel">
        {products.map((product) => (
          <div key={product.id} className={productStyles.productCard}>
            <Image src={product.image} alt={product.name} className={productStyles.productImage} width={200} height={10} />
            <h3 className={productStyles.productName}>{truncateText(product.name, 12)}</h3>
            <div className={productStyles.starRating}>
              &#9733;&#9733;&#9733;&#9733;&#9734; {/* Example star rating */}
            </div>
            <div className={productStyles.priceContainer}>
              {product.discount ? (
                <>
                  <span className={productStyles.regularPrice}>${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                  <span className={productStyles.salePrice}>${product.price}</span>
                </>
              ) : (
                <span className={productStyles.regularPrice}>${product.price}</span>
              )}
            </div>
            <button className={productStyles.viewDetailButton}>View Detail</button>
            <div className={productStyles.newBackgroundDiv}>
              {/* Content for the new background div */}
            </div>
          </div>
        ))}
      </Slider>
      <button className={`${productStyles.arrowButton} ${productStyles.right}`} onClick={() => sliderRef.current?.slickNext()}>
        <Image className='arrows-svg' src="/images/right-arrow.svg" alt="" width={20} height={20}/> {/* Right arrow */}
      </button>
    </div>
  );
};

export default ProductCarousel;
