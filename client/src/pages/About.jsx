import { motion, useScroll, useTransform } from 'framer-motion';
import Parallax from 'react-parallax-tilt';

const milestones = [
  { year: '2010', event: 'Kollage Studio founded with a vision to redefine creative storytelling.' },
  { year: '2013', event: 'Expanded into video production, delivering first feature film campaign.' },
  { year: '2017', event: 'Launched graphic design division, winning multiple international awards.' },
  { year: '2020', event: 'Digital transformation - pioneered virtual production techniques.' },
  { year: '2024', event: 'Celebrating 500+ projects and 50+ global clients.' }
];

const values = [
  { icon: '💡', title: 'Innovation', desc: 'Pushing creative boundaries with cutting-edge technology.' },
  { icon: '🎯', title: 'Precision', desc: 'Meticulous attention to every frame, pixel, and detail.' },
  { icon: '🤝', title: 'Partnership', desc: 'Collaborative approach ensuring your vision leads.' },
  { icon: '⭐', title: 'Excellence', desc: 'Award-winning work that sets industry standards.' }
];

function About() {
  const { scrollY } = useScroll();
  const timelineY = useTransform(scrollY, [0, 1000], [100, -100]);

  return (

      <section className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-[120px]" />
          <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-24 text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 to-brand-purple/10 px-6 py-2 text-sm uppercase tracking-[0.35em] text-brand-gold"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-brand-purple bg-clip-text text-transparent">
                Crafting Visual
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-gold via-white to-brand-gold bg-clip-text text-transparent">
                Stories Since 2010
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-8 max-w-3xl text-xl text-white/70 leading-relaxed"
            >
              Kollage Studio is a creative powerhouse where cinematic storytelling meets bold design. 
              We transform ideas into unforgettable visual experiences that resonate with audiences worldwide.
            </motion.p>
          </div>

          <div className="mb-32 grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-gold/20 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-gold/30 opacity-50 blur-3xl" />
                
                <div className="relative space-y-8">
                  <div>
                    <h3 className="mb-4 text-3xl font-bold text-white">Our Vision</h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      To inspire every brand with cinematic identity, bold design, and culture-driving campaigns that leave a lasting impact.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-4 text-3xl font-bold text-white">Our Mission</h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      Deliver premium creative solutions that connect audiences, amplify digital presence, and drive measurable results.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-4 text-3xl font-bold text-white">Our Philosophy</h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      Idea, craft, and motion are perfectly aligned to build emotional, memorable brand experiences that tell compelling stories.
                    </p>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-purple/30 blur-2xl opacity-60"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <h3 className="mb-8 text-center text-4xl font-bold bg-gradient-to-r from-brand-gold to-brand-purple bg-clip-text text-transparent">
                Our Journey
              </h3>
              
              <div className="relative">
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-gold via-brand-purple to-brand-gold opacity-30" />
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative max-w-md rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-brand-gold/50 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                    >
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border-4 border-[#0a0a0a] bg-brand-gold px-3 py-1 text-sm font-bold text-black">
                        {milestone.year}
                      </span>
                      <p className="text-white/90">{milestone.event}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-16 text-center"
            >
              <span className="text-brand-gold uppercase tracking-[0.35em] text-sm font-semibold">What Drives Us</span>
              <h2 className="mt-4 text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-brand-purple to-brand-gold bg-clip-text text-transparent">
                Core Values
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Parallax
                  key={index}
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
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-brand-gold/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-purple/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-50" />
                    
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 text-4xl shadow-lg backdrop-blur-sm border border-white/10"
                      >
                        {value.icon}
                      </motion.div>
                      
                      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                </Parallax>
              ))}
            </div>
          </div>

          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-16 text-center"
            >
              <span className="text-brand-gold uppercase tracking-[0.35em] text-sm font-semibold">The People</span>
              <h2 className="mt-4 text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-brand-gold bg-clip-text text-transparent">
                Meet The Team
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
                A passionate creative team with deep expertise across production, design, and digital marketing.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                { name: 'Tariq Abro', role: 'CEO & Founder', exp: '20+ years', img: '👨‍💼' },
                { name: 'Babar Jhatial', role: 'Art Director', exp: '3 years', img: '🎨' },
                { name: 'Rizwan Ali', role: 'Production Director', exp: '9 years', img: '🎬' },
                { name: 'Jan Ali', role: 'DOP / Media Coordinator', exp: '5 years', img: '📹' },
                { name: 'Aiman Khan', role: 'PR & Marketing Manager', exp: '3 years', img: '📢' },
                { name: 'Abdallah Bhatti', role: 'HR Manager', exp: '10+ years', img: '👥' },
                { name: 'Wasim Ahmed', role: 'Office Assistant', exp: 'Support', img: '📋' },
              ].map((member, index) => (
                <Parallax
                  key={member.name}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.02}
                  transitionSpeed={600}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px -15px rgba(123, 58, 255, 0.4)"
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:border-brand-purple/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-gold/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple/30 to-brand-gold/30 text-5xl shadow-lg border-2 border-white/10 backdrop-blur-sm"
                      >
                        {member.img}
                      </motion.div>
                      
                      <div className="mb-2">
                        <span className="inline-block rounded-full bg-brand-purple/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-purple">
                          {member.role}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/60">
                        {member.exp} experience
                      </p>
                    </div>
                  </motion.div>
                </Parallax>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

  );
}

export default About;
