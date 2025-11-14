import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './ArticleContent';
import ControlPanel from './ControlPanel';
import DisabilityEffect from './DisabilityEffect';
import ScreenReader from './ScreenReader';

export default function SimulationPage() {
  const { type } = useParams<{ type: string }>();
  const [intensity, setIntensity] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(50);
  const [accessibleMode, setAccessibleMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [screenReaderActive, setScreenReaderActive] = useState(false);

  // Reset settings when switching disabilities
  useEffect(() => {
    if (type === 'catarata') {
      setIntensity(100);
      setFontSize(16);
      setContrast(25);
      setAccessibleMode(false);
      setIsPlaying(true);
      setScreenReaderActive(true);
    } else {
      setIntensity(50);
      setFontSize(16);
      setContrast(50);
      setAccessibleMode(false);
      setIsPlaying(true);
      setScreenReaderActive(false);
    }
  }, [type]);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Disability effect overlay */}
      {isPlaying && (!accessibleMode || type === 'catarata') && (
        <DisabilityEffect 
          type={type || ''} 
          intensity={intensity}
          accessibleMode={accessibleMode}
        />
      )}

      {/* Screen Reader */}
      <ScreenReader 
        isActive={screenReaderActive}
        accessibleMode={accessibleMode}
      />

      {/* Main content */}
      <div className="relative z-10 pb-32">
        <ArticleContent 
          fontSize={fontSize}
          contrast={contrast}
          accessibleMode={accessibleMode}
          disabilityType={type || ''}
        />
      </div>

      {/* Fixed control panel */}
      <ControlPanel
        intensity={intensity}
        setIntensity={setIntensity}
        fontSize={fontSize}
        setFontSize={setFontSize}
        contrast={contrast}
        setContrast={setContrast}
        accessibleMode={accessibleMode}
        setAccessibleMode={setAccessibleMode}
        disabilityType={type || ''}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        screenReaderActive={screenReaderActive}
        setScreenReaderActive={setScreenReaderActive}
      />
    </div>
  );
}