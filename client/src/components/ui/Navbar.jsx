import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Video Prod.', to: '/video-production' },
  { label: 'Graphic Design', to: '/graphic-design' },
  { label: 'Social Media', to: '/social-media' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-brand-gold/20 bg-black/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'border-b border-transparent bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink 
            to="/" 
            className="group flex items-center gap-3 font-bold text-xl tracking-tight"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative h-12 w-12 overflow-hidden rounded-2xl border-2 border-brand-gold/40 bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 shadow-lg backdrop-blur-sm"
            >
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-brand-gold">
                K
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-purple opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70" />
            </motion.div>
            <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent">
              Kollage Studio
            </span>
          </NavLink>
        </motion.div>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 rounded-xl ${
                  isActive
                    ? 'text-brand-gold bg-brand-gold/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-gold/20 to-brand-purple/20 border border-brand-gold/30"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white lg:hidden backdrop-blur-sm"
        >
          <div className="relative h-5 w-6">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="absolute left-0 top-0 block h-0.5 w-6 bg-white transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute left-0 top-2 block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 4 }}
              className="absolute left-0 top-4 block h-0.5 w-6 bg-white transition-all"
            />
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 p-6">
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    className={`block rounded-xl px-6 py-4 text-base font-semibold uppercase tracking-wider transition-all ${
                      activeLink === link.to
                        ? 'bg-brand-gold/20 text-brand-gold'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
