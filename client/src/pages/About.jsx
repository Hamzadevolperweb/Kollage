function About() {
  return (
    <section className="relative px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
          <div className="h-full rounded-3xl bg-gradient-to-br from-brand-purple/20 via-white/5 to-brand-gold/10 p-8">
            <div className="h-full rounded-3xl border border-white/10 bg-black/50 p-6">
              <h2 className="text-4xl font-semibold text-white">About Kollage Studio</h2>
              <p className="mt-6 text-white/80 leading-relaxed">
                Kollage Studio is a creative agency focused on cinematic storytelling, visual branding, and social media campaigns that move audiences.
              </p>
              <div className="mt-8 space-y-4 text-white/80">
                <div>
                  <h3 className="text-lg font-semibold text-white">Vision</h3>
                  <p>Inspire every brand with cinematic identity, bold design, and culture-driving campaigns.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Mission</h3>
                  <p>Deliver premium creative solutions that connect audiences and amplify digital presence.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Philosophy</h3>
                  <p>Idea, craft, and motion are aligned to build emotional, memorable brand experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
            <h2 className="text-4xl font-semibold text-white">Our Team</h2>
            <p className="mt-4 text-white/70">A passionate creative team with deep expertise across production, design, and digital marketing.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { name: 'Tariq Abro', role: 'CEO & Founder', detail: '20+ years experience' },
              { name: 'Babar Jhatial', role: 'Art Director', detail: '3 years' },
              { name: 'Rizwan Ali', role: 'Production Director', detail: '9 years' },
              { name: 'Jan Ali', role: 'Media Coordinator / DOP', detail: '5 years' },
              { name: 'Aiman Khan', role: 'PR & Marketing Manager', detail: '3 years' },
              { name: 'Abdallah Aslam Bhatti', role: 'HR Manager', detail: '10+ years' },
              { name: 'Wasim Ahmed', role: 'Office Assistant', detail: 'Support & operations' },
            ].map((member) => (
              <div key={member.name} className="rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-brand-purple/50 hover:shadow-glow">
                <div className="mb-3 inline-flex rounded-full bg-brand-purple/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-purple">
                  {member.role}
                </div>
                <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                <p className="mt-3 text-white/70">{member.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
