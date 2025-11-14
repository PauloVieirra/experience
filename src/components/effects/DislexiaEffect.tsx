import { useEffect } from 'react';

interface DislexiaEffectProps {
  intensity: number;
}

export default function DislexiaEffect({ intensity }: DislexiaEffectProps) {
  useEffect(() => {
    if (intensity < 20) return;

    const scrambleLetters = () => {
      const textNodes: Node[] = [];
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            // Skip control panel and navigation
            const parent = node.parentElement;
            if (parent?.closest('[role="region"]') || parent?.closest('nav')) {
              return NodeFilter.FILTER_REJECT;
            }
            return node.textContent && node.textContent.trim().length > 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_REJECT;
          }
        }
      );

      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node);
      }

      textNodes.forEach(node => {
        if (node.textContent && Math.random() < (intensity / 200)) {
          const text = node.textContent;
          const words = text.split(' ');
          const scrambledWords = words.map(word => {
            if (word.length > 3 && Math.random() < 0.3) {
              const chars = word.split('');
              // Swap random adjacent letters
              const idx = Math.floor(Math.random() * (chars.length - 1));
              [chars[idx], chars[idx + 1]] = [chars[idx + 1], chars[idx]];
              return chars.join('');
            }
            return word;
          });
          node.textContent = scrambledWords.join(' ');
        }
      });
    };

    const interval = setInterval(scrambleLetters, 2000 - (intensity * 10));
    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40"
      style={{
        backdropFilter: `blur(${intensity / 100}px)`,
        background: `repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0, 0, 0, ${intensity / 2000}) 1px, rgba(0, 0, 0, ${intensity / 2000}) 2px)`
      }}
      aria-hidden="true"
    />
  );
}
