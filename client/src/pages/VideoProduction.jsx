import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { videoIds } from '../data/videoData.js';
import Parallax from 'react-parallax-tilt';

const categories = [
  { id: 'all', label: 'All Projects', icon: '🎬' },
  { id: 'commercial', label: 'Commercials', icon: '📺' },
  { id: 'music', label: 'Music Videos', icon: '🎵' },
  { id: 'corporate', label: 'Corporate', icon: '💼' },
  { id: 'documentary', label: 'Documentary', icon: '🎥' }
];

const featuredVideo = {
  id: 'featured',
  title: 'The Art of Cinematic Storytelling',
  desc: 'A behind-the-scenes look at our creative process and the passion that drives every frame we capture.',
  views: '2.5M',
  year: '2024'
};

function VideoProduction() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVideos = videoIds.filter((_, index) => 
    activeCategory === 'all' || index % 3 === 0
  );

  return (
    <>
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
            className="mb-16 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-gradient-to-r from-brand-gold/10 to-brand-purple/10 px-6 py-2 text-sm uppercase tracking-[0.35em] text-brand-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
              Video Production
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-brand-gold to-brand-purple bg-clip-text text-transparent leading-tight">
              Cinematic Excellence
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/70 leading-relaxed">
              Every frame tells a story. From concept to final cut, we create visual narratives that captivate, inspire, and leave lasting impressions.
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

          <motion.div layout className="mb-16 overflow-hidden rounded-3xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 via-brand-purple/10 to-brand-gold/10 p-1 backdrop-blur-xl">
            <div className="rounded-3xl bg-black/80 p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <span className="mb-4 inline-block rounded-full bg-brand-gold/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
                    Featured Project
                  </span>
                  <h2 className="mb-4 text-4xl font-bold text-white">
                    {featuredVideo.title}
                  </h2>
                  <p className="mb-6 text-lg text-white/80 leading-relaxed">
                    {featuredVideo.desc}
                  </p>
                  <div className="flex items-center gap-6 text-white/60">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      <span>{featuredVideo.views} Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                      <span>{featuredVideo.year}</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 shadow-2xl cursor-pointer"
                  onClick={() => setSelectedVideo(videoIds[0])}
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoIds[0]}/maxresdefault.jpg`}
                    alt="Featured"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold text-4xl text-black shadow-[0_0_40px_rgba(255,202,58,0.6)]"
                    >
                      ▶
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-2xl">🎬</span>
                    <h3 className="mt-2 text-2xl font-bold text-white">Watch Showreel</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredVideos.map((videoId, index) => (
                <Parallax
                  key={videoId}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  scale={1.02}
                  transitionSpeed={600}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(255,202,58,0.4)"
                    }}
                    className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black p-0 backdrop-blur-sm transition-all duration-500 hover:border-brand-gold/50"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={`Video ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-2xl text-black opacity-0 shadow-[0_0_30px_rgba(255,202,58,0.6)] transition-all duration-300 group-hover:opacity-100"
                        >
                          ▶
                        </motion.div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="inline-block rounded-full bg-brand-purple/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-purple backdrop-blur-sm">
                          Project {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand-gold">
                        Cinematic Production {index + 1}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 line-clamp-2">
                        Capturing moments that matter with cutting-edge technology and artistic vision.
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                        <span>4K HDR</span>
                        <span>•</span>
                        <span>2024</span>
                      </div>
                    </div>
                  </motion.div>
                </Parallax>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -right-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition-colors hover:bg-brand-gold hover:text-black"
              >
                ✕
              </button>
              
              <div className="overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="border-t border-white/10 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20 p-6">
                  <h3 className="text-2xl font-bold text-white">Playing: Cinematic Production</h3>
                  <p className="mt-2 text-white/70">Experience the art of visual storytelling through our lens.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default VideoProduction;
