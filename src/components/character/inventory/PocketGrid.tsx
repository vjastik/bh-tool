import React from 'react';
import { useTranslation } from 'react-i18next';
import { Item } from '../../../types/character';

interface PocketGridProps {
  pockets: (Item | null)[];
  onSetPocketItem: (index: number, item: Item | null) => void;
}

export default function PocketGrid({
  pockets = [],
  onSetPocketItem
}: PocketGridProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {pockets.map((item, index) => (
        <div
          key={index}
          className="bg-dark-300/50 rounded-lg p-4 border border-dark-100 min-h-[100px]"
        >
          {item ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">{item.name}</div>
                <button
                  onClick={() => onSetPocketItem(index, null)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t('inventory.remove')}
                </button>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ) : (
            <div className="h-full flex flex-col gap-2">
              <div className="text-gray-400 text-sm text-center">
                {t('inventory.emptyPocket')}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}