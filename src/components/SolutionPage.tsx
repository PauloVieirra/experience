import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Code, Eye } from 'lucide-react';
import { Button } from './ui/button';

interface Solution {
  name: string;
  problems: string[];
  solutions: Array<{
    title: string;
    description: string;
    code?: string;
  }>;
  wcagGuidelines: string[];
}

const solutions: Record<string, Solution> = {
  catarata: {
    name: 'Catarata',
    problems: [
      'Texto com contraste insuficiente dificulta a leitura',
      'Elementos pequenos são impossíveis de distinguir',
      'Falta de controle de zoom prejudica a experiência'
    ],
    solutions: [
      {
        title: 'Contraste Adequado',
        description: 'Use proporção de contraste mínima de 4.5:1 para texto normal e 3:1 para texto grande',
        code: '/* Bom contraste */\ncolor: #000000;\nbackground: #FFFFFF;\n\n/* Evite */\ncolor: #999999;\nbackground: #CCCCCC;'
      },
      {
        title: 'Tamanhos Ajustáveis',
        description: 'Permita zoom até 200% sem perda de funcionalidade e use unidades relativas',
        code: '/* Use rem/em ao invés de px */\nfont-size: 1rem;\npadding: 1.5rem;'
      },
      {
        title: 'Hierarquia Visual Clara',
        description: 'Use tamanhos e pesos de fonte distintos para criar hierarquia'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 1.4.3 Contraste Mínimo', 'WCAG 2.1 - 1.4.4 Redimensionar Texto']
  },
  glaucoma: {
    name: 'Glaucoma',
    problems: [
      'Navegação com menu nas bordas é difícil de acessar',
      'Conteúdo importante nas extremidades fica invisível',
      'Falta de indicadores de foco dificulta navegação por teclado'
    ],
    solutions: [
      {
        title: 'Layout Centralizado',
        description: 'Mantenha conteúdo importante no centro da tela',
        code: 'max-width: 1200px;\nmargin: 0 auto;\npadding: 2rem;'
      },
      {
        title: 'Indicadores de Foco Visíveis',
        description: 'Use bordas ou contornos claros para elementos com foco',
        code: 'button:focus {\n  outline: 3px solid #005fcc;\n  outline-offset: 2px;\n}'
      },
      {
        title: 'Navegação por Teclado',
        description: 'Garanta que toda funcionalidade seja acessível via teclado'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 2.4.7 Foco Visível', 'WCAG 2.1 - 2.1.1 Teclado']
  },
  astigmatismo: {
    name: 'Astigmatismo',
    problems: [
      'Fontes muito finas ou decorativas são ilegíveis',
      'Claridade excessiva causa desconforto',
      'Falta de espaçamento adequado dificulta leitura'
    ],
    solutions: [
      {
        title: 'Fontes Legíveis',
        description: 'Use fontes sans-serif com peso adequado',
        code: 'font-family: -apple-system, system-ui, sans-serif;\nfont-weight: 400;\nletter-spacing: 0.01em;'
      },
      {
        title: 'Modo Escuro',
        description: 'Ofereça alternativa de tema escuro para reduzir brilho'
      },
      {
        title: 'Espaçamento Generoso',
        description: 'Use line-height adequado e espaço entre parágrafos',
        code: 'line-height: 1.5;\nmargin-bottom: 1.5rem;'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 1.4.8 Apresentação Visual', 'WCAG 2.1 - 1.4.12 Espaçamento de Texto']
  },
  daltonismo: {
    name: 'Daltonismo',
    problems: [
      'Informação comunicada apenas por cor',
      'Botões de "sucesso" e "erro" indistinguíveis',
      'Gráficos sem padrões alternativos'
    ],
    solutions: [
      {
        title: 'Não Dependa Apenas da Cor',
        description: 'Use ícones, padrões e texto além da cor',
        code: '/* Adicione ícones */\n<button className="success">\n  <CheckIcon /> Sucesso\n</button>'
      },
      {
        title: 'Padrões em Gráficos',
        description: 'Use texturas e padrões em gráficos e visualizações',
        code: '/* Use padrões SVG */\n<pattern id="dots">\n  <circle r="2" />\n</pattern>'
      },
      {
        title: 'Teste com Simuladores',
        description: 'Use ferramentas como ColorOracle para testar suas interfaces'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 1.4.1 Uso de Cor', 'WCAG 2.1 - 1.4.11 Contraste Não-Textual']
  },
  dislexia: {
    name: 'Dislexia',
    problems: [
      'Texto justificado cria espaçamento irregular',
      'Parágrafos muito longos sem quebras',
      'Falta de opção para ajustar espaçamento'
    ],
    solutions: [
      {
        title: 'Alinhamento à Esquerda',
        description: 'Evite texto justificado, use alinhamento à esquerda',
        code: 'text-align: left;\n/* Nunca use */\ntext-align: justify;'
      },
      {
        title: 'Espaçamento Ajustável',
        description: 'Permita ajuste de espaçamento entre letras, palavras e linhas',
        code: 'letter-spacing: 0.12em;\nword-spacing: 0.16em;\nline-height: 1.5;'
      },
      {
        title: 'Parágrafos Curtos',
        description: 'Divida conteúdo em parágrafos menores e use subtítulos frequentes'
      },
      {
        title: 'Fonte Amigável',
        description: 'Considere fontes como OpenDyslexic ou sans-serif simples'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 1.4.8 Apresentação Visual', 'WCAG 2.1 - 1.4.12 Espaçamento de Texto']
  },
  autismo: {
    name: 'Autismo',
    problems: [
      'Animações automáticas e piscantes causam sobrecarga',
      'Múltiplos estímulos simultâneos (áudio + visual)',
      'Navegação complexa e inconsistente'
    ],
    solutions: [
      {
        title: 'Controle de Animações',
        description: 'Respeite prefers-reduced-motion e ofereça controle',
        code: '@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n}'
      },
      {
        title: 'Interface Limpa',
        description: 'Evite excesso de elementos visuais, mantenha design minimalista'
      },
      {
        title: 'Navegação Consistente',
        description: 'Use padrões previsíveis em toda a aplicação',
        code: '/* Menu sempre no mesmo local */\n<nav aria-label="Principal">\n  {/* items consistentes */}\n</nav>'
      },
      {
        title: 'Sem Autoplay',
        description: 'Nunca reproduza áudio ou vídeo automaticamente'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 2.2.2 Pausar, Parar, Ocultar', 'WCAG 2.1 - 2.3.1 Três Flashes']
  },
  tdah: {
    name: 'TDAH',
    problems: [
      'Conteúdo muito longo sem organização',
      'Anúncios e pop-ups constantes desviam atenção',
      'Falta de indicadores de progresso'
    ],
    solutions: [
      {
        title: 'Conteúdo Escaneável',
        description: 'Use listas, títulos descritivos e destaque informações importantes'
      },
      {
        title: 'Minimize Distrações',
        description: 'Evite anúncios intrusivos e elementos em movimento',
        code: '/* Evite autoplay e movimento */\nautoplay={false}\nloop={false}'
      },
      {
        title: 'Indicadores de Progresso',
        description: 'Mostre onde o usuário está em processos longos',
        code: '<ProgressBar \n  current={step} \n  total={totalSteps}\n  aria-label="Etapa 2 de 5"\n/>'
      },
      {
        title: 'Divisão em Etapas',
        description: 'Quebre formulários e tarefas longas em partes menores'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 2.4.10 Cabeçalhos de Seção', 'WCAG 2.1 - 3.2.3 Navegação Consistente']
  },
  auditiva: {
    name: 'Deficiência Auditiva',
    problems: [
      'Vídeos sem legendas ou transcrições',
      'Alertas apenas sonoros',
      'Conteúdo de áudio sem alternativa visual'
    ],
    solutions: [
      {
        title: 'Legendas em Vídeos',
        description: 'Forneça legendas sincronizadas (closed captions)',
        code: '<video>\n  <track kind="captions" \n    src="legendas.vtt" \n    srclang="pt-BR" \n    label="Português"/>\n</video>'
      },
      {
        title: 'Transcrições Textuais',
        description: 'Ofereça transcrição completa de conteúdo de áudio'
      },
      {
        title: 'Alertas Visuais',
        description: 'Complemente alertas sonoros com indicações visuais',
        code: '/* Toast visual + sonoro */\nshowToast({\n  message: "Erro ao salvar",\n  type: "error",\n  icon: <AlertIcon />\n});'
      },
      {
        title: 'Indicadores Visuais',
        description: 'Use ícones e animações para comunicar eventos'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 1.2.2 Legendas (Pré-gravadas)', 'WCAG 2.1 - 1.2.8 Alternativa em Mídia']
  },
  mobilidade: {
    name: 'Mobilidade Reduzida',
    problems: [
      'Alvos de clique muito pequenos',
      'Gestos complexos necessários',
      'Timeout curto em interações'
    ],
    solutions: [
      {
        title: 'Áreas de Toque Grandes',
        description: 'Use mínimo de 44x44px para alvos de toque',
        code: 'button {\n  min-width: 44px;\n  min-height: 44px;\n  padding: 12px 24px;\n}'
      },
      {
        title: 'Navegação por Teclado',
        description: 'Garanta acesso completo via teclado',
        code: '<button \n  onClick={handleClick}\n  onKeyDown={(e) => {\n    if (e.key === "Enter" || e.key === " ") {\n      handleClick();\n    }\n  }}\n>'
      },
      {
        title: 'Evite Gestos Complexos',
        description: 'Forneça alternativas para gestos multi-toque'
      },
      {
        title: 'Tempo Adequado',
        description: 'Permita desabilitar ou estender limites de tempo',
        code: '<TimeoutWarning\n  onExtend={() => extendSession()}\n  duration={120}\n/>'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 2.5.5 Tamanho do Alvo', 'WCAG 2.1 - 2.1.1 Teclado']
  },
  epilepsia: {
    name: 'Epilepsia',
    problems: [
      'Elementos piscando rapidamente',
      'Transições e animações agressivas',
      'Falta de aviso sobre conteúdo sensível'
    ],
    solutions: [
      {
        title: 'Evite Flashes',
        description: 'Nunca use elementos que piscam mais de 3 vezes por segundo',
        code: '/* NUNCA faça isso */\nanimation: flash 0.1s infinite;\n\n/* Seguro */\nanimation: fade 2s ease-in-out;'
      },
      {
        title: 'Avisos de Conteúdo',
        description: 'Alerte sobre conteúdo que possa causar convulsões'
      },
      {
        title: 'Controle de Movimento',
        description: 'Respeite prefers-reduced-motion',
        code: '@media (prefers-reduced-motion: reduce) {\n  .animated {\n    animation: none;\n    transition: none;\n  }\n}'
      },
      {
        title: 'Botão de Pausa',
        description: 'Permita pausar qualquer conteúdo em movimento'
      }
    ],
    wcagGuidelines: ['WCAG 2.1 - 2.3.1 Três Flashes ou Abaixo do Limite', 'WCAG 2.1 - 2.3.2 Três Flashes']
  }
};

export default function SolutionPage() {
  const { type } = useParams<{ type: string }>();
  const solution = type ? solutions[type] : null;

  if (!solution) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Solução não encontrada</h2>
          <Link to="/">
            <Button>Voltar para Início</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to={`/simulation/${type}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4">
            <ArrowLeft className="w-5 h-5" />
            Voltar para Simulação
          </Link>
          <h1 className="text-green-600">
            Soluções de Acessibilidade: {solution.name}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Problems Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-red-600">Problemas Identificados</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <ul className="space-y-3">
              {solution.problems.map((problem, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-green-600">Soluções e Boas Práticas</h2>
          </div>
          <div className="space-y-6">
            {solution.solutions.map((sol, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {sol.title}
                </h3>
                <p className="text-slate-700 mb-4">{sol.description}</p>
                {sol.code && (
                  <div className="bg-slate-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{sol.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* WCAG Guidelines */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-blue-600" />
            <h2>Diretrizes WCAG Relacionadas</h2>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <ul className="space-y-2">
              {solution.wcagGuidelines.map((guideline, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-blue-600">→</span>
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link to={`/simulation/${type}`}>
            <Button variant="default" size="lg">
              Voltar para Simulação
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">
              Explorar Outras Deficiências
            </Button>
          </Link>
        </div>

        {/* Additional Resources */}
        <section className="mt-12 bg-slate-100 rounded-xl p-6">
          <h3 className="mb-4">Recursos Adicionais</h3>
          <ul className="space-y-2 text-slate-700">
            <li>• <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WCAG 2.1 Quick Reference</a></li>
            <li>• <a href="https://webaim.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WebAIM - Web Accessibility In Mind</a></li>
            <li>• <a href="https://www.a11yproject.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The A11Y Project</a></li>
            <li>• <a href="https://developer.mozilla.org/pt-BR/docs/Web/Accessibility" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MDN - Acessibilidade</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
