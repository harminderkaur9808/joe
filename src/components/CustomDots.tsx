import React from 'react';

interface CustomDotsProps {
  dots: boolean[];
  activeIndex: number;
  onClick: (index: number) => void;
}

const CustomDots: React.FC<CustomDotsProps> = ({ dots, activeIndex, onClick }) => {
  return (
    <div className="custom-dots">
      {dots.map((isActive, index) => (
        <button
          key={index}
          className={`dot ${isActive ? 'active' : ''}`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default CustomDots;
