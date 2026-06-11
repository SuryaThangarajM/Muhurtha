import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import LeadModal from './components/LeadModal';
import Hero from './sections/Hero';
import FeaturedCollections from './sections/FeaturedCollections';
import OurVision from './sections/OurVision';
import Milestone from './sections/Milestone';
import StorySplit from './sections/StorySplit';
import ProductShowcase from './sections/ProductShowcase';
import WhyUs from './sections/WhyUs';
import Testimonials from './sections/Testimonials';
import ContactUs from './sections/ContactUs';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('newsletter');

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    // auto newsletter modal disabled to avoid blocking content during preview
    // const modalTimer = window.setTimeout(() => {
    //   setModalMode('newsletter');
    //   setModalOpen(true);
    // }, 6000);

    return () => {
      window.clearTimeout(timer);
      // window.clearTimeout(modalTimer);
    };
  }, []);

  const openBooking = () => {
    setModalMode('booking');
    setModalOpen(true);
  };

  const openNewsletter = () => {
    setModalMode('newsletter');
    setModalOpen(true);
  };

  return (
    <>
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>

      {!loading && (
        <MotionConfig reducedMotion="user" transition={{ type: 'tween', ease: 'easeOut', duration: 0.6 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="w-full">
            <Navbar onOpenModal={openBooking} />
            <main className="w-full">
              <Hero onOpenModal={openBooking} />
                <Milestone />
                <OurVision />
                <StorySplit />
              <ProductShowcase />
              <FeaturedCollections />
              <WhyUs />
              <Testimonials />
              <ContactUs />
            </main>
            <Footer />
          </motion.div>
        </MotionConfig>
      )}

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} />
    </>
  );
}