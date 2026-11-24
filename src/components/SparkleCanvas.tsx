import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const SparkleCanvas: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let idCounter = 0;
    const colors = ['#8E4A5C', '#B5945B', '#C99AA5', '#D6B88D', '#A36B79'];

    const handleClick = (e: MouseEvent) => {
      const newParticles: Particle[] = Array.from({ length: 6 }).map(() => ({
        id: ++idCounter,
        x: e.clientX + (Math.random() - 0.5) * 40,
        y: e.clientY + (Math.random() - 0.5) * 40,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));

      setParticles(prev => [...prev.slice(-20), ...newParticles]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)));
      }, 700);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 animate-ping opacity-90"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            color: p.color,
            fontSize: `${p.size}px`,
            lineHeight: 1
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
};
