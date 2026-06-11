import { useEffect, useState } from 'react';

export default function Lightbox({ src, alt, open, onClose, slides, startIndex }) {
  const [displaySrc, setDisplaySrc] = useState(src);
  const [displayAlt, setDisplayAlt] = useState(alt);
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!open) return;

    setDisplaySrc(src);
    setDisplayAlt(alt);

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    // If slides were provided by the carousel, use them deterministically.
    if (Array.isArray(slides) && slides.length > 0) {
      const imgs = slides.map((s) => ({ src: s.src, alt: s.alt || '' }));
      setCarouselImages(imgs);
      const idx = typeof startIndex === 'number' ? startIndex : imgs.findIndex((i) => i.src === src || (src && i.src && i.src.endsWith(src.split('/').pop())));
      setCurrentIndex(idx === -1 ? 0 : idx);
    } else {
      // Collect carousel images only from the same carousel container as the clicked image.
      const allImgs = Array.from(document.querySelectorAll('img.cursor-zoom-in'));

      // find the anchor image element that matches the provided src
      const anchor = allImgs.find((img) => {
        const imgSrc = img.getAttribute('src') || img.src;
        if (!imgSrc || !src) return false;
        if (imgSrc === src) return true;
        const file = src.split('/').pop();
        return imgSrc.endsWith(file);
      });

      let imgs = [];
      if (anchor) {
        // walk up the DOM to find the smallest parent that contains carousel images
        let p = anchor.parentElement;
        while (p && p !== document.body) {
          const group = Array.from(p.querySelectorAll('img.cursor-zoom-in'));
          if (group.length > 0) {
            imgs = group.map((img) => ({ src: img.getAttribute('src') || img.src, alt: img.getAttribute('alt') || '' }));
            break;
          }
          p = p.parentElement;
        }
      }

      // fallback to all images on the page if no scoped group found
      if (imgs.length === 0) {
        imgs = allImgs.map((img) => ({ src: img.getAttribute('src') || img.src, alt: img.getAttribute('alt') || '' }));
      }

      setCarouselImages(imgs);

      // determine current index based on the provided src
      const idx = imgs.findIndex((i) => i.src === src || (src && i.src && i.src.endsWith(src.split('/').pop())));
      setCurrentIndex(idx === -1 ? 0 : idx);
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, src, alt]);

  useEffect(() => {
    setDisplaySrc(src);
    setDisplayAlt(alt);
  }, [src, alt]);

  useEffect(() => {
    if (carouselImages.length === 0) return;
    const clamped = ((currentIndex % carouselImages.length) + carouselImages.length) % carouselImages.length;
    const item = carouselImages[clamped];
    if (item) {
      setDisplaySrc(item.src);
      setDisplayAlt(item.alt || displayAlt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  if (!open) return null;

  const goPrev = () => {
    if (carouselImages.length <= 1) return;
    setCurrentIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length);
  };

  const goNext = () => {
    if (carouselImages.length <= 1) return;
    setCurrentIndex((i) => (i + 1) % carouselImages.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close image"
        onClick={onClose}
        className="absolute top-4 right-4 z-60 rounded-full bg-white/90 p-2 shadow-md sm:top-6 sm:right-6"
      >
        ×
      </button>

      {/* left arrow */}
      {carouselImages.length > 1 && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-3 top-1/2 z-60 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md sm:left-6 sm:p-3"
        >
          <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <img
        src={displaySrc}
        alt={displayAlt}
        onClick={(e) => e.stopPropagation()}
          className="max-h-[82vh] max-w-[92vw] object-contain sm:max-h-[88vh] sm:max-w-[96vw]"
      />

      {/* right arrow */}
      {carouselImages.length > 1 && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-3 top-1/2 z-60 -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-md sm:right-6 sm:p-3"
        >
          <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
