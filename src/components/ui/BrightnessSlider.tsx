import { useAccessibility } from '../AccessibilityContext';
import { Slider } from './slider';

export function BrightnessSlider() {
  const { brightness, setBrightness } = useAccessibility();

  return (
    <div className="flex items-center gap-2">
      <span>Brilho</span>
      <Slider
        min={20}
        max={100}
        step={10}
        value={[brightness]}
        onValueChange={(value) => setBrightness(value[0])}
      />
    </div>
  );
}
