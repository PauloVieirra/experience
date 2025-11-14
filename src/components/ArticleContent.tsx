import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AccessibilityIndicator from './AccessibilityIndicator';

interface ArticleContentProps {
  fontSize: number;
  contrast: number;
  accessibleMode: boolean;
  disabilityType: string;
}

export default function ArticleContent({ fontSize, contrast, accessibleMode, disabilityType }: ArticleContentProps) {
  const getContrastValue = (c: number) => {
    if (c <= 50) {
      return c * 2; // from 0-50, map to 0-100%
    }
    return 100 + (c - 50) * 4; // from 50-100, map to 100-300%
  }

  const contrastValue = getContrastValue(contrast);
  const imageCorrectionStyle = (accessibleMode && contrastValue > 0) 
    ? { filter: `contrast(${10000 / contrastValue}%)` } 
    : {};
  
  // Base styles
  let baseStyles: React.CSSProperties = {
    filter: `contrast(${getContrastValue(contrast)}%)`,
  };

  // Accessible mode specific adjustments per disability
  if (accessibleMode) {
    switch (disabilityType) {
      case 'catarata':
        // High contrast, larger minimum font size, clear spacing
        baseStyles = {
          ...baseStyles,
          fontSize: `${Math.max(fontSize, 18)}px`,
          lineHeight: `${Math.max(fontSize, 18) * 1.6}px`,
          filter: `contrast(150%)`,
          color: '#000000',
          backgroundColor: '#FFFFFF'
        };
        break;
      
      case 'glaucoma':
        // Centralized content, clear focus indicators
        baseStyles = {
          ...baseStyles,
          fontSize: `${fontSize}px`,
          lineHeight: `${fontSize * 1.5}px`,
          maxWidth: '600px',
          margin: '0 auto'
        };
        break;
      
      case 'astigmatismo':
        // Clear fonts, no thin weights, generous spacing
        baseStyles = {
          ...baseStyles,
          fontSize: `${Math.max(fontSize, 16)}px`,
          lineHeight: `${Math.max(fontSize, 16) * 1.8}px`,
          letterSpacing: '0.02em',
          fontWeight: 500
        };
        break;
      
      case 'dislexia':
        // Left aligned, extra spacing, dyslexia-friendly
        baseStyles = {
          ...baseStyles,
          fontSize: `${Math.max(fontSize, 16)}px`,
          lineHeight: `${Math.max(fontSize, 16) * 1.8}px`,
          letterSpacing: '0.12em',
          wordSpacing: '0.16em',
          textAlign: 'left' as const
        };
        break;
      
      case 'mobilidade':
        // Large touch targets, more padding
        baseStyles = {
          ...baseStyles,
          fontSize: `${fontSize}px`,
          lineHeight: `${fontSize * 1.5}px`,
        };
        break;
      
      default:
        baseStyles = {
          ...baseStyles,
          fontSize: `${fontSize}px`,
          lineHeight: `${fontSize * 1.5}px`
        };
    }
  } else {
    baseStyles.fontSize = `${fontSize}px`;
    baseStyles.lineHeight = `${fontSize * 1.5}px`;
  }

  // Button styles for accessible mode
  const getButtonClass = () => {
    if (!accessibleMode) {
      return "bg-blue-600 text-white px-8 py-3 rounded-lg cursor-pointer";
    }
    
    // Larger touch targets for mobility
    if (disabilityType === 'mobilidade') {
      return "bg-blue-600 text-white px-12 py-6 rounded-lg hover:bg-blue-700 transition-colors text-xl min-w-[200px] min-h-[60px]";
    }
    
    return "bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors min-h-[48px]";
  };

  const getSecondaryButtonClass = () => {
    if (!accessibleMode) {
      return "border-2 border-slate-300 px-8 py-3 rounded-lg cursor-pointer";
    }
    
    if (disabilityType === 'mobilidade') {
      return "border-2 border-slate-900 px-12 py-6 rounded-lg hover:bg-slate-50 transition-colors text-xl min-w-[200px] min-h-[60px]";
    }
    
    return "border-2 border-slate-900 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors min-h-[48px]";
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8" style={baseStyles}>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8"
        aria-label={accessibleMode ? "Voltar para página inicial" : undefined}
      >
        <ArrowLeft className="w-5 h-5" />
        {accessibleMode ? <span>Voltar para Início</span> : "Voltar"}
      </Link>

      {accessibleMode ? (
        <header>
          <h1 id="main-heading">
            A Importância da Acessibilidade Digital no Mundo Moderno
          </h1>
        </header>
      ) : (
        <div className="text-3xl mb-6">
          A Importância da Acessibilidade Digital no Mundo Moderno
        </div>
      )}

      <div className="text-slate-500 mb-8">
        {accessibleMode ? (
          <time dateTime="2025-11-13">13 de novembro de 2025</time>
        ) : (
          "13 de novembro de 2025"
        )}
        {" • "}
        <span>8 minutos de leitura</span>
      </div>

      {/* Accessibility Status Indicator */}
      <AccessibilityIndicator accessibleMode={accessibleMode} disabilityType={disabilityType} />

      {/* Imagem visível para Catarata em ambos os modos */}
      {disabilityType === 'catarata' && (
        <figure className="mb-8 rounded-xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop"
            alt={accessibleMode ? "Pessoa usando computador com tecnologias assistivas, demonstrando acessibilidade digital" : "Imagem"}
            className="w-full h-64 object-cover"
          />
          {accessibleMode && (
            <figcaption className="sr-only">
              Imagem ilustrativa mostrando o uso de tecnologias assistivas
            </figcaption>
          )}
        </figure>
      )}

      {accessibleMode ? (
        disabilityType === 'catarata' ? (
          // MODO ACESSÍVEL PARA CATARATA (ESTRUTURA DE TÓPICOS)
          <div>
            <div data-topic="true" tabIndex={0}>
              <div data-topic-title="true" className="text-2xl mb-4">Introdução</div>
              <div data-paragraph="true" className="mb-4">
                A acessibilidade digital não é apenas uma questão de conformidade legal, mas uma questão 
                fundamental de inclusão e direitos humanos. No mundo cada vez mais digitalizado, garantir 
                que todos possam acessar e utilizar conteúdos e serviços online é essencial.
              </div>
              <div data-paragraph="true">
                Segundo a Organização Mundial da Saúde, mais de 1 bilhão de pessoas no mundo vivem com 
                algum tipo de deficiência. Isso representa aproximadamente 15% da população global. 
                Além disso, com o envelhecimento da população, esse número tende a crescer significativamente.
              </div>
            </div>

            <div data-topic="true" tabIndex={0} className="mt-8">
              <div data-topic-title="true" className="text-2xl mb-4">Principais Desafios</div>
              <div data-paragraph="true" className="mb-4">
                Pessoas com deficiências visuais, auditivas, cognitivas ou motoras enfrentam barreiras 
                diárias ao tentar acessar conteúdos digitais. Sites sem contraste adequado, vídeos sem 
                legendas, formulários sem labels apropriados e navegação impossível via teclado são apenas 
                alguns dos obstáculos comuns.
              </div>
              <div data-paragraph="true">
                A falta de acessibilidade não afeta apenas pessoas com deficiências permanentes. Situações 
                temporárias, como um braço quebrado, ou contextuais, como estar em um ambiente barulhento, 
                também podem criar necessidades de acessibilidade.
              </div>
            </div>

            <div data-topic="true" tabIndex={0} className="mt-8">
              <div data-topic-title="true" className="text-2xl mb-4">Soluções e Boas Práticas</div>
              <div data-paragraph="true" className="mb-4">
                Implementar acessibilidade digital requer atenção a diversos aspectos técnicos e de design. 
                O uso correto de HTML semântico, atributos ARIA, textos alternativos para imagens, contraste 
                adequado de cores e navegação por teclado são fundamentais.
              </div>
              <div data-paragraph="true">
                Ferramentas de teste automatizado podem ajudar a identificar problemas, mas a avaliação 
                manual e testes com usuários reais são essenciais para garantir uma experiência 
                verdadeiramente acessível.
              </div>
            </div>

            <div data-topic="true" tabIndex={0} className="mt-8">
              <div data-topic-title="true" className="text-2xl mb-4">Benefícios para Todos</div>
              <div data-paragraph="true" className="mb-4">
                Um site acessível beneficia não apenas pessoas com deficiências, mas todos os usuários. 
                Melhorias em acessibilidade frequentemente resultam em melhor usabilidade geral, SEO 
                aprimorado e maior alcance de público.
              </div>
              <div data-paragraph="true">
                Empresas que investem em acessibilidade demonstram responsabilidade social e frequentemente 
                observam retornos positivos em termos de imagem de marca e satisfação do cliente.
              </div>
            </div>

            <figure className="my-8 rounded-xl overflow-hidden" style={imageCorrectionStyle}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                alt={accessibleMode ? "Grupo de três pessoas diversas em um ambiente de trabalho colaborativo, sorrindo e olhando para um laptop, expressando felicidade e sucesso." : "imagem de pessoas em uma mesa"}
                className="w-full h-auto object-cover"
              />
              {accessibleMode && (
                <figcaption className="sr-only">
                  A imagem retrata um ambiente de trabalho positivo e inclusivo, onde a colaboração e a tecnologia andam juntas.
                </figcaption>
              )}
            </figure>

            <div data-topic="true" tabIndex={0} className="mt-8">
              <div data-topic-title="true" className="text-2xl mb-4">Conclusão</div>
              <div data-paragraph="true" className="mb-4">
                A acessibilidade digital é uma jornada contínua que requer comprometimento, educação e 
                prática constante. Ao criar produtos digitais inclusivos, contribuímos para uma internet 
                mais justa e acessível para todos.
              </div>
              <div data-paragraph="true">
                Cada pequeno passo em direção à acessibilidade faz diferença. Seja adicionando textos 
                alternativos, melhorando o contraste ou garantindo navegação por teclado, estamos 
                construindo um futuro digital mais inclusivo.
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button 
                className={getButtonClass()}
                aria-label="Saiba mais sobre acessibilidade digital"
              >
                Saiba Mais
              </button>
              <button 
                className={getSecondaryButtonClass()}
                aria-label="Compartilhar este artigo"
              >
                Compartilhar
              </button>
            </div>
          </div>
        ) : (
          // MODO ACESSÍVEL ORIGINAL (OUTRAS DEFICIÊNCIAS)
          <main>
            {/* DALTONISMO: Add visual indicators beyond color */}
            {disabilityType === 'daltonismo' && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8" role="note">
                <p className="flex items-center gap-2">
                  <span className="text-2xl">ℹ️</span>
                  <strong>Modo Acessível Ativo:</strong> Informações agora usam ícones e padrões além de cores
                </p>
              </div>
            )}

            {/* TDAH: Simplified, scannable content */}
            {disabilityType === 'tdah' && (
              <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8" role="note">
                <p className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <strong>Sem Distrações:</strong> Conteúdo organizado, sem pop-ups ou animações
                </p>
              </div>
            )}

            {/* AUDITIVA: Show transcript availability */}
            {disabilityType === 'auditiva' && (
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-8" role="note">
                <p className="flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  <strong>Transcrição Disponível:</strong> Todo conteúdo de áudio possui alternativa textual
                </p>
              </div>
            )}

            {/* AUTISMO: Simplified interface indicator */}
            {disabilityType === 'autismo' && (
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-8" role="note">
                <p className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <strong>Interface Simplificada:</strong> Sem animações automáticas, estímulos reduzidos
                </p>
              </div>
            )}

            <section aria-labelledby="intro-section">
              <h2 id="intro-section">Introdução</h2>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                A acessibilidade digital não é apenas uma questão de conformidade legal, mas uma questão 
                fundamental de inclusão e direitos humanos. No mundo cada vez mais digitalizado, garantir 
                que todos possam acessar e utilizar conteúdos e serviços online é essencial.
              </p>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Segundo a Organização Mundial da Saúde, mais de 1 bilhão de pessoas no mundo vivem com 
                algum tipo de deficiência. Isso representa aproximadamente 15% da população global. 
                Além disso, com o envelhecimento da população, esse número tende a crescer significativamente.
              </p>
            </section>

            <section aria-labelledby="challenges-section">
              <h2 id="challenges-section">Principais Desafios</h2>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Pessoas com deficiências visuais, auditivas, cognitivas ou motoras enfrentam barreiras 
                diárias ao tentar acessar conteúdos digitais. Sites sem contraste adequado, vídeos sem 
                legendas, formulários sem labels apropriados e navegação impossível via teclado são apenas 
                alguns dos obstáculos comuns.
              </p>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                A falta de acessibilidade não afeta apenas pessoas com deficiências permanentes. Situações 
                temporárias, como um braço quebrado, ou contextuais, como estar em um ambiente barulhento, 
                também podem criar necessidades de acessibilidade.
              </p>
            </section>

            <section aria-labelledby="solutions-section">
              <h2 id="solutions-section">Soluções e Boas Práticas</h2>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Implementar acessibilidade digital requer atenção a diversos aspectos técnicos e de design. 
                O uso correto de HTML semântico, atributos ARIA, textos alternativos para imagens, contraste 
                adequado de cores e navegação por teclado são fundamentais.
              </p>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Ferramentas de teste automatizado podem ajudar a identificar problemas, mas a avaliação 
                manual e testes com usuários reais são essenciais para garantir uma experiência 
                verdadeiramente acessível.
              </p>
            </section>

            <section aria-labelledby="benefits-section">
              <h2 id="benefits-section">Benefícios para Todos</h2>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Um site acessível beneficia não apenas pessoas com deficiências, mas todos os usuários. 
                Melhorias em acessibilidade frequentemente resultam em melhor usabilidade geral, SEO 
                aprimorado e maior alcance de público.
              </p>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Empresas que investem em acessibilidade demonstram responsabilidade social e frequentemente 
                observam retornos positivos em termos de imagem de marca e satisfação do cliente.
              </p>
            </section>

            <figure className="my-8 rounded-xl overflow-hidden" style={imageCorrectionStyle}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                alt={accessibleMode ? "Grupo de três pessoas diversas em um ambiente de trabalho colaborativo, sorrindo e olhando para um laptop, expressando felicidade e sucesso." : "imagem de pessoas em uma mesa"}
                className="w-full h-auto object-cover"
              />
              {accessibleMode && (
                <figcaption className="sr-only">
                  A imagem retrata um ambiente de trabalho positivo e inclusivo, onde a colaboração e a tecnologia andam juntas.
                </figcaption>
              )}
            </figure>

            <section aria-labelledby="conclusion-section">
              <h2 id="conclusion-section">Conclusão</h2>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                A acessibilidade digital é uma jornada contínua que requer comprometimento, educação e 
                prática constante. Ao criar produtos digitais inclusivos, contribuímos para uma internet 
                mais justa e acessível para todos.
              </p>
              <p style={disabilityType === 'dislexia' ? { marginBottom: '1.5rem' } : {}}>
                Cada pequeno passo em direção à acessibilidade faz diferença. Seja adicionando textos 
                alternativos, melhorando o contraste ou garantindo navegação por teclado, estamos 
                construindo um futuro digital mais inclusivo.
              </p>
            </section>

            <div className="mt-12 flex flex-wrap gap-4">
              <button 
                className={getButtonClass()}
                aria-label="Saiba mais sobre acessibilidade digital"
              >
                {disabilityType === 'daltonismo' && <span className="mr-2">✓</span>}
                Saiba Mais
              </button>
              <button 
                className={getSecondaryButtonClass()}
                aria-label="Compartilhar este artigo"
              >
                {disabilityType === 'daltonismo' && <span className="mr-2">↗</span>}
                Compartilhar
              </button>
            </div>
          </main>
        )
      ) : (
        // Non-accessible mode
        <>
          <div tabIndex={0}>
            <div tabIndex={0}>
              A acessibilidade digital não é apenas uma questão de conformidade legal, mas uma questão 
              fundamental de inclusão e direitos humanos. No mundo cada vez mais digitalizado, garantir 
              que todos possam acessar e utilizar conteúdos e serviços online é essencial.
            </div>
            <div className="mt-4" tabIndex={0}>
              Segundo a Organização Mundial da Saúde, mais de 1 bilhão de pessoas no mundo vivem com 
              algum tipo de deficiência. Isso representa aproximadamente 15% da população global. 
              Além disso, com o envelhecimento da população, esse número tende a crescer significativamente.
            </div>
          </div>

          <div className="mt-8">
            <div className="text-2xl mb-4" tabIndex={0}>Principais Desafios</div>
            <div tabIndex={0}>
              Pessoas com deficiências visuais, auditivas, cognitivas ou motoras enfrentam barreiras 
              diárias ao tentar acessar conteúdos digitais. Sites sem contraste adequado, vídeos sem 
              legendas, formulários sem labels apropriados e navegação impossível via teclado são apenas 
              alguns dos obstáculos comuns.
            </div>
            <div className="mt-4" tabIndex={0}>
              A falta de acessibilidade não afeta apenas pessoas com deficiências permanentes. Situações 
              temporárias, como um braço quebrado, ou contextuais, como estar em um ambiente barulhento, 
              também podem criar necessidades de acessibilidade.
            </div>
          </div>

          <div className="mt-8">
            <div className="text-2xl mb-4" tabIndex={0}>Soluções e Boas Práticas</div>
            <div tabIndex={0}>
              Implementar acessibilidade digital requer atenção a diversos aspectos técnicos e de design. 
              O uso correto de HTML semântico, atributos ARIA, textos alternativos para imagens, contraste 
              adequado de cores e navegação por teclado são fundamentais.
            </div>
            <div className="mt-4" tabIndex={0}>
              Ferramentas de teste automatizado podem ajudar a identificar problemas, mas a avaliação 
              manual e testes com usuários reais são essenciais para garantir uma experiência 
              verdadeiramente acessível.
            </div>
          </div>

          <div className="mt-8">
            <div className="text-2xl mb-4" tabIndex={0}>Benefícios para Todos</div>
            <div tabIndex={0}>
              Um site acessível beneficia não apenas pessoas com deficiências, mas todos os usuários. 
              Melhorias em acessibilidade frequentemente resultam em melhor usabilidade geral, SEO 
              aprimorado e maior alcance de público.
            </div>
            <div className="mt-4" tabIndex={0}>
              Empresas que investem em acessibilidade demonstram responsabilidade social e frequentemente 
              observam retornos positivos em termos de imagem de marca e satisfação do cliente.
            </div>
          </div>

          <figure className="my-8 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
              alt={accessibleMode ? "Grupo de três pessoas diversas em um ambiente de trabalho colaborativo, sorrindo e olhando para um laptop, expressando felicidade e sucesso." : "imagem de pessoas em uma mesa"}
              className="w-full h-auto object-cover"
            />
            {accessibleMode && (
              <figcaption className="sr-only">
                A imagem retrata um ambiente de trabalho positivo e inclusivo, onde a colaboração e a tecnologia andam juntas.
              </figcaption>
            )}
          </figure>

          <div className="mt-8">
            <div className="text-2xl mb-4" tabIndex={0}>Conclusão</div>
            <div tabIndex={0}>
              A acessibilidade digital é uma jornada contínua que requer comprometimento, educação e 
              prática constante. Ao criar produtos digitais inclusivos, contribuímos para uma internet 
              mais justa e acessível para todos.
            </div>
            <div className="mt-4" tabIndex={0}>
              Cada pequeno passo em direção à acessibilidade faz diferença. Seja adicionando textos 
              alternativos, melhorando o contraste ou garantindo navegação por teclado, estamos 
              construindo um futuro digital mais inclusivo.
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <div className="bg-blue-600 text-white px-8 py-3 rounded-lg cursor-pointer" tabIndex={0}>
              Saiba Mais
            </div>
            <div className="border-2 border-slate-300 px-8 py-3 rounded-lg cursor-pointer" tabIndex={0}>
              Compartilhar
            </div>
          </div>
        </>
      )}
    </article>
  );
}