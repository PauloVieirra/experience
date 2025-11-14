import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Sparkles, Focus, Palette, Waves, Zap, Type, Volume2, Hand, AlertTriangle, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Disability {
  id: string;
  name:string;
  description: string;
  icon: any;
  color: string;
  locked: boolean;
}

const disabilities: Disability[] = [
  {
    id: 'catarata',
    name: 'Catarata',
    description: 'Visão embaçada e difusa com filme translúcido',
    icon: Eye,
    color: 'bg-blue-100 text-blue-600',
    locked: false,
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma',
    description: 'Visão em túnel com campo visual reduzido',
    icon: Focus,
    color: 'bg-purple-100 text-purple-600',
    locked: true,
  },
  {
    id: 'astigmatismo',
    name: 'Astigmatismo',
    description: 'Claridade estourada e letras borradas',
    icon: Sparkles,
    color: 'bg-yellow-100 text-yellow-600',
    locked: true,
  },
  {
    id: 'daltonismo',
    name: 'Daltonismo',
    description: 'Dificuldade em distinguir cores',
    icon: Palette,
    color: 'bg-red-100 text-red-600',
    locked: true,
  },
  {
    id: 'autismo',
    name: 'Autismo',
    description: 'Sobrecarga sensorial com estímulos excessivos',
    icon: Waves,
    color: 'bg-indigo-100 text-indigo-600',
    locked: true,
  },
  {
    id: 'tdah',
    name: 'TDAH',
    description: 'Dificuldade de foco e atenção desviada',
    icon: Zap,
    color: 'bg-orange-100 text-orange-600',
    locked: true,
  },
  {
    id: 'dislexia',
    name: 'Dislexia',
    description: 'Letras trocam de posição e espaçamento irregular',
    icon: Type,
    color: 'bg-teal-100 text-teal-600',
    locked: true,
  },
  {
    id: 'auditiva',
    name: 'Deficiência Auditiva',
    description: 'Conteúdo de áudio sem alternativas visuais',
    icon: Volume2,
    color: 'bg-cyan-100 text-cyan-600',
    locked: true,
  },
  {
    id: 'mobilidade',
    name: 'Mobilidade Reduzida',
    description: 'Tremor e atraso no controle do mouse',
    icon: Hand,
    color: 'bg-lime-100 text-lime-600',
    locked: true,
  },
  {
    id: 'epilepsia',
    name: 'Epilepsia',
    description: 'Sensibilidade a estímulos visuais rápidos',
    icon: AlertTriangle,
    color: 'bg-rose-100 text-rose-600',
    locked: true,
  }
];

export default function HomePage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleModuleClick = (disability: Disability) => {
    if (disability.locked) {
      return;
    }
    if (disability.id === 'catarata') {
      if (sessionStorage.getItem('catarataUnlocked') === 'true') {
        navigate('/simulation/catarata');
        return;
      }
      dialogRef.current?.showModal();
    } else {
      navigate(`/simulation/${disability.id}`);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === 'seaacessivel') {
      sessionStorage.setItem('catarataUnlocked', 'true');
      dialogRef.current?.close();
      setPassword('');
      setPasswordError('');
      navigate('/simulation/catarata');
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Experiência Sensorial de Acessibilidade
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Simule diferentes deficiências e condições para entender a importância da acessibilidade digital. 
            Uma ferramenta educacional para designers, desenvolvedores e gestores.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {disabilities.map((disability) => {
            const Icon = disability.icon;
            const isLocked = disability.locked;

            const cardContent = (
              <div
                className={`bg-white rounded-xl shadow-md p-6 group relative h-full flex flex-col justify-between ${
                  isLocked
                    ? 'cursor-not-allowed opacity-60'
                    : 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer'
                }`}
                onClick={() => handleModuleClick(disability)}
              >
                <div>
                  {isLocked && (
                    <div className="absolute top-4 right-4 text-slate-400">
                      <Lock className="w-6 h-6" />
                    </div>
                  )}
                  <div className={`${disability.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${!isLocked && 'group-hover:scale-110 transition-transform'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="mb-2">{disability.name}</h3>
                  <p className="text-slate-600">{disability.description}</p>
                </div>
                {isLocked && (
                  <p className="text-sm font-semibold text-slate-500 mt-4">
                    Disponível em breve
                  </p>
                )}
              </div>
            );

            return isLocked ? (
              <div key={disability.id}>{cardContent}</div>
            ) : (
              <div key={disability.id}>{cardContent}</div>
            );
          })}
        </div>

       <dialog
          ref={dialogRef}
          className="p-6 rounded-lg shadow-xl"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999
          }}
>

          <h2 className="text-xl font-bold mb-4">Acesso Restrito</h2>
          <p className="mb-4">
            Para acessar a simulação de Catarata, por favor, insira a senha.
          </p>
          <div className="mt-4">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
            />
            {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="ghost" onClick={() => dialogRef.current?.close()}>Cancelar</Button>
            <Button onClick={handlePasswordSubmit}>Entrar</Button>
          </div>
        </dialog>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto" style={{display: 'none'}}>
          <h2 className="mb-4">Sobre este Projeto</h2>
          <p className="text-slate-700 mb-4">
            Este site foi criado para sensibilizar profissionais sobre a importância da acessibilidade digital. 
            Através de simulações interativas, você poderá experimentar como pessoas com diferentes deficiências 
            percebem conteúdos digitais não-acessíveis.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="mb-2">Como usar:</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Escolha uma deficiência para simular</li>
                <li>Ajuste a intensidade da simulação</li>
                <li>Compare modo comum vs. acessível</li>
                <li>Aprenda as soluções técnicas</li>
              </ol>
            </div>
            <div>
              <h3 className="mb-2">Objetivo:</h3>
              <p className="text-slate-700">
                Criar empatia e conscientização sobre a necessidade de desenvolver produtos digitais 
                verdadeiramente inclusivos e acessíveis para todos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-300 mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">Sobre o Projeto</h2>
              <p className="text-slate-400"
              style={{color:"#edededff"}}
              >
                Este site foi criado para sensibilizar profissionais sobre a importância da acessibilidade digital. Através de simulações interativas, você poderá experimentar como pessoas com diferentes deficiências percebem conteúdos digitais não-acessíveis.
              </p>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Como usar</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-400" style={{color:"#dedede"}}>
                <li>Escolha uma deficiência para simular</li>
                <li>Ajuste a intensidade da simulação</li>
                <li>Compare modo comum vs. acessível</li>
                <li>Aprenda as soluções técnicas</li>
              </ol>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-2 mt-4">Objetivo</h3>
              <p className="text-slate-400" style={{color:"#dedede"}}>
                Criar empatia e conscientização sobre a necessidade de desenvolver produtos digitais verdadeiramente inclusivos e acessíveis para todos.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500" style={{color:"#bebebeff"}}>
            <p>Experiência Sensorial de Acessibilidade - Ferramenta Educacional</p>
            <p className="mt-2">Desenvolvido para promover a inclusão digital</p>
          </div>
        </div>
      </footer>
    </div>
  );
}