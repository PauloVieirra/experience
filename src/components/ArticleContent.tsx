import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

interface ArticleContentProps {
  fontSize: number;
  contrast: number;
  accessibleMode: boolean;
  disabilityType: string;
  children: React.ReactNode;
}

export default function ArticleContent({ fontSize, contrast, accessibleMode, disabilityType, children }: ArticleContentProps) {
  const getContrastValue = (c: number) => {
    if (c <= 50) {
      return c * 2; // from 0-50, map to 0-100%
    }
    return 100 + (c - 50) * 4; // from 50-100, map to 100-300%
  }

  const baseStyles: React.CSSProperties = {
    filter: `contrast(${getContrastValue(contrast)}%)`,
    fontSize: `${fontSize}px`,
    lineHeight: `${fontSize * 1.5}px`,
  };

  return (
    <article 
      className="w-full min-h-screen flex flex-col" 
      style={baseStyles}
    >
      <div className="flex-1 w-full mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-8 md:mb-12 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={accessibleMode ? "Voltar para página inicial" : undefined}
        >
          <ArrowLeft className="w-5 h-5 flex-shrink-0" />
          {accessibleMode ? <span>Voltar para Início</span> : "Voltar"}
        </Link>

        <div className="prose prose-base md:prose-lg max-w-none">
          {children}
        </div>
      </div>
    </article>
  );
}