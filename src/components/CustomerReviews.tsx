import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/CustomerReviews.module.css';
import Image from 'next/image';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className={styles.RatingStars}>
      {Array(fullStars).fill(0).map((_, index) => (
        <span key={index} className={styles.filledStar}>&#9733;</span>
      ))}
      {halfStar && <span className={styles.halfStar}>&#9733;</span>}
      {Array(emptyStars).fill(0).map((_, index) => (
        <span key={index} className={styles.emptyStar}>&#9733;</span>
      ))}
    </span>
  );
};

const CustomerReviews: React.FC = () => {
  const [index, setIndex] = useState(1); // Set initial index to center the second slide
  const rating = 4.7; // Example rating
  const rating2 = 4.6; 
  const reviews = [
    {
      id: 1,
      image: '/images/Mainsecreviewimg.svg',
      additionalImage: '/images/additional-image.png',
      title: "Super clean looking and easy to install",
      description: "These splash guards for the 2022 Toyota Tundra work with all trim levels, wheth…",
      reviewDate: "2023.02.21",
      rating: 5.0,
      
      
    },
    {
      id: 2,
      image: '/images/Mainsecreviewimg.svg',
      additionalImage: '/images/round21.png',
      title: "Super clean looking and easy to install",
      description: "These splash guards for the 2022 Toyota Tundra work with all trim levels, wheth…",
      reviewDate: "2023.02.21",
      rating: 5.0,
    
    },
    {
      id: 3,
      image: '/images/Mainsecreviewimg.svg',
      additionalImage: '/images/additional-image.png',
      title: "Super clean looking and easy to install",
      description: "These splash guards for the 2022 Toyota Tundra work with all trim levels, wheth…",
      reviewDate: "2023.02.21",
      rating: 5.0,
   
    },
    {
      id: 4,
      image: '/images/Mainsecreviewimg.svg',
      title: "Super clean looking and easy to install",
      description: "These splash guards for the 2022 Toyota Tundra work with all trim levels, wheth…",
      reviewDate: "2023.02.21",
      rating: 5.0,
    
    },
    {
      id: 5,
      image: '/images/Mainsecreviewimg.svg',
      title: "Super clean looking and easy to install",
      description: "These splash guards for the 2022 Toyota Tundra work with all trim levels, wheth…",
      reviewDate: "2023.02.21",
      rating: 5.0,
      
    },
    {
      id: 6,
      image: '/images/Mainsecreviewimg.svg',
      title: "Super clean looking and easy to install",
      description: "These splash guards for the 2022 Toyota Tundra work with all trim levels, wheth…",
      reviewDate: "2023.02.21",
      rating: 5.0,
      
    },
  ];

  const showSlide = (i: number) => {
    setIndex((prevIndex) => (i + reviews.length) % reviews.length);
  };

  const getSlideClass = (slideIndex: number) => {
    const totalSlides = reviews.length;
    if (slideIndex === index) return `${styles.reviewSlide} ${styles.active}`;
    if (slideIndex === (index + 1) % totalSlides) return `${styles.reviewSlide} ${styles.next}`;
    if (slideIndex === (index - 1 + totalSlides) % totalSlides) return `${styles.reviewSlide} ${styles.prev}`;
    return styles.reviewSlide;
  };

  useEffect(() => {
    const showSlide = (i: number) => {
      setIndex((prevIndex) => (i + reviews.length) % reviews.length);
    };

    const autoPlay = setInterval(() => {
      showSlide(index + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoPlay); // Clear interval on component unmount
  }, [index, reviews.length]);

  return (
    <div>
      <main>
        <div className={styles.reviewsMainSec}>
          <div className={styles.reviewHead}>
            <h1>CUSTOMER REVIEWS</h1>
          </div>

          <div className={styles.SliderWithRatingSec}>
            <div className={styles.ReviewSlider}>
              <h2>Spareshive Reviews</h2>
              <div className={styles.googleRating}>
                <div className={styles.StarRating}>
                    <Image src="/images/star.svg" alt="" width={20} height={20} />
                    <Image src="/images/star.svg" alt="" width={20} height={20}/>
                    <Image src="/images/star.svg" alt="" width={20} height={20}/>
                    <Image src="/images/star.svg" alt="" width={20} height={20}/>
                    <Image src="/images/star-half.svg" alt="" width={20} height={20}/>
                </div>
                <span className={styles.RatingNo}>{rating.toFixed(1)} /</span>
                <span className={styles.ReviewText}>
                  5 &nbsp;Based on <Link className={styles.reviewCounts} href="/">6967 Reviews</Link>
                </span>
              </div>
             <a href='#'> <div className={styles.slider}>
                <div className={`${styles.slides} ${styles.CustomerReviews_slides__JZRjW}`} style={{ transform: `translateX(${-index * 100 / 3}%)` }}>
                  {reviews.map((review, i) => (
                    <div key={review.id} className={getSlideClass(i)}>
                      <Image src={review.image} alt={review.title} className={styles.reviewImage} width={20} height={20} />
                      <Image style={{width:"34px", height:"44px", position:"relative", top:"2px"}}  src={'/images/round21.png'} alt={review.title} className="rdner" width={34} height={44} />
                      <p style={{paddingLeft:"41px", textAlign:"left",fontSize:"11px", position:"relative",top:"-37px"}} className='txt87'> 4 Pcs Front & Rear Mud Flaps Splash Guards for Toyota Tundra 2022-2023</p>
                      <Image width={18} height={23} style={{width:"18px", height:"23px", position:"relative", float:'right',top:"-66px"}} className='rgtar' src='/images/rgtar.png' alt="arrow"/>

                      <h3 className={styles.reviewTitle}>{review.title}</h3>
                      <p className={styles.reviewDescription}>{review.description}</p>
                      <p className={styles.reviewDate}>{review.reviewDate}</p>
                      <div className={styles.reviewRating}>
                        <StarRating rating={review.rating} />
                        <span className={styles.ReviewRatingNumber}>{review.rating.toFixed(1)}</span>
                      </div>
                      {/* <p><strong>- {review.author}</strong></p> */}
                    </div>
                  ))}
                </div>
                <button className={`${styles.button} ${styles.prev}`} onClick={() => showSlide(index - 1)}>&#10094;</button>
                <button className={`${styles.button} ${styles.next}`} onClick={() => showSlide(index + 1)}>&#10095;</button>
              </div>
              </a>
              <div className={styles.dots}>
                {reviews.map((_, i) => (
                  <span 
                    key={i} 
                    className={`${styles.dot} ${i === index ? styles.activeDot : ''}`} 
                    onClick={() => setIndex(i)}
                  ></span>
                ))}
              </div>
            </div>

            <div className={styles.GooglePage}>
              <h2>Google Rating</h2>
              <div className={styles.googleRating}>
                <div className={styles.StarRating}>
                    <Image src="/images/star.svg" alt="" width={20} height={20} />
                    <Image src="/images/star.svg" alt="" width={20} height={20}/>
                    <Image src="/images/star.svg" alt="" width={20} height={20}/>
                    <Image src="/images/star.svg" alt="" width={20} height={20} />
                    <Image src="/images/star-half.svg" alt="" width={20} height={20}/>
                </div>
                <span className={styles.RatingNo}>{rating2.toFixed(1)} /</span>
                <span className={styles.ReviewText}>
                  5 &nbsp;&nbsp;&nbsp;trusted store <Image src="/images/badge-tick.svg" alt="" width={20} height={20} />
                </span>
              </div>

              <div className={styles.LinkSec}>
                <div>
                <Image src="/images/google-img.png" alt="" width={200} height={20}/>
                <button>See all ratings <Image src="/images/right-arrow-g.svg" alt="" width={15} height={20} /></button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default CustomerReviews;
