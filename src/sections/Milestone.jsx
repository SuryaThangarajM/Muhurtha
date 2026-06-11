import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';

export default function Milestone() {
  return (
    <SectionWrapper id="monumental-milestone" className="bg-[#faf7f2] section-space-tight">
      <div className="section-shell">
        <div className="w-full">
          <AnimatedText>
            <p className="section-kicker mt-2 inline-block rounded-full bg-white/0 px-2 xl:whitespace-nowrap">
              A MONUMENTAL MILESTONE IN PRECISION MINING
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.02] tracking-tight text-stone-950 xl:text-[clamp(4.25rem,4.2vw,5.75rem)]">
              <span className="block xl:whitespace-nowrap">History Made. Step Inside — Asia’s Largest</span>
              <span className="block mt-2">Golden Chariot</span>
            </h2>
          </AnimatedText>
        </div>

        <div className="section-stack-lg">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <div className="w-full bg-[#faf7f2] p-4 sm:p-5">
                <img
                  src="/assets/Golden%20Chariot/GC%202.JPG"
                  alt="Golden Chariot - GC 2"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-none md:max-w-[520px] object-contain shadow-none mix-blend-multiply"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <AnimatedText>
                <h3 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight text-stone-900 mb-5 max-w-xl">
                  A Legacy Completed
                </h3>

                <div className="w-full max-w-none xl:max-w-2xl text-[clamp(1rem,1.9vw,1.125rem)] leading-8 md:leading-9 text-stone-600 space-y-5">
                  <p className="max-w-[62ch]">
                    A monumental symbol of devotion, craftsmanship, and heritage, the Golden
                    Chariot stands as one of "Muhurtha Divine Works" most prestigious
                    accomplishment. Recognized as 'Asia’s Biggest Golden Chariot', this
                    extraordinary project carries a legacy that began in the "1790s", when the gold
                    work was first initiated but remained incomplete due to various circumstances.
                  </p>

                  <p className="max-w-[62ch]">
                    After centuries, Muhurtha Divine Works proudly brought this historic vision to
                    completion, blending traditional artistry with unmatched precision and detailed
                    workmanship. Every element of the chariot was carefully designed and executed in
                    strict adherence to "Aagama Vidhi", ensuring that the sacred aesthetics and
                    temple architectural standards were preserved with authenticity.
                  </p>

                  <p className="max-w-[62ch]">
                    This masterpiece is not just a work of gold—it is a "revival of history,
                    devotion, and divine craftsmanship", reflecting our commitment to excellence in
                    temple artistry.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
                  {['m3.jpg', 'm4.jpg', 'm1.jpg', 'm2.jpg'].map((imageName) => (
                    <div
                      key={imageName}
                      className="group flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-[#faf7f2]"
                    >
                      <img
                        src={`/assets/Milestone/${imageName}`}
                        alt={`Milestone ${imageName.replace('.jpg', '')}`}
                        className="h-full w-full object-contain object-bottom transition-transform duration-500 ease-out transform-gpu group-hover:scale-105 mobile-lazy"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
