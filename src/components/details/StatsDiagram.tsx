import React from 'react';
import { LucideIcon } from 'lucide-react';
import { CharacterStats, DiceType } from '../../types/character';
import { getDiceValue } from '../../utils/dice';

interface StatsDiagramProps {
  stats: CharacterStats;
  onStatChange: (stat: keyof CharacterStats, value: DiceType | null) => void;
  availableDice: (stat: keyof CharacterStats) => DiceType[];
  icons: Record<keyof CharacterStats, LucideIcon>;
}

export default function StatsDiagram({
  stats,
  onStatChange,
  availableDice,
  icons
}: StatsDiagramProps) {
  const maxValue = 12; // d12 is the highest
  const getStatPercentage = (value: DiceType | null) => 
    value ? (getDiceValue(value) / maxValue) * 100 : 0;

  return (
    <div className="relative w-full aspect-square">
      <div className="absolute inset-0 bg-gray-700/20 rounded-full"></div>
      
      {Object.entries(stats).map(([stat, value], index) => {
        const angle = (index * 72) - 90; // 360° / 5 stats = 72° per stat
        const percentage = getStatPercentage(value);
        const Icon = icons[stat as keyof CharacterStats];
        
        return (
          <React.Fragment key={stat}>
            {/* Stat Line */}
            <div
              className="absolute top-1/2 left-1/2 h-px bg-gray-600/50 origin-left"
              style={{
                width: '50%',
                transform: `rotate(${angle}deg)`
              }}
            />
            
            {/* Stat Icon */}
            <div
              className="absolute w-12 h-12 -mt-6 -ml-6 flex items-center justify-center"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateX(${percentage}%) rotate(-${angle}deg)`
              }}
            >
              <Icon size={24} className="text-indigo-400" />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}