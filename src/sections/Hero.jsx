import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedText from '../components/AnimatedText';

export default function Hero({ onOpenModal }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.35 });
  const backgroundY = useTransform(smoothScroll, [0, 1], [0, 60]);
  const contentY = useTransform(smoothScroll, [0, 1], [0, -24]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate -mt-[120px] mb-0 scroll-mt-28 overflow-visible bg-[radial-gradient(circle_at_top,rgba(199,162,90,0.10),transparent_32%),linear-gradient(180deg,#faf7f2_0%,#f5efe6_100%)] pt-[120px] pb-24 sm:pb-28 md:scroll-mt-32 lg:pb-32"
    >
      {/* Video Background */}
        <div className="absolute inset-0 -z-20 overflow-hidden bg-[#faf7f2]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-x-0 -top-8 h-[calc(100%+6rem)] w-full object-cover object-center md:-top-10 md:h-[calc(100%+7rem)] lg:-top-12 lg:h-[calc(100%+8rem)] xl:inset-0 xl:h-full"
          style={{ filter: 'brightness(1.15) contrast(1.05)' }}
          poster="/assets/hero-poster-mobile.webp"
        >
          <source src="/assets/bg vid 3c-4k.mp4" type="video/mp4" />
          <source src="/assets/bg vid 3c.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,162,90,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,242,0.10)_0%,rgba(245,239,230,0.10)_100%)]" />
      </motion.div>

      {/* solid cream strips to cover any visible video frame seams */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-[#faf7f2] sm:h-[4.5rem] md:h-24 lg:h-28" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[6.5rem] bg-[#faf7f2] sm:h-28 md:h-32 lg:h-36" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 z-20 h-6 bg-[#faf7f2]" />

      <div className="section-shell relative z-20 flex min-h-[100svh] items-center py-0">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-none xl:max-w-4xl"
        >
          <AnimatedText>
            <p className="section-kicker">Fine Jewellery House</p>
            <h1 className="mt-5 max-w-none font-serif text-[clamp(2.75rem,7.5vw,5.6rem)] leading-[0.96] tracking-tight text-stone-950 xl:max-w-3xl">
              Crafted to radiate divine light in every sacred moment.
            </h1>
            <p className="mt-6 max-w-none text-[clamp(1rem,1.45vw,1.16rem)] leading-[1.84] text-stone-600 xl:max-w-2xl">
              Explore a sacred collection of precious gems and metals crafted with spiritual
              elegance—serene, radiant, and eternally blessed.
            </p>
          </AnimatedText>
        </motion.div>
      </div>
    </section>
  );
}