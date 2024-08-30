// components/CategoryCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/CategoryCarousel.module.css';
import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryCarouselProps {
  categories: Category[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  const settings = {
    dots: false,
    infinite: false, // Disable infinite looping
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {categories.map((category) => (
        <div key={category.id} className={styles.categoryCard}>
          <Image  src={category.image} alt={category.name} className={styles.categoryImage} width={800} height={600} />
          <h3 className={styles.categoryName}>{category.name}</h3>
          <button className={styles.viewCategoryButton}>View Category</button>
          <div className={styles.newBackgroundDiv}>
            {/* Content for the new background div */}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CategoryCarousel;
