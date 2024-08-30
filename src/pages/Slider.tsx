import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/slider.css'; // Ensure this path is correct
import Image from 'next/image';

interface Slide {
  id: number;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonUrl: string;
  imageUrl: string;
}

const SliderComponent: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      heading: 'Aftermarket Auto Parts Online1',
      paragraph: 'To build a framework that makes auto repairs predictable',
      buttonText: 'About Us',
      buttonUrl: '/slide-1',
      imageUrl: '/images/slider-2.jpg'
    },
    {
      id: 2,
      heading: 'Aftermarket Auto Parts Online2',
      paragraph: 'To build a framework that makes auto repairs predictable',
      buttonText: 'About Us',
      buttonUrl: '/slide-2',
      imageUrl: '/images/slider-2.jpg'
    },
    {
      id: 3,
      heading: 'Aftermarket Auto Parts Online3',
      paragraph: 'To build a framework that makes auto repairs predictable',
      buttonText: 'About Us',
      buttonUrl: '/slide-3',
      imageUrl: '/images/slider-2.jpg'
    },
    {
      id: 4,
      heading: 'Aftermarket Auto Parts Online4',
      paragraph: 'To build a framework that makes auto repairs predictable',
      buttonText: 'About Us',
      buttonUrl: '/slide-4',
      imageUrl: '/images/slider-2.jpg'
    },
    {
      id: 5,
      heading: 'Aftermarket Auto Parts Online5',
      paragraph: 'To build a framework that makes auto repairs predictable',
      buttonText: 'About Us',
      buttonUrl: '/slide-5',
      imageUrl: '/images/slider-2.jpg'
    }
  ];

  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const slideWidth = 100 / slidesToShow;
  const totalSlides = slides.length;
  const duplicatedSlides = [...slides, ...slides, ...slides]; // Duplicating slides for seamless loop
  const initialSlide = Math.floor(duplicatedSlides.length / 2);

  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= duplicatedSlides.length - slidesToShow) {
        return initialSlide; // Reset to initial slide
      }
      return newIndex;
    });
  }, [duplicatedSlides.length, slidesToShow, initialSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newIndex = prev - 1;
      if (newIndex < slidesToShow) {
        return duplicatedSlides.length - slidesToShow * 2; // Go to the last duplicated slide
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the correct slidesToShow

    const interval = setInterval(nextSlide, 3000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [nextSlide]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
  }, [currentSlide, slideWidth]);

  return (
    <div className="slider-container">
      <button
        className="prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <div className="slider-wrapper" ref={sliderRef}>
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ width: `${slideWidth}%` }}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.heading}
              className="slider-image"
              width={250}
              height={100}
            />
            <div className="slider-content">
              <h2>{slide.heading}</h2>
              <p>{slide.paragraph}</p>
              <a href="#" className="button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === ((currentSlide - slidesToShow) % totalSlides + totalSlides) % totalSlides
                ? 'active'
                : ''
            }`}
            onClick={() => setCurrentSlide(index + slidesToShow)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
