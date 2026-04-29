import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContact } from '../utils/api.js';
import Parallax from 'react-parallax-tilt';

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '0333-1306137', color: 'from-brand-gold/20 to-brand-purple/20' },
  { icon: '✉️', label: 'Email', value: 'info@kollagestudio.com', color: 'from-brand-purple/20 to-brand-gold/20' },
  { icon: '📍', label: 'Location', value: 'Nasim Nagar Road, Hyderabad, Pakistan', color: 'from-brand-gold/20 to-brand-purple/20' },
  { icon: '🕐', label: 'Hours', value: 'Mon - Fri: 9AM - 7PM', color: 'from-brand-purple/20 to-brand-gold/20' }
];

const socialLinks = [
  { name: 'Instagram', icon: '📷', handle: '@kollagestudio' },
  { name: 'LinkedIn', icon: '💼', handle: '/company/kollagestudio' },
  { name: 'YouTube', icon: '📺', handle: '@kollagestudio' },
  { name: 'Facebook', icon: '👥', handle: '/kollagestudio' }
];

function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '',
    budget: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await submitContact(formData);
      if (response.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', budget: '' });
        setTimeout(() => setSubmitted(false), 6000);
      }
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (

      <section className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] px-6 py-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-purple/10 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 to-brand-purple/10 px-6 py-2 text-sm uppercase tracking-[0.35em] text-brand-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
              Get In Touch
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-brand-gold to-brand-purple bg-clip-text text-transparent leading-tight">
              Let's Create Together
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/70 leading-relaxed">
              Have a project in mind? We'd love to hear your ideas. Send us a message and let's bring your vision to life with cinematic excellence.
            </p>
          </motion.div>

          <div className="mb-20 grid gap-8 lg:grid-cols-3">
            {contactInfo.map((info, index) => (
              <Parallax
                key={info.label}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={600}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-6 backdrop-blur-xl transition-all duration-500 hover:border-brand-gold/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 text-3xl shadow-lg backdrop-blur-sm border border-white/10"
                    >
                      {info.icon}
                    </motion.div>
                    <p className="mb-2 text-sm uppercase tracking-wider text-white/60">{info.label}</p>
                    <p className="text-lg font-semibold text-white">{info.value}</p>
                  </div>
                </motion.div>
              </Parallax>
            ))}
          </div>

          <div className="mb-20 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="mb-8 text-4xl font-bold bg-gradient-to-r from-white to-brand-gold bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 rounded-2xl border border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 to-brand-purple/10 p-4 text-brand-gold shadow-lg"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Message sent! We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-400"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{error}</span>
                  </motion.div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div
                    animate={{ 
                      scale: focusedField === 'name' ? 1.02 : 1,
                      boxShadow: focusedField === 'name' ? "0 0 30px rgba(255,202,58,0.3)" : "none"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full rounded-2xl border-2 border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all focus:border-brand-gold focus:bg-brand-gold/5"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    animate={{ 
                      scale: focusedField === 'email' ? 1.02 : 1,
                      boxShadow: focusedField === 'email' ? "0 0 30px rgba(255,202,58,0.3)" : "none"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full rounded-2xl border-2 border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all focus:border-brand-gold focus:bg-brand-gold/5"
                      placeholder="you@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  animate={{ 
                    scale: focusedField === 'subject' ? 1.02 : 1,
                    boxShadow: focusedField === 'subject' ? "0 0 30px rgba(255,202,58,0.3)" : "none"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">
                    Subject *
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full rounded-2xl border-2 border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all focus:border-brand-gold focus:bg-brand-gold/5"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.div
                  animate={{ 
                    scale: focusedField === 'message' ? 1.02 : 1,
                    boxShadow: focusedField === 'message' ? "0 0 30px rgba(255,202,58,0.3)" : "none"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    className="w-full rounded-2xl border-2 border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all focus:border-brand-gold focus:bg-brand-gold/5"
                    placeholder="Describe your vision, goals, timeline, and budget range..."
                  />
                </motion.div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-2 border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition-all focus:border-brand-gold focus:bg-brand-gold/5"
                  >
                    <option value="" className="bg-black">Select budget range</option>
                    <option value="5k-10k" className="bg-black">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-black">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-black">$25,000 - $50,000</option>
                    <option value="50k+" className="bg-black">$50,000+</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-full border-2 border-brand-purple bg-gradient-to-r from-brand-purple/20 to-brand-purple/5 px-10 py-5 text-base font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-brand-gold hover:from-brand-gold/20 hover:to-brand-gold/5 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>📤</span>
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-purple via-brand-gold to-brand-purple opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-8 backdrop-blur-xl">
                <h2 className="mb-6 text-3xl font-bold text-white">Why Choose Kollage?</h2>
                <div className="space-y-6">
                  {[
                    'Award-winning creative team',
                    'End-to-end project management',
                    'Cutting-edge technology',
                    '24/7 client support',
                    'On-time delivery guarantee',
                    'Transparent pricing'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm text-black">✓</span>
                      <span className="text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 via-brand-purple/10 to-brand-gold/10 p-8 backdrop-blur-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">Connect With Us</h3>
                <p className="mb-6 text-white/80">Follow us for daily inspiration and behind-the-scenes content.</p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.03, x: 5 }}
                      href="#"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-3 transition-colors hover:border-brand-gold/50"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div className="text-left">
                        <p className="text-sm text-white/60">{social.name}</p>
                        <p className="text-sm font-semibold text-white">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                <p className="mb-2 text-center text-sm uppercase tracking-wider text-white/60">Office Location</p>
                <p className="text-center text-white/90">
                  H. No. 01, Beside Street Old Sonahri Book Land,<br />
                  Nasim Nagar Road, 71000 Pakistan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  );
}

export default Contact;
