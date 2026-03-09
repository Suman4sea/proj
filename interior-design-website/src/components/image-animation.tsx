import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ImageAnimationProps {
  src: string;
  alt: string;
  className?: string;
  animationType?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'rotate';
}

export default function ImageAnimation({
  src,
  alt,
  className = '',
  animationType = 'fadeUp',
}: ImageAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
  };

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[animationType]}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  );
}
