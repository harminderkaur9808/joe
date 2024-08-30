// components/DividerWithText.tsx
import React from 'react';
import styles from './DividerWithText.module.css';

interface DividerWithTextProps {
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ onMouseOver, onMouseOut }) => (
  <div 
    onMouseOver={onMouseOver} 
    onMouseOut={onMouseOut} 
    className={styles.dividerWithText}
  >
    <div className={styles.dividerContainer}>
      <hr className={styles.line} />
      <span className={styles.text}>Or Join With</span>
      <hr className={styles.line} />
    </div>
  </div>
);

export default DividerWithText;
