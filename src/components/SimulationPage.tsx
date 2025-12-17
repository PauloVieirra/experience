import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './ArticleContent';
import ControlPanel from './ControlPanel';
import DisabilityEffect from './DisabilityEffect';
import ScreenReader from './ScreenReader';
import { ScopedThemeProvider } from './ui/ScopedThemeProvider';

const contentMap = {
  astigmatismo: lazy(() => import('./content/AstigmatismoContent')),
  auditiva: lazy(() => import('./content/AuditivaContent')),
  autismo: lazy(() => import('./content/AutismoContent')),
  catarata: lazy(() => import('./content/CatarataContent')),
  daltonismo: lazy(() => import('./content/DaltonismoContent')),
  dislexia: lazy(() => import('./content/DislexiaContent')),
  epilepsia: lazy(() => import('./content/EpilepsiaContent')),
  glaucoma: lazy(() => import('./content/GlaucomaContent')),
  mobilidade: lazy(() => import('./content/MobilidadeContent')),
  tdah: lazy(() => import('./content/TDAHContent')),
  "acessibilidade-social": lazy(() => import('./content/AcessibilidadeSocialContent')),
};

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

  const isAstigmatism = type === 'astigmatismo';

  const ContentComponent = type ? contentMap[type as keyof typeof contentMap] : null;

  const articleArea = (
    <div className={`min-h-screen relative overflow-hidden ${isAstigmatism ? 'bg-background text-foreground' : 'bg-slate-50'}`}>
      {/* Disability effect overlay */}
      {isPlaying && (!accessibleMode || type === 'catarata') && (
        <DisabilityEffect 
          type={type || ''} 
          intensity={intensity}
          accessibleMode={accessibleMode}
        />
      )}

      {/* Main content */}
      <div className="relative z-10 pb-32">
        <ArticleContent 
          fontSize={fontSize}
          contrast={contrast}
          accessibleMode={accessibleMode}
          disabilityType={type || ''}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {ContentComponent && <ContentComponent accessibleMode={accessibleMode} />}
          </Suspense>
        </ArticleContent>
      </div>
    </div>
  );

  return (
    <>
      {isAstigmatism ? (
        <ScopedThemeProvider defaultTheme="light" storageKey="astigmatismo-theme">
          {articleArea}
        </ScopedThemeProvider>
      ) : (
        articleArea
      )}

      {/* Screen Reader */}
      <ScreenReader 
        isActive={screenReaderActive}
        accessibleMode={accessibleMode}
      />

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
    </>
  );
}