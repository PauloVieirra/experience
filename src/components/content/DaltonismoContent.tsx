export default function DaltonismoContent() {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-red-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Daltonismo: Vendo o Mundo Digital em Outras Cores
        </h1>
        <p className="text-lg text-slate-600">
          Aprenda como usar cor de forma responsável garantindo que ninguém dependa apenas dela para entender a informação
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">🎨</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O daltonismo é a dificuldade em distinguir certas cores, como vermelho e verde, ou azul e amarelo. Não se trata de ver o mundo em preto e branco, mas de ter uma percepção de cores diferente da maioria das pessoas. Na web, isso se torna um problema quando a cor é o único meio de transmitir uma informação.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Aproximadamente <strong>8% dos homens</strong> e <strong>0.5% das mulheres</strong> têm alguma forma de daltonismo, afetando cerca de <strong>350 milhões de pessoas</strong> no mundo todo.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          No modo "sem acessibilidade", podemos ver exemplos clássicos de inacessibilidade para daltônicos. Gráficos que usam apenas fatias de pizza coloridas, campos de formulário que indicam erro apenas com uma borda vermelha, ou links que só se diferenciam do texto pela cor são barreiras significativas.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="font-semibold text-red-900 mb-2">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-1">
            <li>• Informação transmitida <strong>apenas por cor</strong></li>
            <li>• Gráficos coloridos sem padrões ou texturas</li>
            <li>• Links que não têm sublinhado ou indicação visual além da cor</li>
            <li>• Campos de formulário com erro indicados apenas em vermelho</li>
            <li>• Contraste insuficiente entre cores</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" mostra como resolver isso, garantindo que a informação não se perca:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Use Mais do que Cor</h3>
            <p className="text-green-800 text-sm">A informação é transmitida por múltiplos canais. Links são sublinhados, campos de erro têm ícones.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Padrões e Texturas</h3>
            <p className="text-green-800 text-sm">Gráficos usam padrões, hachurado ou texturas para diferenciar as seções, não apenas cor.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Contraste Adequado</h3>
            <p className="text-green-800 text-sm">Garantir um bom contraste de luminosidade entre o texto e o fundo é crucial, independentemente da cor.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Rótulos e Textos</h3>
            <p className="text-green-800 text-sm">Informações importantes são sempre acompanhadas de texto claro. O botão diz "Confirmar", não apenas é verde.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-red-600 font-bold">→</span>
            <span className="text-slate-700"><strong>NUNCA use apenas cor</strong> para transmitir informação importante</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>rótulos, ícones e símbolos</strong> junto com cor</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha um <strong>contraste de luminância de 4.5:1</strong> para texto</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 font-bold">→</span>
            <span className="text-slate-700">Em gráficos, use <strong>padrões, números ou legendas</strong> além das cores</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 font-bold">→</span>
            <span className="text-slate-700">Teste seu site com <strong>simuladores de daltonismo</strong> (ex: Color Blindness Simulator)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-600 font-bold">→</span>
            <span className="text-slate-700">Use paletas de cores <strong>daltonismo-amigáveis</strong> (Okabe-Ito, Viridis, etc.)</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-2">📚 Referências</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• Colorblind Web Page Filter - Simula diferentes tipos de daltonismo</li>
          <li>• WCAG 2.1 - Color and Contrast Requirements</li>
          <li>• Okabe-Ito Colorblind Palette - Paleta amigável para daltônicos</li>
        </ul>
      </section>
    </div>
  );
}
