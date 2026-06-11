import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="section-space bg-[#f8f4ee]">
      <div className="section-shell">
        <AnimatedText>
          <p className="section-kicker">Testimonials</p>
          <h2 className="mt-4 section-heading">Testimonial by Srimath Paramahamasethyathi Shri Madhurakavi Vaanamamalai</h2>
          <p className="mt-2 font-serif text-[clamp(1.6rem,2.2vw,2.4rem)] text-stone-950">
            Ramanuja Jeeyar <span className="tabular-nums">31</span>st Pattam <span className="tabular-nums">–</span> Shri Vaanamamalai Mutt, Nanguneri
          </p>
        </AnimatedText>
        <div className="section-stack-xl">
          <div className="w-full flex justify-center">
            <div className="relative w-[90%] md:w-[66%] aspect-video overflow-hidden rounded-[32px] bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
              <iframe
                src="https://player.vimeo.com/video/1198690633?badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Testimonial"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}