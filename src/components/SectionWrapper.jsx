import { motion } from 'framer-motion';

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`w-full scroll-mt-28 md:scroll-mt-32 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}