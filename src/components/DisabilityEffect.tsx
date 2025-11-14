import { useEffect, useState } from 'react';
import CatarataEffect from './effects/CatarataEffect';
import GlaucomaEffect from './effects/GlaucomaEffect';
import AstigmatismoEffect from './effects/AstigmatismoEffect';
import DaltonismoEffect from './effects/DaltonismoEffect';
import AutismoEffect from './effects/AutismoEffect';
import TDAHEffect from './effects/TDAHEffect';
import DislexiaEffect from './effects/DislexiaEffect';
import MobilidadeEffect from './effects/MobilidadeEffect';
import EpilepsiaEffect from './effects/EpilepsiaEffect';

interface DisabilityEffectProps {
  type: string;
  intensity: number;
  accessibleMode: boolean;
}

export default function DisabilityEffect({ type, intensity, accessibleMode }: DisabilityEffectProps) {
  switch (type) {
    case 'catarata':
      return <CatarataEffect intensity={intensity} />;
    case 'glaucoma':
      return <GlaucomaEffect intensity={intensity} />;
    case 'astigmatismo':
      return <AstigmatismoEffect intensity={intensity} />;
    case 'daltonismo':
      return <DaltonismoEffect intensity={intensity} />;
    case 'autismo':
      return <AutismoEffect intensity={intensity} />;
    case 'tdah':
      return <TDAHEffect intensity={intensity} />;
    case 'dislexia':
      return <DislexiaEffect intensity={intensity} />;
    case 'mobilidade':
      return <MobilidadeEffect intensity={intensity} />;
    case 'epilepsia':
      return <EpilepsiaEffect intensity={intensity} />;
    case 'auditiva':
      // Auditory disability is shown through missing captions/transcripts in content
      return null;
    default:
      return null;
  }
}