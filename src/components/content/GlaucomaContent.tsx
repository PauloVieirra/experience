export default function GlaucomaContent() {
  return (
    <div className="space-y-10">
      <header className="border-b-2 border-green-200 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Glaucoma: Foco no Essencial com Visão de Túnel
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Compreenda como a perda de visão periférica afeta a navegação em páginas com layouts dispersos
        </p>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">👁️</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O glaucoma é uma doença ocular que danifica o nervo óptico e geralmente leva à perda da visão periférica, criando o que é conhecido como "visão de túnel". Imagine olhar o mundo através de um canudo. A visão central pode permanecer nítida por um tempo, mas tudo ao redor se torna escuro.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          O glaucoma afeta mais de <strong>60 milhões de pessoas</strong> no mundo e é a segunda maior causa de cegueira irreversível, segundo a OMS.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          No modo "sem acessibilidade", um layout de site amplo e disperso pode ser um grande problema. Informações importantes, como menus de navegação, notificações ou botões de ação, podem estar localizadas nas bordas da tela, fora do campo de visão de um usuário com glaucoma. A necessidade de "escanear" a página inteira para encontrar informações é frustrante e ineficiente.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded mt-4">
          <p className="font-semibold text-red-900 mb-3">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-2">
            <li>• Conteúdo espalhado pelas laterais da página</li>
            <li>• Sidebars com informações críticas</li>
            <li>• Layouts muito largos (sem max-width)</li>
            <li>• Elementos flutuantes ou fixos nas bordas</li>
            <li>• Navegação não-linear e desorganizada</li>
          </ul>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" adapta o layout para trazer tudo para o campo de visão central:
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Layout Centralizado</h3>
            <p className="text-green-800 text-sm leading-relaxed">O conteúdo principal é apresentado em uma coluna estreita no centro da tela, minimizando a necessidade de mover os olhos.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Ordem de Leitura Lógica</h3>
            <p className="text-green-800 text-sm leading-relaxed">A informação é estruturada de forma linear e previsível, sem surpresas nas laterais da página.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Foco Visível e Proeminente</h3>
            <p className="text-green-800 text-sm leading-relaxed">Um indicador de foco claro ajuda na navegação por teclado e mostra onde o usuário está na página.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-green-900 mb-3">Sem Conteúdo Flutuante</h3>
            <p className="text-green-800 text-sm leading-relaxed">Sidebars, floats e elementos fixos são consolidados no fluxo principal de conteúdo.</p>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-4 mt-4">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">→</span>
            <span className="text-slate-700">Defina um <strong>max-width máximo de 800px</strong> para o conteúdo principal</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha a navegação <strong>visível e acessível no topo</strong> ou incorporada no conteúdo</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">→</span>
            <span className="text-slate-700">Evite sidebars; use um design <strong>mobile-first e linear</strong></span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>skip links</strong> para pular seções rapidamente</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-600 font-bold">→</span>
            <span className="text-slate-700">Agrupe informações relacionadas <strong>visualmente próximas</strong> na página</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
        <h3 className="font-bold text-blue-900 mb-3">📚 Referências</h3>
        <ul className="text-blue-800 space-y-2 text-sm">
          <li>• Organização Mundial da Saúde (OMS) - Glaucoma Fact Sheet</li>
          <li>• WCAG 2.1 - Princípio de Responsividade e Design Acessível</li>
          <li>• The Glaucoma Foundation - Information & Support</li>
        </ul>
      </section>
    </div>
  );
}
