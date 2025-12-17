export default function CatarataContent() {
  return (
    <div className="space-y-10">
      <header className="border-b-2 border-blue-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Catarata: Uma Janela Embaçada para a Web
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Compreenda como alto contraste e fontes claras melhoram significativamente a acessibilidade para pessoas com catarata
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-blue-600">👁️</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          A catarata é a opacificação do cristalino, a lente natural do olho, o que torna a visão progressivamente embaçada, como se estivesse olhando através de um vidro fosco. Cores podem parecer desbotadas e a visão noturna pode ser particularmente prejudicada.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          A catarata é a <strong>principal causa de cegueira reversível</strong> no mundo, afetando mais de <strong>24 milhões de pessoas</strong>, muitas das quais não têm acesso a cirurgia.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          No modo "sem acessibilidade", a experiência simula essa visão turva. O texto pode ter baixo contraste, as cores podem ser lavadas e a falta de nitidez geral torna a leitura cansativa e difícil. É como tentar ler um jornal com o óculos sujo.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mt-4">
          <p className="font-semibold text-red-900 mb-3">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-2">
            <li>• Baixo contraste entre texto e fundo</li>
            <li>• Cores desbotadas ou "lavadas"</li>
            <li>• Tamanho de fonte pequeno</li>
            <li>• Imagens desfocadas ou embaçadas</li>
            <li>• Falta de possibilidade de ampliar</li>
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" combate esses problemas com medidas diretas:
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Contraste Elevado</h3>
            <p className="text-green-800 text-sm leading-relaxed">Aumentamos drasticamente o contraste. Texto preto sobre fundo branco é o padrão mais eficaz.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Fontes Maiores e Nítidas</h3>
            <p className="text-green-800 text-sm leading-relaxed">Tamanho de fonte é aumentado (18px+) e usamos estilos que são claros e bem definidos.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Cores Vivas</h3>
            <p className="text-green-800 text-sm leading-relaxed">Quando cores são usadas, elas são vibrantes e bem diferenciadas para evitar aparência lavada.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Possibilidade de Ampliação</h3>
            <p className="text-green-800 text-sm leading-relaxed">O conteúdo é responsivo e permitindo até 200% de zoom sem perda de funcionalidade.</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-4 mt-4">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha um <strong>contraste de 7:1</strong> para texto pequeno (AAA rating)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>tamanho de fonte de no mínimo 16px</strong> para corpo de texto</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">→</span>
            <span className="text-slate-700">Permitir <strong>zoom até 200%</strong> sem perda de funcionalidade</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>fontes sans-serif</strong> claras (Arial, Helvetica, Verdana)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">→</span>
            <span className="text-slate-700">Não defina <strong>maximum-scale=1</strong> no viewport (impede zoom)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>imagens de alta qualidade</strong> e evite desfoque</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
        <h3 className="font-bold text-blue-900 mb-3">📚 Referências</h3>
        <ul className="text-blue-800 space-y-2 text-sm">
          <li>• WCAG 2.1 - Contrast and Zoom Requirements</li>
          <li>• Organização Mundial da Saúde - Cataract Fact Sheet</li>
          <li>• WebAIM - Contrast Checker Tool</li>
        </ul>
      </section>
    </div>
  );
}
