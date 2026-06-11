// Enable mobile-only lazy loading for images marked with the `mobile-lazy` class.
// This keeps images eager on desktop (no clarity drop) while deferring them on small viewports.

export default function initMobileLazy() {
  try {
    const mq = window.matchMedia('(max-width: 640px)');

    function applyLazy() {
      if (!mq.matches) return; // only apply on mobile

      const imgs = document.querySelectorAll('img.mobile-lazy');
      imgs.forEach((img) => {
        // don't override if already explicitly set
        if (!img.hasAttribute('loading') || img.getAttribute('loading') !== 'lazy') {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      });
    }

    // Apply on load and also when the media query matches (e.g., orientation change)
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      applyLazy();
    } else {
      window.addEventListener('DOMContentLoaded', applyLazy, { once: true });
    }

    mq.addEventListener?.('change', (e) => {
      if (e.matches) applyLazy();
    });
  } catch (e) {
    // best-effort; silently ignore
    // console.debug('mobileLazy init failed', e);
  }
}
