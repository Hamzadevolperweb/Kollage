import { Suspense, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroCanvas from '../components/3d/HeroCanvas.jsx';
import Parallax from 'react-parallax-tilt';

const services = [
  {
    icon: '🎬',
    title: 'Cinematic Production',
    desc: 'High-end video production with cutting-edge equipment and expert cinematography.',
    link: '/video-production'
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Bold visual identities and stunning graphics that make brands unforgettable.',
    link: '/graphic-design'
  },
  {
    icon: '📱',
    title: 'Social Media',
    desc: 'Strategic campaigns that drive engagement and grow your audience.',
    link: '/social-media'
  }
];

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '50+', label: 'Global Clients' },
  { number: '15+', label: 'Industry Awards' },
  { number: '99%', label: 'Client Satisfaction' }
];

const testimonials = [
  { name: 'Sarah Chen', role: 'Marketing Director', company: 'TechVentures', text: 'Kollage transformed our brand presence. Their cinematic approach is unmatched.' },
  { name: 'Ahmed Raza', role: 'CEO', company: 'RetailPro', text: 'The video campaigns they produced increased our engagement by 300%.' },
  { name: 'Lisa Wong', role: 'Brand Manager', company: 'Luxe Cosmetics', text: 'Incredible attention to detail. They bring creative visions to life.' }
];

function Home() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex items-center justify-center min-h-screen px-6"
        >
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 via-brand-purple/10 to-brand-gold/10 px-6 py-3 text-sm uppercase tracking-[0.35em] text-brand-gold shadow-[0_0_40px_rgba(255,202,58,0.2)] backdrop-blur-sm"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
                Award-Winning Creative Studio
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="max-w-5xl mx-auto text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-brand-gold bg-clip-text text-transparent">
                We Create.
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-gold via-brand-purple to-brand-gold bg-clip-text text-transparent">
                We Design.
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent">
                We Inspire.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mx-auto mt-8 max-w-2xl"
            >
              <div className="text-2xl sm:text-3xl text-white/90 font-light">
                <TypeAnimation
                  sequence={[
                    '🎬 Cinematic Video Production',
                    2000,
                    '🎨 Bold Graphic Design',
                    2000,
                    '📱 Social Media Mastery',
                    2000,
                    '✨ Brand Storytelling',
                    2000
                  ]}
                  speed={40}
                  repeat={Infinity}
                  wrapper="span"
                  className="drop-shadow-[0_0_20px_rgba(255,202,58,0.5)]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mx-auto mt-12 flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(123, 58, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                href="/video-production"
                className="group relative overflow-hidden rounded-full border-2 border-brand-purple bg-gradient-to-r from-brand-purple/20 to-brand-purple/5 px-10 py-5 text-base font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-brand-gold hover:from-brand-gold/20 hover:to-brand-gold/5 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">🎬</span>
                  View Our Work
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-purple opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,202,58,0.5)" }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="group relative overflow-hidden rounded-full border-2 border-brand-gold bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 px-10 py-5 text-base font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-brand-purple hover:from-brand-purple/20 hover:to-brand-purple/5 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xl">💼</span>
                  Start Your Project
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-gold via-brand-purple to-brand-gold opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
            <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
  );
}

export default Home;
