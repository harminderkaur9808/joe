// components/CustomArrows.tsx
import React from 'react';
import styles from '../styles/CategoryCarousel.module.css';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} ${styles.customArrow} ${styles.prevArrow}`}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  />
);

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} ${styles.customArrow} ${styles.nextArrow}`}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
  />
);
