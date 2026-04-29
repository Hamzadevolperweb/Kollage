function SocialMedia() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Social Media Marketing</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Strategy, content, and analytics for social growth.</h1>
          <p className="mt-4 max-w-2xl text-white/70">Engaging campaigns that turn audiences into brand advocates across every platform.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: 'Content Creation', desc: 'Original visuals, reels, and posts for modern audiences.' },
            { title: 'Strategy', desc: 'Tailored campaigns aligned to your brand goals.' },
            { title: 'Analytics', desc: 'Measurable insights and performance optimization.' },
            { title: 'Community Management', desc: 'Authentic engagement and audience care.' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-black/50 p-8 transition hover:-translate-y-1 hover:shadow-glow">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
