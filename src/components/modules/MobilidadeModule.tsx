import { Hand, Lock } from 'lucide-react';
import { Disability } from '../interfaces/Disability';

const disability: Disability = {
  id: 'mobilidade',
  name: 'Mobilidade Reduzida',
  description: 'Tremor e atraso no controle do mouse',
  icon: Hand,
  color: 'bg-lime-100 text-lime-600',
  locked: false,
};

export default function MobilidadeModule({ handleModuleClick }: { handleModuleClick: (disability: Disability) => void }) {
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
}
