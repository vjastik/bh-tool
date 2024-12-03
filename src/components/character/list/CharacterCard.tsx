import React, { useState } from 'react';
import { Shield, Swords, Brain, Heart, Zap, Circle, Trash2 } from 'lucide-react';
import { Character } from '../../../types/character';
import StatBadge from '../shared/StatBadge';
import ConfirmDialog from '../../ui/ConfirmDialog';
import { useTranslation } from 'react-i18next';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
  onDelete: (id: string) => void;
}

export default function CharacterCard({ character, onClick, onDelete }: CharacterCardProps) {
  const { t } = useTranslation();
  const [showConfirm, setShowConfirm] = useState(false);

  const statIcons = {
    str: Swords,
    dex: Zap,
    int: Brain,
    con: Shield,
    wis: Circle
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirm(true);
  };

  return (
    <>
      <div
        onClick={onClick}
        className="group bg-dark-400/50 rounded-xl p-6 border border-dark-100 cursor-pointer hover:border-indigo-500/50 transition-colors relative"
      >
        <button
          onClick={handleDelete}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-400 transition-colors"
        >
          <Trash2 size={20} />
        </button>

        <h3 className="text-xl font-semibold mb-4">{character.name}</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <StatBadge icon={Heart} label={t('stats.hp')} value={character.hp} color="rose" />
          <StatBadge icon={Brain} label={t('stats.mp')} value={character.mp} color="blue" />
          <StatBadge icon={Circle} label={t('stats.chaos')} value={character.chaos} color="purple" />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(character.stats).map(([stat, value]) => {
            const Icon = statIcons[stat as keyof typeof statIcons];
            return (
              <div key={stat} className="text-center">
                <Icon size={20} className="mx-auto mb-1 text-indigo-400" />
                <div className="text-sm text-gray-400">{value || '-'}</div>
              </div>
            );
          })}
        </div>
      </div>

      {showConfirm && (
        <ConfirmDialog
          title={t('characters.delete.title')}
          message={t('characters.delete.message', { name: character.name })}
          onConfirm={() => {
            onDelete(character.id);
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </>
  );
}