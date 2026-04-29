import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Parallax from 'react-parallax-tilt';

const portfolioItems = [
  { id: 1, title: 'Aurora Brand Identity', category: 'branding', year: '2024', color: 'from-purple-500/20 to-blue-500/20' },
  { id: 2, title: 'Nexus Tech Rebrand', category: 'branding', year: '2024', color: 'from-brand-gold/20 to-brand-purple/20' },
  { id: 3, title: 'Urban Streetwear', category: 'packaging', year: '2023', color: 'from-pink-500/20 to-yellow-500/20' },
  { id: 4, title: 'EcoLife Campaign', category: 'campaign', year: '2023', color: 'from-green-400/20 to-blue-500/20' },
  { id: 5, title: 'Luxe Cosmetics', category: 'packaging', year: '2024', color: 'from-rose-400/20 to-purple-500/20' },
  { id: 6, title: 'TechVentures UI', category: 'digital', year: '2023', color: 'from-cyan-400/20 to-indigo-500/20' },
  { id: 7, title: 'FoodChain Logo', category: 'branding', year: '2024', color: 'from-orange-400/20 to-red-400/20' },
  { id: 8, title: 'MusicFest Poster', category: 'campaign', year: '2023', color: 'from-pink-500/20 to-indigo-500/20' },
  { id: 9, title: 'Wellness App', category: 'digital', year: '2024', color: 'from-emerald-400/20 to-teal-500/20' }
];

const categories = [
  { id: 'all', label: 'All Work', icon: '🎨' },
  { id: 'branding', label: 'Branding', icon: '🏷️' },
  { id: 'digital', label: 'Digital', icon: '💻' },
  { id: 'campaign', label: 'Campaigns', icon: '📢' },
  { id: 'packaging', label: 'Packaging', icon: '📦' }
];

function GraphicDesign() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] px-6 py-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-[120px]" />
          <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-brand-gold/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 to-brand-purple/10 px-6 py-2 text-sm uppercase tracking-[0.35em] text-brand-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
              Graphic Design
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-brand-gold to-brand-purple bg-clip-text text-transparent leading-tight">
              Bold Visual Systems
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/70 leading-relaxed">
              Every pixel matters. We craft stunning visual identities and design systems that make brands unforgettable and drive meaningful connections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12 flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'border-brand-gold bg-brand-gold/20 text-brand-gold shadow-[0_0_30px_rgba(255,202,58,0.3)]'
                    : 'border-white/20 bg-white/5 text-white/70 hover:border-brand-purple/50 hover:bg-brand-purple/10'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredItems.map((project, index) => (
                <Parallax
                  key={project.id}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.03}
                  transitionSpeed={800}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(123, 58, 255, 0.4)"
                    }}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-black p-0 backdrop-blur-xl transition-all duration-500 hover:border-brand-gold/50"
                  >
                    <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${project.color}`}>
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-0" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white/10 text-6xl text-white/80 shadow-2xl backdrop-blur-sm border border-white/20"
                        >
                          🎨
                        </motion.div>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-black/50 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <span className="mb-2 inline-block rounded-full bg-brand-purple/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-purple">
                        {project.category}
                      </span>
                      <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-brand-gold">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        A comprehensive design project showcasing our creative expertise and attention to detail.
                      </p>
                    </div>
                  </motion.div>
                </Parallax>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full overflow-hidden rounded-3xl border border-brand-gold/30 bg-gradient-to-br from-brand-purple/20 to-brand-gold/20 p-1 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -right-10 -top-10 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition-colors hover:bg-brand-gold hover:text-black"
              >
                ✕
              </button>

              <div className="rounded-3xl bg-black/90 p-8 md:p-12">
                <div className={`mb-8 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br ${selectedProject.color}`}>
                  <div className="flex h-full items-center justify-center text-9xl">
                    🎨
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <span className="mb-3 inline-block rounded-full bg-brand-gold/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl">
                      This project showcases our expertise in creating compelling visual identities that resonate with target audiences and drive brand recognition.
                    </p>
                  </div>
                  
                  <div className="shrink-0 space-y-4 text-right">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-3">
                      <p className="text-sm text-white/60">Year</p>
                      <p className="text-xl font-bold text-white">{selectedProject.year}</p>
                    </div>
                    <div className="rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-6 py-3">
                      <p className="text-sm text-white/60">Category</p>
                      <p className="text-xl font-bold text-brand-gold capitalize">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="rounded-full border border-brand-gold bg-brand-gold/10 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-gold hover:text-black">
                    View Full Case Study
                  </button>
                  <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
                    Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GraphicDesign;
