import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';

const reasons = [
  {
    title: 'Heritage-led craftsmanship',
    description:
      'Three generations of experience inform every detail, from sacred proportions to refined finishing.',
  },
  {
    title: 'Temple-focused execution',
    description:
      'We build rathams, doors, idols, vahanams, and temple assets with precision aligned to spiritual context.',
  },
  {
    title: 'Reliable project delivery',
    description:
      'Our team balances quality materials, fine detailing, and committed timelines for dependable end-to-end work.',
  },
];

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="section-space bg-white">
      <div className="section-shell">
        <div className="w-full max-w-none xl:max-w-2xl">
          <AnimatedText>
            <p className="section-kicker">Why us?</p>
            <h2 className="mt-4 section-heading">Built on devotion, precision, and trust.</h2>
            <p className="mt-6 section-copy">
              Muhurtha Divine Works combines traditional craftsmanship with disciplined execution to
              deliver temple creations that feel meaningful, durable, and beautifully resolved.
            </p>
          </AnimatedText>
        </div>

        <div className="section-stack-xl grid gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="luxury-panel rounded-[28px] p-8"
            >
              <p className="text-[clamp(0.65rem,0.72vw,0.76rem)] uppercase tracking-[0.3em] text-luxury-gold">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-[clamp(1.8rem,2.6vw,2.7rem)] text-stone-950">{reason.title}</h3>
              <p className="fluid-body mt-4">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
