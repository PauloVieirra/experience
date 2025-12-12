import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Disability } from './interfaces/Disability';
import { Sparkles, Eye, Brain, Ear, Accessibility, Zap } from 'lucide-react';

const disabilities: Disability[] = [
  { id: 'catarata', name: 'Catarata', description: 'Visão embaçada e opaca', icon: Eye, color: 'bg-blue-100 text-blue-600', locked: false },
  { id: 'glaucoma', name: 'Glaucoma', description: 'Perda da visão periférica', icon: Eye, color: 'bg-green-100 text-green-600', locked: false },
  { id: 'astigmatismo', name: 'Astigmatismo', description: 'Claridade estourada e letras borradas', icon: Sparkles, color: 'bg-yellow-100 text-yellow-600', locked: false },
  { id: 'daltonismo', name: 'Daltonismo', description: 'Dificuldade em distinguir cores', icon: Eye, color: 'bg-red-100 text-red-600', locked: false },
  { id: 'autismo', name: 'Autismo', description: 'Sensibilidade a estímulos', icon: Brain, color: 'bg-indigo-100 text-indigo-600', locked: false },
  { id: 'tdah', name: 'TDAH', description: 'Dificuldade de concentração', icon: Brain, color: 'bg-purple-100 text-purple-600', locked: false },
  { id: 'dislexia', name: 'Dislexia', description: 'Dificuldade na leitura', icon: Brain, color: 'bg-orange-100 text-orange-600', locked: false },
  { id: 'auditiva', name: 'Deficiência Auditiva', description: 'Perda parcial ou total da audição', icon: Ear, color: 'bg-teal-100 text-teal-600', locked: false },
  { id: 'mobilidade', name: 'Deficiência Motora', description: 'Dificuldade de interação com mouse', icon: Accessibility, color: 'bg-sky-100 text-sky-600', locked: false },
  { id: 'epilepsia', name: 'Epilepsia', description: 'Sensibilidade a luzes piscantes', icon: Zap, color: 'bg-pink-100 text-pink-600', locked: false },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleModuleClick = (disability: Disability) => {
    if (!disability.locked) {
      navigate(`/simulation/${disability.id}`);
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
          {disabilities.map((disability) => (
            <div
              key={disability.id}
              className={`bg-white rounded-xl shadow-md p-6 group relative h-full flex flex-col justify-between ${
                disability.locked
                  ? 'cursor-not-allowed opacity-60'
                  : 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer'
              }`}
              onClick={() => handleModuleClick(disability)}
            >
              <div>
                {disability.locked && (
                  <div className="absolute top-4 right-4 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                )}
                <div className={`${disability.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${!disability.locked && 'group-hover:scale-110 transition-transform'}`}>
                  <disability.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2">{disability.name}</h3>
                <p className="text-slate-600">{disability.description}</p>
              </div>
              {disability.locked && (
                <p className="text-sm font-semibold text-slate-500 mt-4">
                  Disponível em breve
                </p>
              )}
            </div>
          ))}
        </div>

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
