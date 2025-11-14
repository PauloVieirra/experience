import { CheckCircle, XCircle } from 'lucide-react';

interface AccessibilityIndicatorProps {
  accessibleMode: boolean;
  disabilityType: string;
}

const indicators: Record<string, { 
  problem: string; 
  solution: string;
}> = {
  glaucoma: {
    problem: 'Conteúdo espalhado pelas bordas',
    solution: 'Layout centralizado, campo visual otimizado'
  },
  astigmatismo: {
    problem: 'Fontes finas e brilho excessivo',
    solution: 'Fonte peso 500, espaçamento generoso, claridade controlada'
  },
  daltonismo: {
    problem: 'Informação apenas por cor',
    solution: 'Ícones, padrões e texto além das cores'
  },
  autismo: {
    problem: 'Estímulos excessivos e animações',
    solution: 'Interface simplificada, sem animações automáticas'
  },
  tdah: {
    problem: 'Pop-ups e elementos distrativos',
    solution: 'Conteúdo organizado, sem distrações, foco mantido'
  },
  dislexia: {
    problem: 'Texto justificado, espaçamento irregular',
    solution: 'Alinhamento à esquerda, espaçamento 0.12em, parágrafos claros'
  },
  auditiva: {
    problem: 'Conteúdo de áudio sem alternativas',
    solution: 'Legendas, transcrições e indicadores visuais'
  },
  mobilidade: {
    problem: 'Alvos de clique pequenos',
    solution: 'Botões mínimo 44x44px, áreas de toque ampliadas'
  },
  epilepsia: {
    problem: 'Elementos piscando rapidamente',
    solution: 'Animações suaves, sem flashes, avisos de segurança'
  }
};

export default function AccessibilityIndicator({ accessibleMode, disabilityType }: AccessibilityIndicatorProps) {
  const info = indicators[disabilityType];
  
  if (!info) return null;

  return (
    <div className={`mb-8 p-6 rounded-xl border-2 ${
      accessibleMode 
        ? 'bg-green-50 border-green-500' 
        : 'bg-red-50 border-red-500'
    }`}>
      <div className="flex items-start gap-4">
        {accessibleMode ? (
          <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
        ) : (
          <XCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
        )}
        <div className="flex-1">
          <h3 className={`mb-2 ${accessibleMode ? 'text-green-900' : 'text-red-900'}`}>
            {accessibleMode ? 'Modo Acessível Ativo' : 'Problemas de Acessibilidade Detectados'}
          </h3>
          <p className={accessibleMode ? 'text-green-800' : 'text-red-800'}>
            {accessibleMode ? (
              <>
                <strong>✓ Corrigido:</strong> {info.solution}
              </>
            ) : (
              <>
                <strong>✗ Problema:</strong> {info.problem}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}