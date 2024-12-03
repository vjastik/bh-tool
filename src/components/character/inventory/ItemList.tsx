import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trash2, Sword } from 'lucide-react';
import { Item } from '../../../types/character';

interface ItemListProps {
  items: Item[];
  onRemove: (id: string) => void;
  onEquipWeapon: (item: Item) => void;
}

export default function ItemList({ items = [], onRemove, onEquipWeapon }: ItemListProps) {
  const { t } = useTranslation();

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 bg-dark-300/50 rounded-lg border border-dark-100">
        {t('inventory.emptyBackpack')}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="group bg-dark-300/50 rounded-lg p-4 border border-dark-100 hover:border-dark-50 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium">{item.name}</h4>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
            <div className="flex items-center gap-2">
              {item.type === 'weapon' && (
                <button
                  onClick={() => onEquipWeapon(item)}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Sword size={16} />
                  {t('inventory.equip')}
                </button>
              )}
              <button
                onClick={() => onRemove(item.id)}
                className="p-1 text-gray-400 hover:text-red-400 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}