function Contact() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-gold">Contact Us</p>
          <h1 className="mt-4 text-5xl font-semibold text-white">Talk to Kollage Studio</h1>
          <p className="mt-4 max-w-2xl text-white/70">Send your project brief or questions and our creative team will reach out with a cinematic strategy.</p>
        </header>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">Name</label>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-brand-purple" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">Email</label>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-brand-purple" placeholder="you@example.com" type="email" />
              </div>
              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">Subject</label>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-brand-purple" placeholder="Project subject" />
              </div>
              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.28em] text-white/60">Message</label>
                <textarea className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none focus:border-brand-purple" rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-purple px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-brand-gold">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div>
              <h2 className="text-3xl font-semibold text-white">Get in touch</h2>
              <p className="mt-4 text-white/70">Reach Kollage Studio for creative direction, production booking, or collaboration inquiries.</p>
            </div>
            <div className="space-y-4 text-white/80">
              <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">Phone</p>
                <p className="mt-2 text-lg">0333-1306137</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">Email</p>
                <p className="mt-2 text-lg">info@kollagestudio.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">Location</p>
                <p className="mt-2 text-lg">H. No. 01, Beside Street Old Sonahri Book Land, Nasim Nagar Road, 71000 Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
