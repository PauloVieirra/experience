export default function EpilepsiaContent() {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-pink-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Epilepsia Fotossensível: Navegação Segura e Sem Gatilhos
        </h1>
        <p className="text-lg text-slate-600">
          Entenda como evitar conteúdo perigoso que pode desencadear convulsões em pessoas com epilepsia fotossensível
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-pink-600">⚡</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          A epilepsia fotossensível é uma condição na qual a exposição a luzes piscantes, padrões geométricos em movimento ou certos efeitos visuais pode desencadear convulsões. Para cerca de <strong>3% das pessoas com epilepsia</strong>, a internet pode ser um campo minado de gatilhos perigosos.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Aproximadamente <strong>65 milhões de pessoas</strong> têm epilepsia no mundo, e entre elas, aquelas com sensibilidade fotógena podem sofrer convulsões causadas por conteúdo web inadequadamente projetado.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "sem acessibilidade" pode conter elementos de alto risco. Animações com flashes rápidos, vídeos que alternam rapidamente entre cenas claras e escuras, ou padrões de listras contrastantes em movimento são extremamente perigosos. O WCAG especifica que conteúdo não deve piscar mais de <strong>3 vezes por segundo</strong>.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="font-semibold text-red-900 mb-2">Barreiras críticas (PERIGOSAS):</p>
          <ul className="text-red-800 space-y-1">
            <li>• <strong>Flashes rápidos</strong> (mais de 3 por segundo)</li>
            <li>• Transições bruscas de cor/luz de alto contraste</li>
            <li>• Padrões geométricos em movimento rápido</li>
            <li>• GIFs animados com mudanças rápidas</li>
            <li>• Vídeos com cenas alternando rapidamente</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          A segurança é a prioridade máxima no modo "com acessibilidade":
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Sem Conteúdo Piscante</h3>
            <p className="text-green-800 text-sm">Nada de flashes. Removemos ou desativamos qualquer animação que contenha luzes piscando rapidamente.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Controle de Mídia</h3>
            <p className="text-green-800 text-sm">Nenhum vídeo ou animação é reproduzido automaticamente. O usuário tem controle total.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Avisos Prévios</h3>
            <p className="text-green-800 text-sm">Se conteúdo potencialmente problemático não puder ser evitado, um aviso claro é exibido.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Transições Suaves</h3>
            <p className="text-green-800 text-sm">Qualquer mudança de cor ou luz ocorre gradualmente, nunca abruptamente.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-pink-600 font-bold">→</span>
            <span className="text-slate-700"><strong>NUNCA crie conteúdo que pisque</strong> mais de 3 vezes por segundo</span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink-600 font-bold">→</span>
            <span className="text-slate-700"><strong>Desabilite reprodução automática</strong> de vídeos e GIFs</span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>transições suaves</strong> com duração mínima de 200ms</span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink-600 font-bold">→</span>
            <span className="text-slate-700">Evite <strong>padrões geométricos contrastantes em movimento</strong></span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink-600 font-bold">→</span>
            <span className="text-slate-700">Teste com <strong>Photosensitive Epilepsy Analysis Tool (PEAT)</strong> da Trace Center</span>
          </li>
          <li className="flex gap-3">
            <span className="text-pink-600 font-bold">→</span>
            <span className="text-slate-700">Inclua <strong>avisos claros</strong> se algum conteúdo contiver piscar (extremamente raro)</span>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">🚨 Importante</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-900 text-base">
            A epilepsia fotossensível é uma condição séria que pode resultar em lesões graves ou até morte. Evitar conteúdo que pisca não é apenas uma recomendação de acessibilidade, é uma questão de <strong>segurança e responsabilidade legal</strong>.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-2">📚 Referências</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• WCAG 2.1 - Three Flashes or Below Threshold (Guideline 2.3.2)</li>
          <li>• PEAT - Photosensitive Epilepsy Analysis Tool (Trace Center)</li>
          <li>• Epilepsy Foundation - Web Accessibility for Photosensitive Users</li>
        </ul>
      </section>
    </div>
  );
}
