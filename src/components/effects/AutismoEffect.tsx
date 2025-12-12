interface AutismoEffectProps {
  intensity: number;
}

export default function AutismoEffect({ intensity }: AutismoEffectProps) {
  if (intensity < 20) {
    return null;
  }

  return null;
}