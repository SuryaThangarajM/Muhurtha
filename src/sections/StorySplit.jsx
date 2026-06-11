import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const muhurthaImage = '/assets/MD pictures/Muhurtha MD .JPG';

export default function StorySplit() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <SectionWrapper id="about-us" className="section-space bg-[#faf7f2]">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.p variants={item} className="section-kicker">About us</motion.p>
          <motion.h2 variants={item} className="mt-4 section-heading">Muhurtha Divine Works — Three Generations of Sacred Craftsmanship</motion.h2>
        </motion.div>
        
        <div className="section-stack-xl grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
              <motion.div variants={item} className="section-stack-lg">
                <motion.h3 variants={item} className="fluid-subheading font-bold">Our story how it all started</motion.h3>
                <motion.p variants={item} className="section-stack section-copy">
                  Muhurtha Divine Works is a third-generation jewellery and temple craftsmanship enterprise rooted in Coimbatore—one of India's leading manufacturing hubs. With a legacy spanning over 100 years, our journey has evolved from a traditional jewellery shop into a fully integrated business encompassing bullion trading, retail excellence, and the manufacturing of intricate gold ornaments. Today, we specialize in turnkey temple projects, delivering sacred artistry through gold, silver, and wood with uncompromising attention to detail.
                </motion.p>
              </motion.div>

              <motion.div variants={item} className="section-stack-lg">
                <motion.h3 variants={item} className="fluid-subheading font-bold">About the founder</motion.h3>
                <motion.p variants={item} className="section-stack section-copy">
                  Led by our Managing Director, C. R. Bhadhrinaath, who brings over a decade of hands-on industry experience, he combines heritage craftsmanship with modern precision. His strength lies in authentic traditional designs, superior material quality, and the ability to execute large-scale temple works within committed timelines. At Muhurtha Divine Works, every creation reflects devotion, precision, and a deep respect for sacred traditions.
                </motion.p>
              </motion.div>

              <motion.div variants={item} className="section-stack-xl hidden gap-6 sm:grid-cols-2 lg:grid lg:max-w-[44rem] lg:gap-4">
                {[
                  { value: 'Managing Director', label: 'C. R. Bhadhrinaath' },
                  { value: '100+', label: 'Years of family legacy and heritage' },
                ].map((it) => (
                  <motion.div key={it.label} variants={item} className="luxury-panel rounded-[24px] p-6 lg:rounded-[20px] lg:p-5">
                    <motion.p variants={item} className={`font-serif text-[clamp(1.85rem,2.2vw,2.5rem)] text-luxury-gold ${it.value === 'Managing Director' ? 'lg:whitespace-nowrap' : ''}`}>{it.value}</motion.p>
                    <motion.p variants={item} className="fluid-body mt-3">{it.label}</motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <div className="overflow-hidden w-full aspect-[4/5] lg:max-h-[700px]">
                <AnimatedText direction="right">
                  <img
                    src={muhurthaImage}
                    alt="Muhurtha Divine Works Managing Director"
                    className="w-full h-full object-cover object-[center_18%] mobile-lazy"
                  />
                </AnimatedText>
              </div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="section-stack-xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                {[
                  { value: 'Managing Director', label: 'C. R. Bhadhrinaath' },
                  { value: '100+', label: 'Years of family legacy and heritage' },
                ].map((it) => (
                  <motion.div key={it.label} variants={item} className="luxury-panel rounded-[24px] p-5">
                    <motion.p variants={item} className={`font-serif text-[clamp(1.75rem,6.6vw,2.5rem)] text-luxury-gold ${it.value === 'Managing Director' ? 'whitespace-nowrap' : ''}`}>{it.value}</motion.p>
                    <motion.p variants={item} className="fluid-body mt-3">{it.label}</motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}