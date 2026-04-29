import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Video Production', to: '/video-production' },
  { label: 'Graphic Design', to: '/graphic-design' },
  { label: 'Social Media', to: '/social-media' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white">
        <NavLink to="/" className="flex items-center gap-3 font-semibold text-xl tracking-tight text-white">
          <img src="/logo.svg" alt="Kollage Studio" className="h-10 w-10 rounded-xl border border-white/10 bg-black/70 p-1" />
          <span>Kollage Studio</span>
        </NavLink>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-brand-purple ${isActive ? 'text-brand-gold' : 'text-white/70'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
