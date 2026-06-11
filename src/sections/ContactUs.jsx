import SectionWrapper from '../components/SectionWrapper';
import AnimatedText from '../components/AnimatedText';

export default function ContactUs() {
  return (
    <SectionWrapper id="contact-us" className="bg-white section-space-tight">
      <div className="section-shell">
        <div className="w-full max-w-none xl:max-w-4xl text-left">
          <AnimatedText>
            <p className="section-kicker">CONTACT INFORMATION</p>
            {/* underline removed per request */}

            <p className="mt-6 section-copy">
              We are open Monday to Saturday - 10 am to 7 pm
            </p>
          </AnimatedText>

          <div className="section-stack-lg grid gap-8 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex items-center gap-3">
                <p className="section-copy uppercase tracking-[0.28em] text-luxury-gold">MAIL</p>
                <span className="section-copy text-stone-900">:</span>
                  <a href="mailto:muhurthadivineworks@gmail.com" className="section-copy ml-2 no-underline">muhurthadivineworks@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.79 1.13l.94 2.36a2 2 0 01-.45 2.23l-1.27 1.27a11.05 11.05 0 005.52 5.52l1.27-1.27a2 2 0 012.23-.45l2.36.94A2 2 0 0121 17.72V21a2 2 0 01-2 2A19 19 0 013 5z" />
              </svg>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <p className="section-copy uppercase tracking-[0.28em] text-luxury-gold">CALL</p>
                <span className="section-copy text-stone-900">:</span>
                  <a href="tel:+919791333880" className="section-copy ml-2 no-underline">+91 9791333880</a>
              </div>
            </div>

            <div className="md:col-span-2">
              <AnimatedText>
                <p className="text-[clamp(0.78rem,0.95vw,0.9rem)] uppercase tracking-[0.24em] text-luxury-gold">OFFICE</p>
                <p className="mt-2 section-copy text-left">
                  Fortune Suites, 1st Floor, 134-135, East Periyasamy Road, R.S Puram,
                  <br />
                  Coimbatore-641002, Tamil Nadu, India
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
