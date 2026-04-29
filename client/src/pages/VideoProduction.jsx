function VideoProduction() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Video Production</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Cinematic work that tells your story.</h1>
          <p className="mt-4 max-w-2xl text-white/70">Browse the latest films, TV promos, and branded video campaigns from Kollage Studio.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-4 transition hover:-translate-y-1 hover:shadow-glow">
              <div className="aspect-[16/9] rounded-3xl bg-white/5" />
              <div className="mt-4 space-y-2 text-white/80">
                <h2 className="text-xl font-semibold text-white">Video Title {index + 1}</h2>
                <p className="text-sm">Lightbox playback and rich cinematic preview.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoProduction;
