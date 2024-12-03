import React from 'react';
import { DiceType, CharacterStats } from '../types/character';

interface StatsBlockProps {
  stats: CharacterStats;
  onStatChange: (stat: keyof CharacterStats, value: DiceType | null) => void;
  availableDice: (stat: keyof CharacterStats) => DiceType[];
  readOnly?: boolean;
}

export default function StatsBlock({
  stats,
  onStatChange,
  availableDice,
  readOnly = false
}: StatsBlockProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
      {(Object.keys(stats) as Array<keyof CharacterStats>).map((stat) => (
        <div key={stat} className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
            {stat.toUpperCase()}
          </label>
          {readOnly ? (
            <div className="text-center p-2 bg-gray-50 rounded-md">
              {stats[stat] || '-'}
            </div>
          ) : (
            <select
              value={stats[stat] || ''}
              onChange={(e) => onStatChange(stat, e.target.value as DiceType)}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center cursor-pointer"
            >
              <option value="">-</option>
              {availableDice(stat).map((dice) => (
                <option key={dice} value={dice}>
                  {dice}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
}