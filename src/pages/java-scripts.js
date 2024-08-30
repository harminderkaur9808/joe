import React, { useEffect, useRef } from 'react';

const SliderComponent1 = () => {
  const imageListRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const sliderScrollbarRef = useRef(null);

  useEffect(() => {
    const imageList = imageListRef.current;
    const slideButtons = [prevButtonRef.current, nextButtonRef.current];
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const handleMouseMove = (startX, thumbPosition, maxThumbPosition, e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    };

    const handleMouseUp = (handleMouseMove) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const boundMouseMove = handleMouseMove.bind(null, startX, thumbPosition, maxThumbPosition);

      document.addEventListener('mousemove', boundMouseMove);
      document.addEventListener('mouseup', () => handleMouseUp(boundMouseMove));
    };

    scrollbarThumb.addEventListener('mousedown', handleMouseDown);

    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    };

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener('scroll', () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });

    slideButtons.forEach(button => {
      button.addEventListener('click', () => {
        const direction = button.id === 'prev-slide' ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    });

    handleSlideButtons(); // Initialize button visibility

    const resizeListener = () => {
      handleSlideButtons();
      updateScrollThumbPosition();
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
      scrollbarThumb.removeEventListener('mousedown', handleMouseDown);
      imageList.removeEventListener('scroll', () => {
        updateScrollThumbPosition();
        handleSlideButtons();
      });
      slideButtons.forEach(button => {
        button.removeEventListener('click', () => {
          const direction = button.id === 'prev-slide' ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
      });
    };
  }, []);

  return (
    <div className="body12">
      <div className="container">
        <div className="title-gallery">
          <h1>My Photo Gallery</h1>
        </div>
        <div className="desc">
          <p>A collection of pictures coming from the assets store of CodePen!</p>
        </div>
        <div className="slider-wrapper">
          <button id="prev-slide" ref={prevButtonRef} className="slide-button material-symbols-rounded">
            chevron_left
          </button>
          <ul className="image-list" ref={imageListRef}>
            <li className="image-item">
              <img
                src="https://images.unsplash.com/photo-1716404038063-c4110490124a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTc2Mzc1MTV8&ixlib=rb-4.0.3&q=80&w=400"
                alt="img-1"
              />
            </li>
            {/* Add other images similarly */}
          </ul>
          <button id="next-slide" ref={nextButtonRef} className="slide-button material-symbols-rounded">
            chevron_right
          </button>
        </div>
        <div className="slider-scrollbar" ref={sliderScrollbarRef}>
          <div className="scrollbar-track">
            <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
          </div>
        </div>
        <div className="desc-2">
          <p>Check the description of this pen for the tutorial link!</p>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent1;
