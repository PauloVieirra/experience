export default function AuditivaContent() {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-teal-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Deficiência Auditiva: Acessibilidade Além do Som
        </h1>
        <p className="text-lg text-slate-600">
          Compreenda como garantir que todo conteúdo de áudio e vídeo seja acessível para pessoas surdas e com perda auditiva
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-teal-600">🔊</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          A deficiência auditiva abrange uma ampla gama de condições, desde a perda auditiva leve até a surdez profunda. Na web, o conteúdo de áudio e vídeo sem alternativas textuais é inacessível para pessoas com deficiência auditiva.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Mais de <strong>1.5 bilhão de pessoas</strong> vivem com perda auditiva no mundo, e aproximadamente <strong>430 milhões</strong> precisam de reabilitação para perda auditiva, segundo a OMS.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          Imagine um podcast, uma videoaula ou um noticiário em vídeo. Sem legendas ou transcrições, a informação contida nesses formatos é completamente perdida para quem não pode ouvir. O modo "sem acessibilidade" simula essa exclusão, onde o conteúdo de mídia é apresentado sem nenhum suporte textual.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="font-semibold text-red-900 mb-2">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-1">
            <li>• Vídeos sem legendas ou closed captions</li>
            <li>• Áudio sem transcrição textual</li>
            <li>• Podcasts sem arquivo de transcrição</li>
            <li>• Informação importante transmitida apenas oralmente</li>
            <li>• Ausência de Língua de Sinais (Libras)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" demonstra as soluções essenciais:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Legendas (Closed Captions)</h3>
            <p className="text-green-800 text-sm">Vídeos são exibidos com legendas sincronizadas que incluem sons importantes e descrições de áudio.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Transcrições Completas</h3>
            <p className="text-green-800 text-sm">Para conteúdo de áudio, fornecemos uma transcrição textual completa e acessível.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Língua de Sinais</h3>
            <p className="text-green-800 text-sm">Inclusão de intérprete de Língua Brasileira de Sinais (Libras) quando relevante.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Descrição de Áudio</h3>
            <p className="text-green-800 text-sm">Narração que descreve elementos visuais importantes não transmitidos pelo áudio original.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-teal-600 font-bold">→</span>
            <span className="text-slate-700"><strong>Adicione legendas a todos os vídeos</strong> (closed captions que incluem sons)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-600 font-bold">→</span>
            <span className="text-slate-700">Forneça <strong>transcrições para podcasts e áudio</strong></span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>atributo alt para imagens</strong> com conteúdo importante</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-600 font-bold">→</span>
            <span className="text-slate-700">Implemente <strong>WebVTT ou SRT</strong> para sincronizar legendas com vídeos</span>
          </li>
          <li className="flex gap-3">
            <span className="text-teal-600 font-bold">→</span>
            <span className="text-slate-700">Considere <strong>interpretação em Libras</strong> para conteúdo importante</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-2">📚 Referências</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• WCAG 2.1 - Audio and Video Guidelines</li>
          <li>• WebVTT - Formato de Legendas Web</li>
          <li>• Organização Mundial da Saúde - Deafness and Hearing Loss</li>
        </ul>
      </section>
    </div>
  );
}
