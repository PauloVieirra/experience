export default function MobilidadeContent() {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-sky-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Deficiência Motora: Navegando na Web Sem o Mouse
        </h1>
        <p className="text-lg text-slate-600">
          Entenda como garantir que a navegação por teclado seja completa, intuitiva e eficiente
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-sky-600">♿</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          As deficiências motoras podem afetar a forma como uma pessoa interage com o computador. Condições como lesões na medula espinhal, paralisia cerebral, ou artrite severa podem tornar o uso de um mouse difícil ou impossível. Muitos usuários com deficiência motora dependem exclusivamente do teclado ou de tecnologias assistivas, como interruptores ou controle por voz.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Estima-se que <strong>16% da população mundial</strong> tenha alguma forma de deficiência motora, incluindo tremores, falta de controle fino, mobilidade limitada e paralisia.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "sem acessibilidade" expõe barreiras comuns. Elementos que só podem ser ativados com um clique do mouse, pequenos botões difíceis de acertar, menus que desaparecem se você não for rápido o suficiente, e a ausência de um indicador de foco visual tornam a navegação por teclado um pesadelo.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="font-semibold text-red-900 mb-2">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-1">
            <li>• Elementos que só funcionam com mouse</li>
            <li>• Botões muito pequenos (< 44x44px)</li>
            <li>• Falta de indicador visual de foco</li>
            <li>• Menus que desaparecem automaticamente</li>
            <li>• Interações que requerem timing preciso</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" implementa os fundamentos da navegação por teclado e interação:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Acessível via Teclado</h3>
            <p className="text-green-800 text-sm">Cada elemento interativo pode ser alcançado com Tab e ativado com Enter/Espaço.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Indicador de Foco Visível</h3>
            <p className="text-green-800 text-sm">Um contorno claro e visível aparece ao redor do elemento em foco.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Grandes Áreas Clicáveis</h3>
            <p className="text-green-800 text-sm">Botões e alvos são de no mínimo 44x44px para facilitar a interação.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Sem Interações Cronometradas</h3>
            <p className="text-green-800 text-sm">Não há conteúdo que exija uma reação rápida ou timing específico.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-sky-600 font-bold">→</span>
            <span className="text-slate-700">Teste a navegação completamente com <strong>apenas o teclado</strong> (Tab, Enter, Arrow Keys)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>outline ou border de 2-3px</strong> para indicar foco (não remova com `outline: none`)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-600 font-bold">→</span>
            <span className="text-slate-700">Implemente <strong>skip links</strong> para pular seções (ex: "Pular para conteúdo principal")</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha <strong>target/hit areas de 44x44px</strong> no mínimo</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>semantic HTML</strong> (button, a, input) em vez de divs clicáveis</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-600 font-bold">→</span>
            <span className="text-slate-700">Evite <strong>hover-only menus</strong>; forneça alternativas navegáveis por teclado</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-2">📚 Referências</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• WCAG 2.1 - Keyboard Accessibility Guidelines</li>
          <li>• WebAIM - Keyboard Accessibility</li>
          <li>• MDN - Accessible Rich Internet Applications (ARIA)</li>
        </ul>
      </section>
    </div>
  );
}
