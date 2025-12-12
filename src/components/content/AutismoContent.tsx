export default function AutismoContent() {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-indigo-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Autismo: Navegando em um Mundo Digital Sensorialmente Amigável
        </h1>
        <p className="text-lg text-slate-600">
          Compreenda como o excesso de estímulos afeta pessoas autistas e como criar interfaces inclusivas
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-indigo-600">🧠</span> O que é?
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O Transtorno do Espectro Autista (TEA) afeta como as pessoas percebem o mundo e interagem com os outros. No contexto digital, a sensibilidade sensorial é um fator crucial. Interfaces com muitos estímulos, como animações piscantes, sons inesperados ou layouts complexos, podem ser avassaladoras.
        </p>
        <p className="text-base text-slate-700 leading-relaxed">
          Aproximadamente <strong>1 em cada 100 pessoas</strong> tem autismo, segundo as estimativas internacionais. Pessoas autistas frequentemente processam informações de forma diferente e podem ser sensíveis a certos estímulos visuais ou auditivos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "sem acessibilidade" pode apresentar elementos que causam sobrecarga sensorial. Animações que se movem constantemente, botões que emitem sons ao passar o mouse e uma abundância de cores vibrantes podem criar uma experiência estressante e confusa. A linguagem figurativa ou irônica também pode ser de difícil compreensão.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="font-semibold text-red-900 mb-2">Barreiras comuns:</p>
          <ul className="text-red-800 space-y-1">
            <li>• Animações automáticas e contínuas</li>
            <li>• Sons inesperados ao interagir</li>
            <li>• Muitas cores vibrantes ou contrastantes</li>
            <li>• Layouts complexos e desorganizados</li>
            <li>• Mudanças abruptas de contexto</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        <p className="text-base text-slate-700 leading-relaxed">
          O modo "com acessibilidade" foca em criar um ambiente digital calmo e previsível:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Layout Limpo e Consistente</h3>
            <p className="text-green-800 text-sm">A estrutura da página é clara, com seções bem definidas e uma navegação lógica e previsível.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Linguagem Clara e Direta</h3>
            <p className="text-green-800 text-sm">O texto é objetivo, evitando ambiguidades, gírias ou sarcasmo que possam causar confusão.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Controle do Usuário</h3>
            <p className="text-green-800 text-sm">Não há animações ou sons automáticos. O usuário tem controle total sobre a reprodução de qualquer mídia.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-bold text-green-900 mb-2">Design Sóbrio</h3>
            <p className="text-green-800 text-sm">A paleta de cores é suave e o design é minimalista para evitar a sobrecarga visual.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="text-indigo-600 font-bold">→</span>
            <span className="text-slate-700"><strong>Desabilite animações automáticas</strong> por padrão; permita que o usuário as ative</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>prefers-reduced-motion</strong> media query para respeitar preferências do sistema</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-600 font-bold">→</span>
            <span className="text-slate-700">Forneça <strong>controles de som/vídeo</strong> bem visíveis e acessíveis</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-600 font-bold">→</span>
            <span className="text-slate-700">Mantenha uma <strong>paleta de cores limitada</strong> e coerente (máximo 5-6 cores)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-600 font-bold">→</span>
            <span className="text-slate-700">Use <strong>linguagem clara e literal</strong>; evite metáforas complexas</span>
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="font-bold text-blue-900 mb-2">📚 Referências</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• Autism Spectrum Australia - Web Accessibility Guidelines</li>
          <li>• WCAG 2.1 - Animation and Motion Guidelines</li>
          <li>• CSS Media Query: prefers-reduced-motion</li>
        </ul>
      </section>
    </div>
  );
}
