import React from 'react';
import { useTranslation } from 'react-i18next';
import { CharacterStats, DiceType } from '../../../types/character';
import { DICE_VALUES } from '../../../utils/dice';

interface StatsBlockProps {
  stats: CharacterStats;
  setStats: (stats: CharacterStats) => void;
}

export default function StatsBlock({ stats, setStats }: StatsBlockProps) {
  const { t } = useTranslation();

  const getAvailableDice = (currentStat: keyof CharacterStats) => {
    const usedDice = Object.entries(stats)
      .filter(([stat, value]) => stat !== currentStat && value !== null)
      .map(([_, value]) => value);
    
    return DICE_VALUES.filter(dice => !usedDice.includes(dice));
  };

  const handleStatChange = (stat: keyof CharacterStats, value: DiceType | null) => {
    setStats({
      ...stats,
      [stat]: value,
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
      {(Object.keys(stats) as Array<keyof CharacterStats>).map((stat) => (
        <div key={stat} className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-1 text-center">
            {t(`stats.${stat}`)}
          </label>
          <select
            value={stats[stat] || ''}
            onChange={(e) => handleStatChange(stat, e.target.value as DiceType)}
            className="w-full px-2 py-1 text-sm bg-dark-300/50 border border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-center text-white cursor-pointer"
          >
            <option value="">{t('common.empty')}</option>
            {getAvailableDice(stat).map((dice) => (
              <option key={dice} value={dice}>
                {dice}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}