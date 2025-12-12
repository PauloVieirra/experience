interface AutismoContentProps {
  accessibleMode?: boolean;
}

export default function AutismoContent({ accessibleMode = false }: AutismoContentProps) {
  return (
    <div className="space-y-8">
      <header className="border-b-2 border-indigo-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Autismo: Navegando em um Mundo Digital Sensorialmente Amigável
        </h1>
        <p className="text-lg text-slate-600">
          {accessibleMode
            ? "Compreenda como o excesso de estímulos afeta pessoas autistas e como criar interfaces inclusivas"
            : "Entenda como criar experiências digitais que 'conversam' com todos os tipos de mentes"}
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-indigo-600">🧠</span> O que é?
        </h2>
        {accessibleMode ? (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              O Transtorno do Espectro Autista (TEA) afeta como as pessoas percebem o mundo e interagem com os outros. No contexto digital, a sensibilidade sensorial é um fator crucial. Interfaces com muitos estímulos, como animações piscantes, sons inesperados ou layouts complexos, podem ser avassaladoras.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Aproximadamente <strong>1 em cada 100 pessoas</strong> tem autismo, segundo as estimativas internacionais. Pessoas autistas frequentemente processam informações de forma diferente e podem ser sensíveis a certos estímulos visuais ou auditivos.
            </p>
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              "O autismo é como uma sinfonia onde cada instrumento toca em seu próprio ritmo, criando uma melodia única que nem sempre segue a partitura tradicional da sociedade."
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              "No mundo digital, é como se alguns usuários vissem o código fonte da realidade, enquanto outros apenas veem a interface polida - e ambos têm suas próprias 'verdades' sobre como as coisas deveriam funcionar."
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              "Cerca de 1 em cada 100 pessoas dança nessa coreografia diferente, onde os sentidos fazem um balé particular e as regras sociais são mais como sugestões do que leis gravadas em pedra."
            </p>
          </>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-red-600">⚠️</span> O Desafio
        </h2>
        {accessibleMode ? (
          <>
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
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              "O verdadeiro desafio é como 'traduzir' a linguagem dos pixels para aqueles que veem o mundo através de um prisma diferente, onde cada sombra tem significado e cada movimento conta uma história própria."
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              "Imagine tentar dançar tango em uma pista de skate - as regras do jogo mudam completamente quando o cérebro processa informações de forma não-linear."
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-semibold text-red-900 mb-2">Problemas que "quebram o encanto":</p>
              <ul className="text-red-800 space-y-1">
                <li>• "Fogos de artifício visuais" que disparam sem aviso</li>
                <li>• "Sons fantasma" que aparecem do nada</li>
                <li>• "Paletas de cores que gritam" em vez de conversarem</li>
                <li>• "Labirintos digitais" onde nada está onde deveria</li>
                <li>• "Teleporte contextual" que confunde mais do que ajuda</li>
              </ul>
            </div>
          </>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <span className="text-green-600">✓</span> A Solução Acessível
        </h2>
        {accessibleMode ? (
          <>
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
          </>
        ) : (
          <>
            <p className="text-base text-slate-700 leading-relaxed">
              "A solução é criar um 'jardim zen digital' onde cada folha está no lugar certo e o vento das distrações não sopra forte demais."
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              "É como compor uma música onde cada nota é tocada no momento exato, criando harmonia em vez de caos."
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Arquitetura Clara"</h3>
                <p className="text-green-800 text-sm">A casa digital tem cômodos bem organizados, sem portas secretas ou corredores escondidos.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Conversação Direta"</h3>
                <p className="text-green-800 text-sm">As palavras dizem exatamente o que querem dizer, sem jogos de adivinhação ou charadas.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Comando Pessoal"</h3>
                <p className="text-green-800 text-sm">O usuário é o maestro da orquestra digital, decidindo quando e como cada instrumento toca.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">"Estética Minimalista"</h3>
                <p className="text-green-800 text-sm">A pintura digital usa cores suaves, criando uma galeria onde cada obra tem seu espaço.</p>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">💡 Recomendações para Designers e Desenvolvedores</h2>
        {accessibleMode ? (
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
        ) : (
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">→</span>
              <span className="text-slate-700">"Desligue os fogos de artifício visuais" deixando o usuário no comando do espetáculo</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">→</span>
              <span className="text-slate-700">"Ouça o ritmo do sistema" através do prefers-reduced-motion para dançar no compasso certo</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">→</span>
              <span className="text-slate-700">"Dê o microfone ao usuário" para que ele controle quando a música começa ou para</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">→</span>
              <span className="text-slate-700">"Pinte com aquarela, não com spray" mantendo uma paleta que sussurra em vez de gritar</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">→</span>
              <span className="text-slate-700">"Fale a língua do coração" usando palavras que todos entendem sem precisar de dicionário</span>
            </li>
          </ul>
        )}
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
