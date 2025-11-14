import { useEffect, useState } from 'react';

interface MobilidadeEffectProps {
  intensity: number;
}

export default function MobilidadeEffect({ intensity }: MobilidadeEffectProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [shakeCursor, setShakeCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const shakeInterval = setInterval(() => {
      const shakeAmount = (intensity / 100) * 20;
      setShakeCursor({
        x: (Math.random() - 0.5) * shakeAmount,
        y: (Math.random() - 0.5) * shakeAmount
      });
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(shakeInterval);
    };
  }, [intensity]);

  if (intensity < 10) return null;

  return (
    <div
      className="fixed w-6 h-6 rounded-full bg-red-500 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${cursorPos.x + shakeCursor.x}px`,
        top: `${cursorPos.y + shakeCursor.y}px`,
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
        transition: 'left 0.05s, top 0.05s'
      }}
      aria-hidden="true"
    />
  );
}
