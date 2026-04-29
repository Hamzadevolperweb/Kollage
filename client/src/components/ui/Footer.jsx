function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70 py-8 text-center text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <p>Kollage Studio SMC Private Limited</p>
        <p>Nasim Nagar Road, Hyderabad, Pakistan</p>
        <p>© {new Date().getFullYear()} Kollage Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
