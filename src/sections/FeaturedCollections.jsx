import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';
import { useState } from 'react';
import LuxuryImageCarousel from '../components/LuxuryImageCarousel';

const THIRUVACHI_ASSET_VERSION = '20260601';
const thiruvachiAsset = (fileName) => `/assets/featured-projects/Thiruvachi/${fileName}?v=${THIRUVACHI_ASSET_VERSION}`;

const simavahanamSlides = [
  {
    src: '/assets/featured-projects/Simavahanam/1 .jpg',
    alt: 'Simavahanam project image 1',
  },
  {
    src: '/assets/featured-projects/Simavahanam/2 .jpg',
    alt: 'Simavahanam project image 2',
  },
  {
    src: '/assets/featured-projects/Simavahanam/3 .jpg',
    alt: 'Simavahanam project image 3',
  },
  {
    src: '/assets/featured-projects/Simavahanam/4.jpg',
    alt: 'Simavahanam project image 4',
  },
  {
    src: '/assets/featured-projects/Simavahanam/5.jpg',
    alt: 'Simavahanam project image 5',
  },
];

const kamalavahanamSlides = [
  {
    src: '/assets/featured-projects/kamalavahanam/101 .jpg',
    alt: 'Kamalavahanam project image 101',
  },
  {
    src: '/assets/featured-projects/kamalavahanam/105.jpg',
    alt: 'Kamalavahanam project image 105',
  },
  {
    src: '/assets/featured-projects/kamalavahanam/104 .jpg',
    alt: 'Kamalavahanam project image 104',
  },
];

const gajavahanamSlides = [
  {
    src: '/assets/featured-projects/gajavahanam/201.jpg',
    alt: 'Gajavahanam project image 201',
  },
  {
    src: '/assets/featured-projects/gajavahanam/202.jpg',
    alt: 'Gajavahanam project image 202',
  },
  {
    src: '/assets/featured-projects/gajavahanam/203.jpg',
    alt: 'Gajavahanam project image 203',
  },
  {
    src: '/assets/featured-projects/gajavahanam/205.jpg',
    alt: 'Gajavahanam project image 205',
  },
  {
    src: '/assets/featured-projects/gajavahanam/206.jpg',
    alt: 'Gajavahanam project image 206',
  },
  {
    src: '/assets/featured-projects/gajavahanam/208.jpg',
    alt: 'Gajavahanam project image 208',
  },
];

const kilivahanamSlides = [
  {
    src: '/assets/featured-projects/Kilivahanam/301.jpg',
    alt: 'Kilivahanam project image 301',
  },
  {
    src: '/assets/featured-projects/Kilivahanam/302.jpg',
    alt: 'Kilivahanam project image 302',
  },
  {
    src: '/assets/featured-projects/Kilivahanam/304.jpg',
    alt: 'Kilivahanam project image 304',
  },
  {
    src: '/assets/featured-projects/Kilivahanam/308.jpg',
    alt: 'Kilivahanam project image 308',
  },
];

const annavahanamSlides = [
  {
    src: '/assets/featured-projects/Annavahanam/401.jpg',
    alt: 'Annavahanam project image 401',
  },
  {
    src: '/assets/featured-projects/Annavahanam/402.jpg',
    alt: 'Annavahanam project image 402',
  },
  {
    src: '/assets/featured-projects/Annavahanam/403.jpg',
    alt: 'Annavahanam project image 403',
  },
  {
    src: '/assets/featured-projects/Annavahanam/404.jpg',
    alt: 'Annavahanam project image 404',
  },
  {
    src: '/assets/featured-projects/Annavahanam/405.jpg',
    alt: 'Annavahanam project image 405',
  },
  {
    src: '/assets/featured-projects/Annavahanam/406.jpg',
    alt: 'Annavahanam project image 406',
  },
];

const ambariSlides = [
  {
    src: '/assets/featured-projects/Ambari/501.jpg',
    alt: 'Ambari project image 501',
  },
  {
    src: '/assets/featured-projects/Ambari/504.jpg',
    alt: 'Ambari project image 504',
  },
  {
    src: '/assets/featured-projects/Ambari/505.jpg',
    alt: 'Ambari project image 505',
  },
];

const thiruvachiSlides = [
  {
    src: thiruvachiAsset('1.jpg'),
    alt: 'Thiruvachi project image 1',
  },
  {
    src: thiruvachiAsset('2.jpg'),
    alt: 'Thiruvachi project image 2',
  },
  {
    src: thiruvachiAsset('3 .jpg'),
    alt: 'Thiruvachi project image 3',
  },
];

const featuredProjects = [
  {
    title: 'Simavahanam',
    description: 'Swipe, use the arrows, or tap the dots to browse the numbered project images.',
    slides: simavahanamSlides,
  },
  {
    title: 'Kamalavahanam',
    description: 'Placed beside Simavahanam with its own numbered image sequence and layout.',
    slides: kamalavahanamSlides,
  },
  {
    title: 'Gajavahanam',
    description: 'Aligned in the same row so the three featured projects read left to right.',
    slides: gajavahanamSlides,
  },
  {
    title: 'Kilivahanam',
    description: 'Presented in the second row with its numbered image sequence preserved.',
    slides: kilivahanamSlides,
  },
  {
    title: 'Annavahanam',
    description: 'Presented in the second row with its numbered image sequence preserved.',
    slides: annavahanamSlides,
  },
  {
    title: 'Ambari',
    description: 'Presented in the second row with its numbered image sequence preserved.',
    slides: ambariSlides,
  },
];

const thiruvachiProject = {
  title: 'Thiruvachi',
  description: 'Centered below the featured projects with the AI image sequence preserved.',
  slides: thiruvachiSlides,
  mobileLazy: true,
};

function FeaturedProjectCard({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="mx-auto w-full max-w-none md:max-w-none xl:max-w-[440px]">
      <div className="text-center">
        <AnimatedText>
          <p className="text-[clamp(0.65rem,0.72vw,0.76rem)] uppercase tracking-[0.38em] text-luxury-gold">
            {String(activeIndex + 1).padStart(2, '0')} / {String(project.slides.length).padStart(2, '0')}
          </p>
          <h3 className="mt-5 font-serif text-[clamp(2.1rem,4.6vw,3.25rem)] leading-none tracking-wide text-stone-950 md:text-[clamp(2.4rem,3vw,3.4rem)]">
            {project.title}
          </h3>
        </AnimatedText>
      </div>

      <div className="mt-8">
        <AnimatedText direction="right">
          <div>
            <LuxuryImageCarousel
              slides={project.slides}
              title={project.title}
              onIndexChange={setActiveIndex}
              mobileLazy={project.mobileLazy}
            />
          </div>
        </AnimatedText>
      </div>
    </article>
  );
}

export default function FeaturedCollections() {
  return (
    <SectionWrapper id="featured-projects" className="bg-[#faf7f2] section-space-tight">
      <div className="section-shell">
        <div className="section-stack-lg w-full max-w-none xl:max-w-2xl">
          <AnimatedText>
            <p className="section-kicker">Featured Projects</p>
            <h2 className="mt-4 section-heading whitespace-nowrap">Icons of devotion, forged in gold.</h2>
              <p className="mt-6 section-copy">
                Explore signature creations that celebrate spiritual tradition through refined detailing, monumental scale, and exceptional craftsmanship.
              </p>
          </AnimatedText>
        </div>

        <div className="section-stack-xl grid gap-10 lg:grid-cols-3 lg:items-start">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="section-stack-xl flex justify-center">
          <FeaturedProjectCard project={thiruvachiProject} />
        </div>
      </div>
    </SectionWrapper>
  );
}
