import { motion } from 'framer-motion';
import Parallax from 'react-parallax-tilt';

const platforms = [
  { 
    name: 'Instagram', 
    icon: '📷', 
    color: 'from-purple-500/20 to-pink-500/20',
    stats: { followers: '150K+', engagement: '4.2%' },
    services: ['Reels Production', 'Story Campaigns', 'Influencer Collabs', 'Instagram Ads']
  },
  { 
    name: 'TikTok', 
    icon: '🎵', 
    color: 'from-cyan-400/20 to-pink-500/20',
    stats: { followers: '200K+', engagement: '8.7%' },
    services: ['Viral Content', 'Hashtag Strategy', 'TikTok Ads', 'Creator Partnerships']
  },
  { 
    name: 'YouTube', 
    icon: '📺', 
    color: 'from-red-500/20 to-orange-500/20',
    stats: { subscribers: '85K+', watchTime: '1.2M hrs' },
    services: ['Long-form Content', 'Shorts Production', 'YouTube Ads', 'Channel Growth']
  },
  { 
    name: 'Facebook', 
    icon: '👥', 
    color: 'from-blue-600/20 to-indigo-500/20',
    stats: { likes: '250K+', reach: '5M/mo' },
    services: ['Page Management', 'Ad Campaigns', 'Community Building', 'Live Streams']
  }
];

const services = [
  { icon: '📱', title: 'Content Creation', desc: 'High-quality, platform-optimized content that resonates with your audience.', deliverables: '20+ posts/week' },
  { icon: '📊', title: 'Strategy & Analytics', desc: 'Data-driven strategies and detailed performance insights.', deliverables: 'Weekly reports' },
  { icon: '💬', title: 'Community Management', desc: '24/7 engagement and authentic audience interactions.', deliverables: 'Real-time response' },
  { icon: '🎯', title: 'Paid Advertising', desc: 'Targeted ad campaigns that maximize ROI and reach.', deliverables: 'Custom funnels' }
];

const metrics = [
  { value: '300%', label: 'Avg. Engagement Increase', icon: '📈' },
  { value: '2M+', label: 'Monthly Reach', icon: '🌍' },
  { value: '500+', label: 'Campaigns Delivered', icon: '🚀' },
  { value: '$5M+', label: 'Ad Spend Managed', icon: '💰' }
];

function SocialMedia() {
  return (

      <section className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] px-6 py-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-purple/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
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
              Social Media Marketing
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-brand-gold to-brand-purple bg-clip-text text-transparent leading-tight">
              Dominate Every Platform
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/70 leading-relaxed">
              Strategic campaigns that turn audiences into brand advocates across Instagram, TikTok, YouTube, Facebook, and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="mb-10 text-center text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-purple bg-clip-text text-transparent">
              Platform Expertise
            </h2>
            
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {platforms.map((platform, index) => (
                <Parallax
                  key={platform.name}
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  scale={1.03}
                  transitionSpeed={800}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px -10px rgba(255,202,58,0.3)"
                    }}
                    className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-0 backdrop-blur-xl transition-all duration-500 hover:border-brand-gold/50"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50`} />
                    
                    <div className="relative z-10 p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-purple/20 text-3xl shadow-lg backdrop-blur-sm border border-white/10"
                        >
                          {platform.icon}
                        </motion.div>
                        <span className="text-2xl">→</span>
                      </div>
                      
                      <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">
                        {platform.name}
                      </h3>
                      
                      <div className="mb-6 grid grid-cols-2 gap-3">
                        {Object.entries(platform.stats).map(([key, value]) => (
                          <div key={key} className="rounded-xl bg-white/5 p-3 backdrop-blur-sm">
                            <p className="text-xs uppercase text-white/60">{key}</p>
                            <p className="text-lg font-bold text-brand-gold">{value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-white/10 pt-4">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">Services</p>
                        <ul className="space-y-2">
                          {platform.services.map((service, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                              <span className="h-1 w-1 rounded-full bg-brand-gold" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </Parallax>
              ))}
            </div>
          </motion.div>

          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-16 text-center"
            >
              <span className="text-brand-gold uppercase tracking-[0.35em] text-sm font-semibold">What We Offer</span>
              <h2 className="mt-4 text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-brand-purple to-brand-gold bg-clip-text text-transparent">
                Comprehensive Services
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Parallax
                  key={index}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={600}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-xl transition-all duration-500 hover:border-brand-gold/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-purple/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-50" />
                    
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 text-2xl shadow-lg backdrop-blur-sm border border-white/10"
                      >
                        {service.icon}
                      </motion.div>
                      
                      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-white/70 leading-relaxed">
                        {service.desc}
                      </p>
                      <p className="text-sm font-semibold text-brand-gold">
                        {service.deliverables}
                      </p>
                    </div>
                  </motion.div>
                </Parallax>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-16 text-center"
            >
              <span className="text-brand-gold uppercase tracking-[0.35em] text-sm font-semibold">Our Results</span>
              <h2 className="mt-4 text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-brand-gold bg-clip-text text-transparent">
                Impact Metrics
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-brand-gold/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-purple/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-50" />
                  
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, type: "spring" }}
                      className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-gold/30 bg-brand-gold/10 text-3xl shadow-lg"
                    >
                      {metric.icon}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-5xl font-bold text-brand-gold"
                    >
                      {metric.value}
                    </motion.p>
                    <p className="mt-2 text-white/70">{metric.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 via-brand-purple/10 to-brand-gold/10 p-2 backdrop-blur-xl"
          >
            <div className="rounded-3xl bg-black/80 p-8 md:p-12 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">
                Ready to Amplify Your Social Presence?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
                Let's build a social media strategy that converts scrollers into loyal customers.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-block rounded-full border-2 border-brand-gold bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 px-12 py-5 text-lg font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-brand-gold hover:text-black shadow-[0_0_40px_rgba(255,202,58,0.4)]"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

  );
}

export default SocialMedia;
