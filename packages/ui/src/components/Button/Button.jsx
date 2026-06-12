import React from 'react';
import { motion } from 'framer-motion';
import './button.css';

const btnVariants = {
  idle: { scale: 1, boxShadow: '0 1px 4px rgba(2,6,23,0.06)' },
  hover: { scale: 1.03, boxShadow: '0 12px 32px rgba(2,6,23,0.12)', transition: { duration: 0.26, ease: [0.22,1,0.36,1] } },
  tap: { scale: 0.98, transition: { duration: 0.08 } }
};

export default function Button({ children, onClick, variant = 'primary', className = '', ...rest }) {
  return (
    <motion.button
      className={`ds-btn ds-btn--${variant} ${className}`}
      variants={btnVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      aria-pressed="false"
      {...rest}
    >
      {children}
    </motion.button>
  );
}
