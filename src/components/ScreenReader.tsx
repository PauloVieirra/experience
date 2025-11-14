import { useEffect, useState, useCallback, useRef } from 'react';

interface ScreenReaderProps {
  isActive: boolean;
  accessibleMode: boolean;
}

export default function ScreenReader({ isActive, accessibleMode }: ScreenReaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readableElements, setReadableElements] = useState<HTMLElement[]>([]);
  const [highlightPosition, setHighlightPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [currentDescription, setCurrentDescription] = useState('');
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const hasAnnouncedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesisRef.current = window.speechSynthesis;
    }
  }, []);

  const speak = useCallback((text: string) => {
    const speechSynthesis = speechSynthesisRef.current;
    if (!speechSynthesis || !text) return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
  }, []);

  const getDetailedDescription = (element: HTMLElement, isAccessible: boolean): string => {
    const tagName = element.tagName.toLowerCase();
    const textContent = element.textContent?.trim() || '';

    if (!isAccessible) {
      // NON-ACCESSIBLE MODE: Poor descriptions
      switch (tagName) {
        case 'a':
          return textContent ? `Link: ${textContent}` : 'Link sem texto';
        
        case 'div':
          if (element.classList.contains('cursor-pointer')) {
            return 'Elemento clicável sem identificação';
          }
          if (textContent.length > 0 && textContent.length < 200) {
            return `Texto: ${textContent.substring(0, 80)}`;
          }
          return 'Divisão de conteúdo';
        
        case 'img':
          return 'Imagem sem descrição';
        
        case 'button':
          return textContent || 'Botão sem rótulo';
        
        default:
          if (textContent && textContent.length < 150) {
            return textContent;
          }
          return 'Imagem';
      }
    }

    // ACCESSIBLE MODE: Detailed, contextual descriptions
    const ariaLabel = element.getAttribute('aria-label');
    const role = element.getAttribute('role');

    switch (tagName) {
      case 'a':
        if (ariaLabel) {
          return `Botão de navegação - ${ariaLabel}`;
        }
        if (element.querySelector('svg') || element.textContent?.includes('Voltar')) {
          return `Botão de navegação - Voltar para tela anterior`;
        }
        return `Link - ${textContent}`;

      case 'header':
        return 'Início do cabeçalho da página';

      case 'h1':
        return `Título da página - ${textContent}`;

      case 'h2':
        return `Título de seção - ${textContent}`;

      case 'h3':
        return `Subtítulo - ${textContent}`;

      case 'time':
        return `Data de publicação - ${textContent}`;

      case 'span':
        const parent = element.parentElement;
        if (parent?.classList.contains('text-slate-500')) {
          return `Informação adicional - ${textContent}`;
        }
        return textContent;

      case 'figure':
        return 'Início de figura ilustrativa';

      case 'img':
        const alt = element.getAttribute('alt');
        if (alt) {
          return `Imagem ilustrativa - ${alt}`;
        }
        return 'Imagem sem descrição alternativa';

      case 'main':
        return 'Início do conteúdo principal do artigo';

      case 'section':
        const labelledBy = element.getAttribute('aria-labelledby');
        if (labelledBy) {
          const heading = document.getElementById(labelledBy);
          return `Início de seção - ${heading?.textContent || 'sem título'}`;
        }
        return 'Início de nova seção';

      case 'article':
        return 'Início do artigo';

      case 'p':
        const parentDiv = element.closest('div[role="note"]');
        if (parentDiv) {
          if (textContent.includes('Modo Acessível')) {
            return `Aviso importante - ${textContent}`;
          }
          return `Nota informativa - ${textContent}`;
        }
        
        if (textContent.length > 0) {
          return `Parágrafo - ${textContent}`;
        }
        return '';

      case 'button':
        if (ariaLabel) {
          return `Botão de ação - ${ariaLabel}`;
        }
        return `Botão - ${textContent}`;

      case 'div':
        if (element.dataset.topic === 'true') {
          const titleEl = element.querySelector('[data-topic-title="true"]');
          const title = titleEl ? titleEl.textContent?.trim() : 'sem título';
          return `Tópico: ${title}`;
        }
        if (element.dataset.paragraph === 'true') {
          return `Parágrafo: ${textContent}`;
        }
        if (role === 'note') {
          return `Aviso - ${textContent}`;
        }
        if (element.classList.contains('bg-green-50') || element.classList.contains('bg-red-50')) {
          if (element.querySelector('h3')) {
            return `Indicador de acessibilidade - ${textContent.substring(0, 100)}`;
          }
        }
        if (element.classList.contains('cursor-pointer')) {
          return `Elemento interativo - ${textContent || 'sem rótulo'}`;
        }
        if (!textContent || textContent.length === 0) {
          return '';
        }
        if (textContent.length < 200 && textContent.length > 0) {
          return `Conteúdo - ${textContent}`;
        }
        return '';

      default:
        if (textContent && textContent.length > 0 && textContent.length < 200) {
          return textContent;
        }
        return '';
    }
  };

  const updateHighlight = useCallback((element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    setHighlightPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height
    });

    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const readElement = useCallback((index: number, elements: HTMLElement[], isAccessible: boolean) => {
    if (index < 0 || index >= elements.length) return;

    const element = elements[index];
    const description = getDetailedDescription(element, isAccessible);
    
    setCurrentDescription(description);
    updateHighlight(element);
    speak(description);
  }, [updateHighlight, speak]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isActive || readableElements.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = currentIndex + 1;
      if (nextIndex < readableElements.length) {
        setCurrentIndex(nextIndex);
        readElement(nextIndex, readableElements, accessibleMode);
      } else {
        speak('Fim do conteúdo');
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        setCurrentIndex(prevIndex);
        readElement(prevIndex, readableElements, accessibleMode);
      } else {
        speak('Início do conteúdo');
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      readElement(currentIndex, readableElements, accessibleMode);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      speak('Leitor de tela pausado');
    }
  }, [isActive, currentIndex, readableElements, readElement, speak, accessibleMode]);

  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0);
      setReadableElements([]);
      setCurrentDescription('');
      hasAnnouncedRef.current = false;
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
      return;
    }

    // Collect readable elements
    const selectors = [
      'article a[href="/"]',
      'article header h1',
      'article h1',
      'article div.text-3xl',
      'article time',
      'article div[class*="bg-green-50"], article div[class*="bg-red-50"], article div[class*="bg-blue-50"], article div[class*="bg-purple-50"], article div[class*="bg-indigo-50"]',
      'article figure',
      'article img',
      'article main',
      'article section',
      'article h2',
      'article div.text-2xl',
      'article h3',
      'article p',
      'article button',
      'article div.cursor-pointer',
      'article [data-topic="true"]',
      'article [data-paragraph="true"]',
    ];

    const elements: HTMLElement[] = [];
    const seenElements = new Set<HTMLElement>();

    selectors.forEach(selector => {
      try {
        const found = document.querySelectorAll(selector);
        found.forEach(el => {
          const htmlEl = el as HTMLElement;
          if (!seenElements.has(htmlEl)) {
            if (htmlEl.closest('[role="region"][aria-label*="controle"]')) {
              return;
            }
            if (!htmlEl.closest('article') && selector.includes('a[href')) {
              return;
            }
            seenElements.add(htmlEl);
            elements.push(htmlEl);
          }
        });
      } catch (e) {
        // Ignore
      }
    });

    elements.sort((a, b) => {
      const position = a.compareDocumentPosition(b);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
        return -1;
      }
      if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        return 1;
      }
      return 0;
    });

    const filtered = elements.filter(el => {
      const desc = getDetailedDescription(el, accessibleMode);
      return desc && desc.length > 0;
    });

    setReadableElements(filtered);
    setCurrentIndex(0);

    // Announce activation only once
    if (!hasAnnouncedRef.current) {
      hasAnnouncedRef.current = true;
      setTimeout(() => {
        speak(
          accessibleMode
            ? 'Leitor de tela ativado. Use seta para baixo para avançar, seta para cima para retroceder, Enter para repetir. Este site possui marcação semântica adequada.'
            : 'Leitor de tela ativado. Use seta para baixo para avançar, seta para cima para retroceder, Enter para repetir. Atenção: este site possui problemas de acessibilidade e falta de marcação semântica.'
        );
      }, 300);

      setTimeout(() => {
        if (filtered.length > 0) {
          readElement(0, filtered, accessibleMode);
        }
      }, 5000);
    }

  }, [isActive, accessibleMode, speak, readElement]);

  useEffect(() => {
    if (!isActive) return;
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, handleKeyDown]);

  if (!isActive || readableElements.length === 0 || !readableElements[currentIndex]) {
    return null;
  }

  return (
    <>
      {/* Highlight focused element */}
      <div
        className="fixed pointer-events-none z-50 border-4 border-yellow-400 bg-yellow-400/20 transition-all duration-200 shadow-lg"
        style={{
          top: `${highlightPosition.top}px`,
          left: `${highlightPosition.left}px`,
          width: `${highlightPosition.width}px`,
          height: `${highlightPosition.height}px`,
          boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
        }}
        aria-hidden="true"
      />

      {/* Screen reader indicator with current position */}
      <div
        className="fixed top-4 right-4 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg z-50 max-w-md"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl animate-pulse">🔊</span>
          <div>
            <div className="font-bold">Leitor de Tela Ativo</div>
            <div className="text-sm">
              Elemento {currentIndex + 1} de {readableElements.length}
            </div>
          </div>
        </div>
        <div className="text-sm bg-black/10 rounded px-2 py-1 mt-2 max-h-20 overflow-hidden">
          {currentDescription.substring(0, 100)}
          {currentDescription.length > 100 && '...'}
        </div>
      </div>

      {/* Keyboard shortcuts helper */}
      <div className="fixed bottom-36 right-4 bg-slate-800 text-white px-4 py-3 rounded-lg shadow-lg z-50 text-sm">
        <div className="font-bold mb-2">Atalhos:</div>
        <div className="space-y-1">
          <div>↓ Próximo elemento</div>
          <div>↑ Elemento anterior</div>
          <div>Enter: Repetir</div>
          <div>Esc: Pausar</div>
        </div>
      </div>
    </>
  );
}
