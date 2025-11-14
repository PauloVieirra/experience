import { useEffect, useState } from 'react';

interface EpilepsiaEffectProps {
  intensity: number;
}

export default function EpilepsiaEffect({ intensity }: EpilepsiaEffectProps) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (intensity < 30) return;

    // IMPORTANT: This is a very mild simulation for educational purposes only
    // Real photosensitive triggers are much more dangerous and should never be fully simulated
    const flashInterval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 50);
    }, 1000 - (intensity * 3)); // Slower than actual dangerous frequencies

    return () => clearInterval(flashInterval);
  }, [intensity]);

  return (
    <>
      {intensity > 0 && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-2xl text-center">
          ⚠️ AVISO: Esta é uma simulação educacional suave. Efeitos visuais reais podem ser perigosos para pessoas com epilepsia fotossensível.
        </div>
      )}
      <div 
        className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-75"
        style={{
          background: flash ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
          opacity: flash ? (intensity / 150) : 0
        }}
        aria-hidden="true"
      />
    </>
  );
}
