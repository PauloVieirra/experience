export default function TDAHContent() {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-purple-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          TDAH: Foco e Clareza em um Mundo Digital Distraído
        </h1>
        <p className="text-lg text-slate-600">
          Entenda como ambientes digitais bem organizados beneficiam pessoas com TDAH
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-purple-600">🎯</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) pode afetar a atenção, o controle de impulsos e a organização. No ambiente digital, isso significa que um site cheio de distrações, com informações desorganizadas e caminhos pouco claros, pode ser incrivelmente difícil de usar.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          O TDAH afeta cerca de <strong>3-5% dos adultos</strong> e <strong>5-7% das crianças</strong> em todo o mundo, tornando-o um dos transtornos do neurodesenvolvimento mais comuns.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
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
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
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
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
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
