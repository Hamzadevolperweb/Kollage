function GraphicDesign() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Graphic Design</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Bold branding and visual systems.</h1>
          <p className="mt-4 max-w-2xl text-white/70">A portfolio of creative design work for digital, print, and brand identity projects.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-4 transition hover:-translate-y-1 hover:shadow-glow">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-purple/10 via-white/5 to-brand-gold/10" />
              <div className="mt-4 text-white/80">
                <h2 className="text-xl font-semibold text-white">Portfolio Project {index + 1}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GraphicDesign;
