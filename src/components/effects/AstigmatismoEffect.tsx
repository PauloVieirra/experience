interface AstigmatismoEffectProps {
  intensity: number;
}

export default function AstigmatismoEffect({ intensity }: AstigmatismoEffectProps) {
  const blur = (intensity / 100) * 6;
  const brightness = 1 + (intensity / 100) * 0.5;

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          backdropFilter: `blur(${blur}px) brightness(${brightness})`,
          background: 'rgba(255, 255, 255, 0.1)'
        }}
        aria-hidden="true"
      />
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, ${intensity / 500}) 2px,
            rgba(255, 255, 255, ${intensity / 500}) 4px
          )`
        }}
        aria-hidden="true"
      />
    </>
  );
}
