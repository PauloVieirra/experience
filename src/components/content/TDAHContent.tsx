import { useState, useEffect } from 'react';

interface TDAHContentProps {
  accessibleMode?: boolean;
}

export default function TDAHContent({ accessibleMode = false }: TDAHContentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showFloatingAd, setShowFloatingAd] = useState(false);
  const [showInlineAd, setShowInlineAd] = useState(false);
  const [canShowModal, setCanShowModal] = useState(true);

  useEffect(() => {
    if (!accessibleMode) {
      // Mostrar anúncio flutuante
      const floatingTimer = setTimeout(() => setShowFloatingAd(true), 5000);

      // Mostrar anúncio inline no meio do texto
      const inlineTimer = setTimeout(() => setShowInlineAd(true), 2000);

      return () => {
        clearTimeout(floatingTimer);
        clearTimeout(inlineTimer);
      };
    } else {
      setShowModal(false);
      setShowFloatingAd(false);
      setShowInlineAd(false);
      setCanShowModal(true);
    }
  }, [accessibleMode]);

  const handleCloseModal = () => {
    setShowModal(false);
    setCanShowModal(false); // Impede que o modal abra automaticamente novamente
  };

  const handleMouseEnterTrigger = () => {
    if (!accessibleMode && canShowModal && !showModal) {
      setShowModal(true);
    }
  };

  const handleInlineAdClick = () => {
    if (!accessibleMode && canShowModal && !showModal) {
      setShowModal(true);
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* Modal distrativo */}
      {showModal && !accessibleMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-yellow-400 p-6 rounded-lg shadow-xl max-w-md animate-bounce">
            <h3 className="text-xl font-bold text-yellow-900 mb-4">🎉 OFERTA ESPECIAL! 🎉</h3>
            <p className="text-yellow-800 mb-4">Compre AGORA e ganhe 50% de desconto em qualquer produto!</p>
            <div className="flex gap-4">
              <button
                onClick={handleCloseModal}
                className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Fechar
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded animate-pulse">
                COMPRAR AGORA!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Anúncio flutuante */}
      {showFloatingAd && !accessibleMode && (
        <div className="fixed top-1/2 right-4 bg-red-500 text-white p-4 rounded-lg shadow-xl animate-pulse z-40">
          <div className="text-sm font-bold">⚡ OFERTA LIMITADA ⚡</div>
          <div className="text-xs">Clique aqui para não perder!</div>
          <button
            onClick={() => setShowFloatingAd(false)}
            className="absolute top-1 right-1 text-red-200 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      <header className="border-b-2 border-purple-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          TDAH: Foco e Clareza em um Mundo Digital Distraído
        </h1>
        <p className="text-lg text-slate-600">
          {accessibleMode
            ? "Entenda como ambientes digitais bem organizados beneficiam pessoas com TDAH"
            : "Descubra como o mundo digital pode ser uma montanha-russa de atenção!"}
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-purple-600">🎯</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          {accessibleMode ? (
            <>
              O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) pode afetar a atenção, o controle de impulsos e a organização. No ambiente digital, isso significa que um site cheio de distrações, com informações desorganizadas e caminhos pouco claros, pode ser incrivelmente difícil de usar.
            </>
          ) : (
            <>
              <span
                className="bg-blue-200 px-2 py-1 rounded cursor-pointer hover:bg-blue-300 transition-colors"
                onMouseEnter={handleMouseEnterTrigger}
              >
                O TDAH é como uma
              </span>{' '}
              <span
                className="bg-green-200 px-2 py-1 rounded cursor-pointer hover:bg-green-300 transition-colors animate-pulse"
                onClick={handleInlineAdClick}
              >
                montanha-russa mental
              </span>{' '}
              onde a atenção vai e vem como um ioiô hiperativo! No mundo digital, é como tentar ler um livro enquanto alguém joga confete colorido no ar.
            </>
          )}
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          {accessibleMode ? (
            <>
              O TDAH afeta cerca de <strong>3-5% dos adultos</strong> e <strong>5-7% das crianças</strong> em todo o mundo, tornando-o um dos transtornos do neurodesenvolvimento mais comuns.
            </>
          ) : (
            <>
              Estatísticas mostram que <strong>3-5% dos adultos</strong> e até <strong>7% das crianças</strong> têm essa "superpotência da distração" que transforma o foco em uma dança caótica!
            </>
          )}
        </p>

        {/* Anúncio inline no meio do texto */}
        
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        {accessibleMode ? (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              O modo "sem acessibilidade" pode ser um campo minado para a atenção. Anúncios piscantes, vídeos em reprodução automática, pop-ups que exigem ação imediata e múltiplos "call-to-action" competindo pela sua atenção podem sobrecarregar a função executiva e tornar a conclusão de uma tarefa quase impossível.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-semibold text-red-900 mb-2">Barreiras comuns:</p>
              <ul className="text-red-800 space-y-1">
                <li>• Pop-ups e modais inesperados</li>
                <li>• Vídeos e anúncios em reprodução automática</li>
                <li>• Múltiplos "call-to-action" na mesma página</li>
                <li>• Conteúdo desorganizado e confuso</li>
                <li>• Animações piscantes e chamativas</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              <span
                className="bg-red-200 px-2 py-1 rounded cursor-pointer hover:bg-red-300 transition-colors"
                onMouseEnter={handleMouseEnterTrigger}
              >
                Imagine uma página web como uma festa caótica
              </span>{' '}
              onde todos os convidados gritam ao mesmo tempo, as luzes piscam como discoteca, e você precisa encontrar uma agulha no palheiro enquanto dança salsa!
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              É como tentar cozinhar um jantar romântico enquanto o telefone toca, a campainha toca, e alguém joga fogos de artifício na cozinha!
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-semibold text-red-900 mb-2">Armadilhas da distração:</p>
              <ul className="text-red-800 space-y-1">
                <li>• "Festas surpresa digitais" que pulam na tela</li>
                <li>• "Shows pirotécnicos visuais" que piscam sem parar</li>
                <li>• "Bandas musicais automáticas" que tocam sem permissão</li>
                <li>• "Malabaristas de botões" competindo pela atenção</li>
                <li>• "Labirintos informativos" onde nada faz sentido</li>
              </ul>
            </div>
          </>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        {accessibleMode ? (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              O modo "com acessibilidade" visa criar um caminho claro e sem distrações para o usuário:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">Um Objetivo de Cada Vez</h3>
                <p className="text-green-800 text-sm">A página tem um foco claro e um único "call-to-action" principal, tornando o objetivo evidente.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">Mínimo de Distrações</h3>
                <p className="text-green-800 text-sm">Elementos desnecessários são removidos. Não há conteúdo que se mova ou mude sem a interação do usuário.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">Conteúdo Escaneável</h3>
                <p className="text-green-800 text-sm">O texto é dividido em seções curtas com títulos. Listas e negrito destacam informações importantes.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">Feedback Imediato e Claro</h3>
                <p className="text-green-800 text-sm">Quando o usuário realiza uma ação, há feedback claro de que foi recebida e do que vai acontecer.</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              A solução é transformar o caos digital em uma{' '}
              <span
                className="bg-green-200 px-2 py-1 rounded cursor-pointer hover:bg-green-300 transition-colors"
                onMouseEnter={handleMouseEnterTrigger}
              >
                meditação zen digital
              </span>{' '}
              onde cada elemento sabe seu lugar e não compete por atenção!
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              É como organizar uma biblioteca onde cada livro está na prateleira certa e não há barulho de fundo distraindo a leitura.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Foco Laser"</h3>
                <p className="text-green-800 text-sm">A página tem uma missão clara, como um farol guiando o navio através da neblina.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Jardim Tranquilo"</h3>
                <p className="text-green-800 text-sm">Elementos distrativos são podados como ervas daninhas em um jardim bem cuidado.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Mapa Clara"</h3>
                <p className="text-green-800 text-sm">O conteúdo é dividido em capítulos curtos com títulos que funcionam como placas de sinalização.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Diálogo Honesto"</h3>
                <p className="text-green-800 text-sm">Cada ação recebe uma resposta clara, como uma conversa entre amigos confiáveis.</p>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        {accessibleMode ? (
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700"><strong>Elimine pop-ups automáticos</strong>; crie navegação clara em vez disso</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700"><strong>Desabilite reprodução automática</strong> de vídeos e áudio por padrão</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">Mantenha apenas <strong>1-2 call-to-actions por página</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">Use <strong>headings, listas e parágrafos curtos</strong> para escaneabilidade</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">Forneça <strong>navegação clara</strong> com breadcrumbs e indicadores de localização</span>
            </li>
          </ul>
        ) : (
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">"Bane festas surpresa digitais" criando caminhos claros em vez de labirintos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">"Silencie os DJs automáticos" deixando o usuário escolher quando ouvir música</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">"Limite o buffet de ações" a apenas 1-2 opções principais por página</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">"Crie um índice inteligente" com títulos e listas que funcionem como mapa</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600 font-bold">→</span>
              <span className="text-slate-700">"Instale placas de sinalização digitais" para que usuários saibam sempre onde estão</span>
            </li>
          </ul>
        )}
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-2">📚 Referências</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• ADHD & Accessibility - National Center for Learning Disabilities</li>
          <li>• WCAG 2.1 - Motion and Animation Guidelines</li>
          <li>• Web Design for ADHD - WebAIM Guidelines</li>
        </ul>
      </section>
    </div>
  );
}
