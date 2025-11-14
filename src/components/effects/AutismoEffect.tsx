import { useEffect, useState } from 'react';

interface AutismoEffectProps {
  intensity: number;
}

export default function AutismoEffect({ intensity }: AutismoEffectProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (intensity < 20) {
      setParticles([]);
      return;
    }

    const particleCount = Math.floor((intensity / 100) * 15);
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 40
    }));
    setParticles(newParticles);

    // Random flashing effect
    const flashInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setFlash(true);
        setTimeout(() => setFlash(false), 100);
      }
    }, 2000 - (intensity * 10));

    return () => clearInterval(flashInterval);
  }, [intensity]);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-100"
        style={{
          background: flash ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
        }}
        aria-hidden="true"
      />
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed rounded-full animate-pulse pointer-events-none z-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(255, ${Math.random() * 100}, ${Math.random() * 255}, 0.3), transparent)`,
            animation: `pulse ${1 + Math.random()}s infinite`
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
