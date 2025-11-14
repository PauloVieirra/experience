interface CatarataEffectProps {
  intensity: number;
}

export default function CatarataEffect({ intensity }: CatarataEffectProps) {
  const opacity = intensity / 100;
  const blur = (intensity / 100) * 15;
  const grayOpacity = intensity > 50 ? ((intensity - 50) / 50) * 0.9 : 0;
  // Darkened gray by 50% (from 60,60,60 to 30,30,30)
  const darkGray = `rgba(30, 30, 30, ${grayOpacity})`;

  const background = `radial-gradient(circle, ${darkGray} 0%, rgba(40, 40, 40, ${grayOpacity * 0.5}) 100%),
    radial-gradient(circle, rgba(111, 92, 68, ${opacity * 0.7}) 0%, rgba(105, 90, 70, ${opacity * 0.9}) 100%)`;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background,
        backdropFilter: `blur(${blur}px)`,
        mixBlendMode: 'multiply'
      }}
      aria-hidden="true"
    />
  );
}
