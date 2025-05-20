import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-50 mix-blend-difference"
      style={{ transition: 'transform 0.05s ease-out' }}
    />
  );
}
