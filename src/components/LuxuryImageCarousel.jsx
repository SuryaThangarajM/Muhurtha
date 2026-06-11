import { useEffect, useRef, useState } from 'react';
import Lightbox from './Lightbox';

const TRANSITION_DURATION = 500;
const DEFAULT_FRAME_COLOR = '#faf7f2';

export default function LuxuryImageCarousel({
  slides,
  title,
  initialIndex = 0,
  onIndexChange,
  frameColor = DEFAULT_FRAME_COLOR,
  mobileLazy = false,
}) {
  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [pendingIndex, setPendingIndex] = useState(null);
  const [direction, setDirection] = useState(1);
  const [phase, setPhase] = useState('idle');
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (pendingIndex === null) return;

    const frame = window.requestAnimationFrame(() => {
      setPhase('animate');
    });

    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex(pendingIndex);
      setPendingIndex(null);
      setPhase('idle');
    }, TRANSITION_DURATION);

    return () => {
      window.cancelAnimationFrame(frame);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [pendingIndex]);

  const goToSlide = (nextIndex) => {
    if (pendingIndex !== null || nextIndex === currentIndex) return;

    const forwardDistance = (nextIndex - currentIndex + totalSlides) % totalSlides;
    const nextDirection = forwardDistance <= totalSlides / 2 ? 1 : -1;

    setDirection(nextDirection);
    setPendingIndex(nextIndex);
    setPhase('start');
  };

  const goNext = () => {
    goToSlide((currentIndex + 1) % totalSlides);
  };

  const goPrev = () => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 48) return;

    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const currentSlide = slides[currentIndex];
  const activeSlide = pendingIndex === null ? null : slides[pendingIndex];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);

  useEffect(() => {
    if (typeof onIndexChange === 'function') {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]);

  const getSlideStyle = (role) => {
    const movingNext = direction === 1;
    const isCurrent = role === 'current';

    if (phase === 'idle') {
      return {
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        zIndex: 1,
      };
    }

    if (movingNext) {
      return isCurrent
        ? {
            transform:
              phase === 'start' ? 'translateX(0%) scale(1)' : 'translateX(-100%) scale(0.98)',
            opacity: phase === 'start' ? 1 : 0,
            zIndex: 2,
          }
        : {
            transform:
              phase === 'start' ? 'translateX(100%) scale(0.98)' : 'translateX(0%) scale(1)',
            opacity: phase === 'start' ? 0 : 1,
            zIndex: 3,
          };
    }

    return isCurrent
      ? {
          transform:
            phase === 'start' ? 'translateX(0%) scale(1)' : 'translateX(100%) scale(0.98)',
          opacity: phase === 'start' ? 1 : 0,
          zIndex: 2,
        }
      : {
          transform:
            phase === 'start' ? 'translateX(-100%) scale(0.98)' : 'translateX(0%) scale(1)',
          opacity: phase === 'start' ? 0 : 1,
          zIndex: 3,
        };
  };

  return (
    <div
      className="mx-auto w-full max-w-none sm:max-w-[560px] lg:max-w-[520px] select-none focus:outline-none focus-visible:outline-none"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          goPrev();
        }

        if (event.key === 'ArrowRight') {
          event.preventDefault();
          goNext();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label={`${title} image carousel`}
      aria-roledescription="carousel"
    >
      <div className="relative px-7 sm:px-9 lg:px-11">
        <button
          type="button"
          onClick={goPrev}
          aria-label={`Previous image for ${title}`}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-stone-200 bg-white/95 p-2 text-stone-700 shadow-[0_10px_25px_rgba(17,17,17,0.10)] transition-all duration-300 hover:-translate-y-1/2 hover:border-luxury-gold/50 hover:text-luxury-gold hover:shadow-[0_14px_30px_rgba(17,17,17,0.14)] focus:outline-none focus:ring-2 focus:ring-luxury-gold/40 sm:p-2.5"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label={`Next image for ${title}`}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-stone-200 bg-white/95 p-2 text-stone-700 shadow-[0_10px_25px_rgba(17,17,17,0.10)] transition-all duration-300 hover:-translate-y-1/2 hover:border-luxury-gold/50 hover:text-luxury-gold hover:shadow-[0_14px_30px_rgba(17,17,17,0.14)] focus:outline-none focus:ring-2 focus:ring-luxury-gold/40 sm:p-2.5"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className="relative mx-auto overflow-hidden w-full aspect-[4/5] md:aspect-[5/6]"
          style={{ backgroundColor: frameColor }}
        >

          {(pendingIndex === null ? [currentSlide] : [currentSlide, activeSlide]).map((slide, index) => {
            const role = pendingIndex === null || index === 0 ? 'current' : 'incoming';

            return (
              <div
                key={slide.src}
                className="absolute inset-0"
                style={{
                  ...getSlideStyle(role),
                  transition: `transform ${TRANSITION_DURATION}ms ease-in-out, opacity ${TRANSITION_DURATION}ms ease-in-out`,
                  willChange: 'transform, opacity',
                }}
              >
                <div className="relative h-full w-full cursor-zoom-in overflow-hidden" style={{ backgroundColor: frameColor }}>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: frameColor,
                      filter: 'blur(0px)',
                    }}
                  />
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading={role === 'current' ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`relative z-10 h-full w-full object-contain object-center mix-blend-multiply${
                      mobileLazy ? ' mobile-lazy' : ''
                    }`}
                    onClick={() => {
                      setLightboxSrc(slide.src);
                      setLightboxAlt(slide.alt || title);
                      setLightboxStartIndex(index === 0 && pendingIndex !== null ? pendingIndex : currentIndex + index);
                      setLightboxOpen(true);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${index + 1} for ${title}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold/40 ${
                index === currentIndex ? 'w-10 bg-luxury-gold' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
      <Lightbox
        src={lightboxSrc}
        alt={lightboxAlt}
        slides={slides}
        startIndex={lightboxStartIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}