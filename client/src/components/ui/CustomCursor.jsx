import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-6 w-6 rounded-full border border-white/30 bg-white/10 transition-transform duration-150"
      style={{ transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)` }}
    />
  );
}

export default CustomCursor;
