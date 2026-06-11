import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function LeadModal({ open, onClose, mode = 'newsletter' }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    if (open) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-white/75 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg max-h-[calc(100vh-3rem)] overflow-y-auto rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8 shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">Private Access</p>
                <h3 className="mt-3 font-serif text-[clamp(2.1rem,5vw,3.25rem)] text-stone-950">
                  {mode === 'booking' ? 'Book a private appointment' : 'Join our newsletter'}
                </h3>
              </div>
              <button onClick={onClose} className="text-stone-400 transition hover:text-stone-950">
                ✕
              </button>
            </div>

            <p className="fluid-body mt-4">
              {mode === 'booking'
                ? 'Reserve a one-to-one consultation with our styling team for bridal, gifting, or bespoke sourcing.'
                : 'Receive first access to new collections, styling stories, and private client events.'}
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-[clamp(0.9rem,1.05vw,0.98rem)] text-stone-900 outline-none placeholder:text-stone-400 focus:border-luxury-gold/70"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-[clamp(0.9rem,1.05vw,0.98rem)] text-stone-900 outline-none placeholder:text-stone-400 focus:border-luxury-gold/70"
              />
              {mode === 'booking' && (
                <textarea
                  rows="4"
                  placeholder="Tell us about the occasion"
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-[clamp(0.9rem,1.05vw,0.98rem)] text-stone-900 outline-none placeholder:text-stone-400 focus:border-luxury-gold/70"
                />
              )}
              <button type="submit" className="luxury-button w-full">
                {mode === 'booking' ? 'Request Appointment' : 'Subscribe Now'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}