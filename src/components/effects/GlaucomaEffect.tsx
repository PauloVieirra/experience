interface GlaucomaEffectProps {
  intensity: number;
}

export default function GlaucomaEffect({ intensity }: GlaucomaEffectProps) {
  const darkness = intensity / 100;
  const vignette = 30 + (intensity / 100) * 50; // 30% to 80%

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        background: `radial-gradient(circle, transparent 0%, transparent ${100 - vignette}%, rgba(0,0,0,${darkness}) 100%)`,
      }}
      aria-hidden="true"
    />
  );
}
