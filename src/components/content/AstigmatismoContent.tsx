export default function AstigmatismoContent() {
  return (
    <div className="space-y-10">
      <header className="border-b-2 border-yellow-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Astigmatismo: Navegando na Web com Visão Desfocada
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Compreenda como a falta de contraste e fontes finas dificultam a leitura para pessoas com astigmatismo
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-yellow-600">👁️</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O astigmatismo é uma condição ocular comum que causa visão embaçada ou distorcida. Isso acontece porque a córnea ou o cristalino do olho têm uma curvatura irregular, o que impede a luz de focar corretamente na retina. Para um usuário com astigmatismo, textos e imagens na web podem parecer desfocados, especialmente aqueles com fontes finas ou baixo contraste.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Segundo dados da Organização Mundial da Saúde (OMS), aproximadamente <strong>153 milhões de pessoas</strong> sofrem de astigmatismo em todo o mundo, tornando-o um dos problemas de visão mais comuns.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          No modo "sem acessibilidade", você pode notar que o texto é mais difícil de ler. As fontes podem ser muito finas, o contraste entre o texto e o fundo pode ser insuficiente, e alguns elementos podem ter efeitos de brilho ou desfoque que pioram a legibilidade.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mt-4">
          <p className="font-semibold text-red-900 mb-3">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-2">
            <li>• Fontes finas (peso 300 ou inferior)</li>
            <li>• Contraste baixo entre texto e fundo</li>
            <li>• Tamanho de fonte muito pequeno</li>
            <li>• Effeitos de sombra ou brilho excessivo</li>
            <li>• Espaçamento de linha muito apertado</li>
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          Ao ativar o modo "com acessibilidade", aplicamos várias melhorias que transformam a experiência de leitura:
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Fontes Claras e Pesadas</h3>
            <p className="text-green-800 text-sm leading-relaxed">Usamos fontes com peso de 500 ou superior, bem definidas e fáceis de ler em todas as tamanhos.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Alto Contraste</h3>
            <p className="text-green-800 text-sm leading-relaxed">Aumentamos o contraste entre o texto e o fundo para tornar as letras mais nítidas e legíveis.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Sem Efeitos Disruptivos</h3>
            <p className="text-green-800 text-sm leading-relaxed">Removemos quaisquer efeitos de sombra, brilho ou desfoque que possam afetar a legibilidade.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Espaçamento Generoso</h3>
            <p className="text-green-800 text-sm leading-relaxed">Aumentamos o espaço entre linhas e letras para melhorar a clareza visual e reduzir fadiga ocular.</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-4 mt-4">
          <li className="flex gap-3">
            <span className="text-yellow-600 font-bold">→</span>
            <span className="text-slate-700">Use tamanhos de fonte de pelo menos <strong>16px</strong> para corpo de texto em telas desktop</span>
          </li>
          <li className="flex gap-3">
            <span className="text-yellow-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha uma proporção de contraste de pelo menos <strong>4.5:1</strong> para texto pequeno (conforme WCAG 2.1)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-yellow-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>line-height de 1.5 ou superior</strong> para melhor legibilidade</span>
          </li>
          <li className="flex gap-3">
            <span className="text-yellow-600 font-bold">→</span>
            <span className="text-slate-700">Escolha fontes <strong>sans-serif</strong> para conteúdo web (ex: Arial, Helvetica, Verdana)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-yellow-600 font-bold">→</span>
            <span className="text-slate-700">Evite itálico prolongado; use-o apenas para ênfase ocasional</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
        <h3 className="font-bold text-blue-900 mb-3">📚 Referências</h3>
        <ul className="text-blue-800 space-y-2 text-sm">
          <li>• WCAG 2.1 - Web Content Accessibility Guidelines</li>
          <li>• Organização Mundial da Saúde (OMS) - Relatório sobre Visão</li>
          <li>• ISO/IEC 40500:2021 - Accessibility of information and communication technology (ICT)</li>
        </ul>
      </section>
    </div>
  );
}
