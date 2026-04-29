import { Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';
import HeroCanvas from '../components/3d/HeroCanvas.jsx';

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-20 lg:px-12">
      <Suspense>
        <HeroCanvas />
      </Suspense>
      <div className="mx-auto max-w-6xl">
        <div className="flex min-h-[80vh] flex-col justify-center gap-10">
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-brand-gold shadow-[0_0_40px_rgba(255,202,58,0.12)]">
              Creative Agency & Cinematic Studio
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              We Create. We Design. We Inspire.
            </h1>
            <div className="text-lg text-white/80">
              <TypeAnimation
                sequence={['Video Production', 2500, 'Graphic Design', 2500, 'Social Media Marketing', 2500]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/video-production"
              className="rounded-full border border-brand-purple bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-brand-gold hover:bg-brand-gold/10"
            >
              View Our Work
            </a>
            <a
              href="/contact"
              className="rounded-full border border-brand-gold bg-brand-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-brand-purple hover:bg-brand-purple/10"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-white/60">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              ↓
            </span>
            <span>Scroll down to explore the studio experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
