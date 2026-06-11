import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';

export default function OurVision() {
  return (
    <SectionWrapper id="craftsmanship" className="bg-white section-space-tight">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-10">
          <div className="pt-1 md:pt-4">
            <AnimatedText>
              <h3 className="mt-4 font-serif text-[clamp(2.25rem,4vw,4.7rem)] leading-[1.02] tracking-tight text-stone-950">
                Where vision became legacy
              </h3>
            </AnimatedText>
          </div>

          <div className="relative md:mt-6">
            <div className="relative w-full aspect-video overflow-hidden bg-black transform transition-transform duration-500 ease-out hover:scale-105">
              <iframe
                src="https://player.vimeo.com/video/1198675037?badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Muhurtha LQ"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
