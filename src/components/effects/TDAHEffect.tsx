import { useEffect, useState } from 'react';

interface TDAHEffectProps {
  intensity: number;
}

export default function TDAHEffect({ intensity }: TDAHEffectProps) {
  const [banners, setBanners] = useState<Array<{ id: number; text: string; position: number }>>([]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Pulsating text opacity
    const opacityInterval = setInterval(() => {
      setOpacity(0.7 + (Math.random() * 0.3));
    }, 100 + (100 - intensity));

    // Moving distractions
    const distractionTexts = [
      '🔔 Nova notificação',
      '⚡ Oferta especial!',
      '👀 Você viu isso?',
      '🎯 Clique aqui',
      '💬 Mensagem nova',
      '🎁 Promoção'
    ];

    const bannerInterval = setInterval(() => {
      if (intensity > 30 && banners.length < 3) {
        const newBanner = {
          id: Date.now(),
          text: distractionTexts[Math.floor(Math.random() * distractionTexts.length)],
          position: Math.random() * 80
        };
        setBanners(prev => [...prev, newBanner]);

        setTimeout(() => {
          setBanners(prev => prev.filter(b => b.id !== newBanner.id));
        }, 3000);
      }
    }, 2000 - (intensity * 10));

    return () => {
      clearInterval(opacityInterval);
      clearInterval(bannerInterval);
    };
  }, [intensity, banners.length]);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(255, 200, 0, ${intensity / 1000}) 50%, transparent 100%)`,
          opacity: opacity
        }}
        aria-hidden="true"
      />
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="fixed top-4 right-4 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce pointer-events-none z-40"
          style={{
            top: `${banner.position}%`,
            animation: 'bounce 1s infinite'
          }}
          aria-hidden="true"
        >
          {banner.text}
        </div>
      ))}
    </>
  );
}
