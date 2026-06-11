import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ children, className = '', stagger = 0.09, direction = 'left', distance = 28 }) {
  const offset = direction === 'right' ? distance : -distance;

  const item = {
    hidden: { opacity: 0, x: offset },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={container}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
