interface DaltonismoEffectProps {
  intensity: number;
}

export default function DaltonismoEffect({ intensity }: DaltonismoEffectProps) {
  const filterIntensity = intensity / 100;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        backdropFilter: `grayscale(${filterIntensity * 0.3}) hue-rotate(${filterIntensity * 30}deg)`,
        background: `rgba(100, 100, 0, ${filterIntensity * 0.1})`
      }}
      aria-hidden="true"
    />
  );
}
