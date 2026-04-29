import { useState } from 'react';
import { videoIds } from '../data/videoData.js';

function VideoProduction() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Video Production</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Cinematic work that tells your story.</h1>
          <p className="mt-4 max-w-2xl text-white/70">Browse the latest films, TV promos, and branded video campaigns from Kollage Studio.</p>
        </header>

        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -right-10 top-0 text-2xl text-white hover:text-brand-gold"
              >
                ✕
              </button>
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videoIds.map((videoId, index) => (
            <button
              key={videoId}
              onClick={() => setSelectedVideo(videoId)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-0 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={`Video ${index + 1}`}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold text-2xl text-black transition group-hover:scale-110">
                    ▶
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">Video {index + 1}</h2>
                <p className="text-sm text-white/70">Click to play</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoProduction;
