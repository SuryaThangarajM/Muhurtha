import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { navigation } from '../data';
import MuHurthaLogo from '../assets/MuHurthaLogo';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIdByLabel = {
    'Products and Services offered': 'our-products',
    'Why us?': 'why-us',
  };

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopLinks = navigation.map((item) => {
    const slug = sectionIdByLabel[item] || item
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    return {
      label: item,
      slug,
    };
  });

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const mobilePortalTarget = typeof document !== 'undefined' ? document.body : null;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-2xl bg-white"
    >
      <div>
        <div className="section-shell">
          <div className="hidden items-center py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8 xl:gap-4">
            <a
              href="mailto:muhurthadivineworks@gmail.com"
              className="fluid-nav flex min-w-0 items-center gap-2 justify-self-start text-stone-600 transition-colors hover:text-luxury-gold"
            >
              <svg className="h-5 w-5 flex-none text-luxury-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm9.06 5.662l.894.553a1 1 0 001.092 0l.894-.553m0 0l6.553-4.076a1 1 0 00-.894-1.79H4.553a1 1 0 00-.894 1.79l6.553 4.076zm0 0L3 8.9M21 8.9v7.1a2 2 0 01-2 2H5a2 2 0 01-2-2V8.9" />
              </svg>
              <span className="whitespace-nowrap">muhurthadivineworks@gmail.com</span>
            </a>

            <a href="#home" className="group flex items-center justify-self-center transition-transform duration-300 group-hover:scale-105">
              <MuHurthaLogo className="w-[240px] md:w-[210px] lg:w-[240px] xl:w-[320px]" />
            </a>

            <a
              href="tel:+919791333880"
              className="fluid-nav flex items-center justify-self-end gap-1 text-stone-600 transition-colors hover:text-luxury-gold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.79 1.13l.94 2.36a2 2 0 01-.45 2.23l-1.27 1.27a11.05 11.05 0 005.52 5.52l1.27-1.27a2 2 0 012.23-.45l2.36.94A2 2 0 0121 17.72V21a2 2 0 01-2 2A19 19 0 013 5z" />
              </svg>
              <span className="whitespace-nowrap">+91 9791333880</span>
            </a>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center py-4 md:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="group justify-self-start flex h-12 w-12 items-center justify-center bg-transparent text-stone-700 transition-all duration-300 hover:text-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/40 md:hidden"
            >
              <span className="flex h-4 w-5 flex-col justify-between">
                <span className="block h-0.5 w-full rounded-full bg-current" />
                <span className="block h-0.5 w-full rounded-full bg-current" />
                <span className="block h-0.5 w-full rounded-full bg-current" />
              </span>
            </button>
            <a href="#home" className="group flex items-center justify-self-center transition-transform duration-300 group-hover:scale-105">
              <MuHurthaLogo className="w-[198px] sm:w-[225px]" />
            </a>
            <div aria-hidden="true" />
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-stone-200 md:block">
        <div className="section-shell flex items-center justify-center py-2">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8 lg:gap-x-10 xl:gap-8">
            {desktopLinks.map((item) => (
              <a
                key={item.label}
                href={`#${item.slug}`}
                className="fluid-nav text-stone-600 font-medium uppercase tracking-[0.12em] transition-colors hover:text-luxury-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {mobilePortalTarget
        ? createPortal(
            <>
              <AnimatePresence>
                {mobileMenuOpen ? (
                  <>
                    <motion.button
                      type="button"
                      aria-label="Close navigation overlay"
                      onClick={closeMobileMenu}
                      className="fixed inset-0 z-[50] bg-black/55 backdrop-blur-[2px] md:hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    />

                    <motion.div
                      id="mobile-navigation-panel"
                      className="fixed left-0 top-0 z-[65] flex h-[100dvh] w-[82vw] max-w-[340px] flex-col overflow-hidden border-r border-stone-200 bg-white shadow-[0_24px_60px_rgba(17,17,17,0.18)] md:hidden"
                      initial={{ x: '-100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                    >
                      <div className="flex items-center justify-center border-b border-stone-200 bg-white px-5 py-4">
                        <div className="text-[0.95rem] font-medium uppercase tracking-[0.32em] text-luxury-gold">
                          Menu
                        </div>
                      </div>

                      <div className="flex-1 overflow-y-auto bg-white">
                        <div className="grid gap-2 px-4 py-4">
                          <a
                            href="mailto:muhurthadivineworks@gmail.com"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 text-stone-700 shadow-[0_8px_20px_rgba(17,17,17,0.03)] transition-colors hover:border-luxury-gold/30 hover:text-luxury-gold"
                          >
                            <svg className="h-5 w-5 flex-none text-luxury-gold" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm9.06 5.662l.894.553a1 1 0 001.092 0l.894-.553m0 0l6.553-4.076a1 1 0 00-.894-1.79H4.553a1 1 0 00-.894 1.79l6.553 4.076zm0 0L3 8.9M21 8.9v7.1a2 2 0 01-2 2H5a2 2 0 01-2-2V8.9" />
                            </svg>
                            <span className="min-w-0 break-all text-sm font-medium">muhurthadivineworks@gmail.com</span>
                          </a>

                          <a
                            href="tel:+919791333880"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-4 text-stone-700 shadow-[0_8px_20px_rgba(17,17,17,0.03)] transition-colors hover:border-luxury-gold/30 hover:text-luxury-gold"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.79 1.13l.94 2.36a2 2 0 01-.45 2.23l-1.27 1.27a11.05 11.05 0 005.52 5.52l1.27-1.27a2 2 0 012.23-.45l2.36.94A2 2 0 0121 17.72V21a2 2 0 01-2 2A19 19 0 013 5z" />
                            </svg>
                            <span className="whitespace-nowrap text-sm font-medium">+91 9791333880</span>
                          </a>
                        </div>

                        <div className="mt-2 grid gap-0 border-t border-stone-200 bg-white">
                          {desktopLinks.map((item) => (
                            <a
                              key={item.label}
                              href={`#${item.slug}`}
                              onClick={closeMobileMenu}
                              className="flex items-center justify-between border-b border-stone-200 px-5 py-4 text-[0.98rem] font-medium uppercase tracking-[0.06em] text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-950"
                            >
                              <span>{item.label}</span>
                              <span aria-hidden="true" className="text-xl leading-none text-stone-400">
                                ›
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={closeMobileMenu}
                        className="border-t border-stone-200 bg-luxury-gold px-4 py-4 text-center text-[0.78rem] font-medium uppercase tracking-[0.35em] text-white"
                      >
                        Close
                      </button>
                    </motion.div>
                  </>
                ) : null}
              </AnimatePresence>
            </>,
            mobilePortalTarget,
          )
        : null}
    </motion.header>
  );
}