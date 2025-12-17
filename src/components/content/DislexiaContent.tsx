export default function DislexiaContent() {
  return (
    <div className="space-y-10">
      <header className="border-b-2 border-orange-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Dislexia: Organizando as Palavras no Mundo Digital
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Aprenda como melhorar a legibilidade para pessoas com dislexia através de ajustes de design e tipografia
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-orange-600">📖</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          A dislexia é uma dificuldade de aprendizagem que afeta a leitura e a escrita. Pessoas com dislexia podem ter dificuldade em decodificar palavras, o que torna a leitura de grandes blocos de texto uma tarefa árdua e cansativa. Letras e palavras podem parecer "dançar" na página.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Estima-se que <strong>5-10% da população</strong> tenha algum grau de dislexia, afetando principalmente a leitura e procesamento linguístico.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "sem acessibilidade" pode apresentar um "muro de texto": parágrafos longos, fontes com serifa (os pequenos "pés" nas letras), espaçamento apertado entre linhas e texto justificado (alinhado em ambas as margens), que cria rios de espaço em branco que distraem. Isso pode tornar a leitura extremamente difícil.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mt-4">
          <p className="font-semibold text-red-900 mb-3">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-2">
            <li>• Fontes com serifa (Georgia, Times New Roman)</li>
            <li>• Parágrafos muito longos</li>
            <li>• Espaçamento de linha muito comprimido</li>
            <li>• Texto justificado em ambas as margens</li>
            <li>• Baixa distinção entre palavras próximas</li>
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" aplica as melhores práticas para facilitar a leitura:
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Fontes Amigáveis</h3>
            <p className="text-green-800 text-sm leading-relaxed">Usamos fontes sans-serif que são mais fáceis de ler. Opções como OpenDyslexic são projetadas especificamente para isso.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Espaçamento Generoso</h3>
            <p className="text-green-800 text-sm leading-relaxed">Aumentamos o espaço entre linhas e letras para ajudar a diferenciar as palavras e palavras.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Linhas Curtas</h3>
            <p className="text-green-800 text-sm leading-relaxed">O texto é apresentado em colunas mais estreitas, tornando a quebra de linha mais previsível.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Alinhamento à Esquerda</h3>
            <p className="text-green-800 text-sm leading-relaxed">O texto alinhado à esquerda cria uma margem irregular à direita, servindo como ponto de referência visual.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded md:col-span-2">
            <h3 className="font-bold text-green-900 mb-3">Estrutura Clara</h3>
            <p className="text-green-800 text-sm leading-relaxed">Títulos, listas e parágrafos curtos quebram o conteúdo em pedaços gerenciáveis, facilitando a compreensão.</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-4 mt-4">
          <li className="flex gap-3">
            <span className="text-orange-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>fontes sans-serif</strong> como padrão (Arial, Verdana, Helvetica)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-600 font-bold">→</span>
            <span className="text-slate-700">Defina <strong>line-height de 1.5 a 2.0</strong> para melhor espaçamento</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>letter-spacing de 0.12em</strong> (1.2x o tamanho da letra)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha <strong>linhas com no máximo 60-70 caracteres</strong> de comprimento</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-600 font-bold">→</span>
            <span className="text-slate-700">Alinhe o texto à <strong>esquerda</strong>, nunca justificado</span>
          </li>
          <li className="flex gap-3">
            <span className="text-orange-600 font-bold">→</span>
            <span className="text-slate-700">Divida o conteúdo em <strong>parágrafos curtos</strong> (2-4 linhas)</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
        <h3 className="font-bold text-blue-900 mb-3">📚 Referências</h3>
        <ul className="text-blue-800 space-y-2 text-sm">
          <li>• OpenDyslexic - Fonte de código aberto para dislexia</li>
          <li>• WCAG 2.1 - Diretrizes de Acessibilidade de Conteúdo Web</li>
          <li>• British Dyslexia Association - Accessibility Guidelines</li>
        </ul>
      </section>
    </div>
  );
}
