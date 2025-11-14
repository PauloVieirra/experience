import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from './ui/slider'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { useIsMobile } from './ui/use-mobile'
import {
  Lightbulb,
  Play,
  Pause,
  Type,
  Contrast,
  Gauge,
  Volume2,
  ChevronUp,
  ChevronDown
} from 'lucide-react'

export default function ControlPanelModal({
  intensity,
  setIntensity,
  fontSize,
  setFontSize,
  contrast,
  setContrast,
  accessibleMode,
  setAccessibleMode,
  disabilityType,
  isPlaying,
  setIsPlaying,
  screenReaderActive,
  setScreenReaderActive
}) {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)

  const disabilityNames = {
    catarata: 'Catarata',
    glaucoma: 'Glaucoma',
    astigmatismo: 'Astigmatismo',
    daltonismo: 'Daltonismo',
    autismo: 'Autismo',
    tdah: 'TDAH',
    dislexia: 'Dislexia',
    auditiva: 'Deficiência Auditiva',
    mobilidade: 'Mobilidade Reduzida',
    epilepsia: 'Epilepsia'
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && panelRef.current) {
      setTimeout(() => panelRef.current?.focus(), 50)
    }
  }, [isOpen])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="control-panel-title"
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'transparent',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.3s ease-out'
          }}
          onClick={() => setIsOpen(false)}
        />

        {/* Container do Painel e Botão */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* Botão flutuante (agora posicionado em relação ao container) */}
          <div
            style={{
              position: 'absolute',
              top: '-52px',
              left: '10%',
              transform: 'translateX(-50%)',
              zIndex: 2000,
              pointerEvents: 'auto'
            }}
          >
            <Button
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="control-panel-modal"
              aria-label={isOpen ? 'Fechar painel de controle' : 'Abrir painel de controle'}
              style={{
                backgroundColor: 'white',
                border: '1px solid #CBD5E1',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                borderRadius: '9999px',
                padding: '8px',
                color: '#0F172A'
              }}
            >
              {isOpen ? <ChevronDown style={{ width: '20px', height: '20px' }} /> : <ChevronUp style={{ width: '20px', height: '20px' }} />}
            </Button>
          </div>

          {/* Painel */}
          <div
            id="control-panel-modal"
            ref={panelRef}
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              borderTop: '2px solid #CBD5E1',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
              outline: 'none',
              pointerEvents: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Handle visual */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '12px', paddingBottom: '4px' }}>
              <div style={{ height: '4px', width: '48px', borderRadius: '9999px', backgroundColor: '#CBD5E1' }} />
            </div>

            <div style={{ padding: '12px 24px 32px 24px' }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <h3 id="control-panel-title" style={{ color: '#0F172A', fontSize: '18px', fontWeight: 500 }}>
                    Simulando: {disabilityNames[disabilityType]}
                  </h3>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pausar simulação' : 'Retomar simulação'}
                  >
                    {isPlaying ? <Pause style={{ width: '16px', height: '16px' }} /> : <Play style={{ width: '16px', height: '16px' }} />}
                  </Button>

                  <Button
                    variant={screenReaderActive ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setScreenReaderActive(!screenReaderActive)}
                    aria-label={screenReaderActive ? 'Desativar leitor de tela' : 'Ativar leitor de tela'}
                    style={screenReaderActive ? { backgroundColor: '#FACC15' } : {}}
                  >
                    <Volume2 style={{ width: '16px', height: '16px', marginRight: '4px' }} />
                    {screenReaderActive ? 'Leitor Ativo' : 'Ativar Leitor'}
                  </Button>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link to={`/solution/${disabilityType}`}>
                    <Button style={{ backgroundColor: '#16A34A', color: 'white', padding: '6px 12px' }}>
                      <Lightbulb style={{ width: '16px', height: '16px', marginRight: '4px' }} />
                      Ver Solução
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Conteúdo sliders e switches */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)', gap: '24px', marginBottom: '16px' }}>
                <div>
                  <Label htmlFor="intensity-slider" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Gauge style={{ width: '16px', height: '16px' }} />
                    Intensidade: {intensity}%
                  </Label>
                  <Slider
                    id="intensity-slider"
                    value={[intensity]}
                    onValueChange={(values) => setIntensity(values[0])}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div>
                  <Label htmlFor="font-slider" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Type style={{ width: '16px', height: '16px' }} />
                    Tamanho da Fonte: {fontSize}px
                  </Label>
                  <Slider
                    id="font-slider"
                    value={[fontSize]}
                    onValueChange={(values) => setFontSize(values[0])}
                    min={12}
                    max={32}
                    step={1}
                  />
                </div>

                <div>
                  <Label htmlFor="contrast-slider" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Contrast style={{ width: '16px', height: '16px' }} />
                    Contraste: {contrast}%
                  </Label>
                  <Slider
                    id="contrast-slider"
                    value={[contrast]}
                    onValueChange={(values) => setContrast(values[0])}
                    min={0}
                    max={100}
                    step={1}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', backgroundColor: '#F1F5F9', borderRadius: '8px', padding: '8px' }}>
                  <Label htmlFor="accessible-mode">{accessibleMode ? 'Modo Acessível' : 'Modo Comum'}</Label>
                  <Switch id="accessible-mode" checked={accessibleMode} onCheckedChange={setAccessibleMode} />
                </div>
              </div>

              {/* Mensagens de status */}
              <div style={{ textAlign: 'center', minHeight: '40px' }}>
                {screenReaderActive && (
                  <p style={{ color: '#CA8A04', marginTop: '8px' }}>
                    🔊 Leitor de tela ativo - Use Tab ou setas ↑↓ para navegar.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
