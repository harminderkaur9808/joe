// components/ProductSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/style-r.css';
import Image from 'next/image';
import Link from 'next/link';



const ProductSlider = () => {
  const products = [
    {
      id: 1,
      image: '/images/product1.jpg', // Adjust the image URL as per your project structure
      description: 'Product 1 Description',
      price: '$100',
      buttonUrl: '/buy/product1'
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      description: 'Product 2 Description',
      price: '$200',
      buttonUrl: '/buy/product2'
    },
    {
      id: 3,
      image: '/images/product3.jpg',
      description: 'Product 3 Description',
      price: '$300',
      buttonUrl: '/buy/product3'
    },
    {
      id: 4,
      image: '/images/product4.jpg',
      description: 'Product 4 Description',
      price: '$400',
      buttonUrl: '/buy/product4'
    },
    {
      id: 5,
      image: '/images/product5.jpg',
      description: 'Product 5 Description',
      price: '$500',
      buttonUrl: '/buy/product5'
    },
    {
      id: 6,
      image: '/images/product6.jpg',
      description: 'Product 6 Description',
      price: '$600',
      buttonUrl: '/buy/product6'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id} >
          <Image src={product.image} alt={product.description} width={100} height={100}/>
          <div>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link href={product.buttonUrl}>Buy Now</Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
