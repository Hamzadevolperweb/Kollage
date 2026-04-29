import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const footerLinks = {
    studio: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Work', to: '/video-production' },
      { label: 'Services', to: '/social-media' },
      { label: 'Contact', to: '/contact' },
    ],
    services: [
      { label: 'Video Production', to: '/video-production' },
      { label: 'Graphic Design', to: '/graphic-design' },
      { label: 'Social Media', to: '/social-media' },
      { label: 'Brand Strategy', to: '/about' },
    ],
    social: [
      { name: 'Instagram', icon: '📷', handle: '@kollagestudio' },
      { name: 'LinkedIn', icon: '💼', handle: '/company/kollagestudio' },
      { name: 'YouTube', icon: '📺', handle: '@kollagestudio' },
      { name: 'Facebook', icon: '👥', handle: '/kollagestudio' },
    ]
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-purple/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4 inline-flex items-center gap-3"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border-2 border-brand-gold/40 bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 shadow-lg backdrop-blur-sm">
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-brand-gold">
                  K
                </span>
              </div>
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-2xl font-bold text-transparent">
                Kollage
              </span>
            </motion.div>
            <p className="mb-6 text-white/70 leading-relaxed">
              Award-winning creative studio crafting cinematic experiences and bold visual identities that inspire.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/60">
                Subscribe to our newsletter
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-brand-gold focus:bg-brand-gold/5"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-brand-gold px-4 py-1.5 text-sm font-bold text-black transition-colors hover:bg-brand-gold/80"
                >
                  →
                </motion.button>
              </div>
              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 text-sm text-brand-gold"
                  >
                    ✓ You're subscribed! Check your inbox.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Studio</h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.to}
                    className="text-white/70 transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.to}
                    className="text-white/70 transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition-all hover:border-brand-gold/50 hover:bg-brand-gold/10"
                >
                  <span className="text-xl">{social.icon}</span>
                  <div className="overflow-hidden">
                    <p className="text-xs text-white/60">{social.name}</p>
                    <p className="truncate text-sm font-semibold text-white group-hover:text-brand-gold">
                      {social.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span>Kollage Studio SMC Private Limited</span>
            <span className="hidden md:inline">•</span>
            <span>Nasim Nagar Road, Hyderabad, Pakistan</span>
            <span className="hidden md:inline">•</span>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="text-brand-gold hover:underline"
            >
              Contact Us
            </motion.a>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

