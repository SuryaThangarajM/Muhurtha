import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#faf7f2]"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          className="h-16 w-16 rounded-full border border-luxury-gold/20 border-t-luxury-gold"
        />
        <div className="text-center">
          <p className="font-serif text-[clamp(1.55rem,2.6vw,2.35rem)] tracking-[0.18em] text-stone-950">muhurthadivineworks.com</p>
          <p className="mt-2 text-[clamp(0.64rem,0.72vw,0.78rem)] uppercase tracking-[0.3em] text-stone-500">Loading Collection</p>
        </div>
      </div>
    </motion.div>
  );
}