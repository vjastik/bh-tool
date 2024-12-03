import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Package, Sword } from 'lucide-react';
import { Item } from '../../../types/character';
import Button from '../../ui/Button';
import PocketGrid from './PocketGrid';
import ItemList from './ItemList';

interface InventorySectionProps {
  pockets: (Item | null)[];
  backpack: Item[];
  weapon: Item | null;
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  onEquipWeapon: (weapon: Item | null) => void;
  onSetPocketItem: (index: number, item: Item | null) => void;
}

export default function InventorySection({
  pockets,
  backpack,
  weapon,
  onAddItem,
  onRemoveItem,
  onEquipWeapon,
  onSetPocketItem,
}: InventorySectionProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Package size={20} className="text-indigo-400" />
              {t('inventory.pockets')}
            </h3>
          </div>
          <PocketGrid
            pockets={pockets}
            onSetPocketItem={onSetPocketItem}
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Sword size={20} className="text-indigo-400" />
              {t('inventory.weapon')}
            </h3>
          </div>
          <div className="bg-dark-300/50 rounded-lg p-4 border border-dark-100 min-h-[100px] flex items-center justify-center">
            {weapon ? (
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium">{weapon.name}</div>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() => onEquipWeapon(null)}
                    className="text-sm"
                  >
                    {t('inventory.unequip')}
                  </Button>
                </div>
                <p className="text-sm text-gray-400">{weapon.description}</p>
              </div>
            ) : (
              <div className="text-gray-400 text-sm">{t('inventory.noWeapon')}</div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{t('inventory.backpack')}</h3>
          <Button
            icon={Plus}
            variant="secondary"
            onClick={onAddItem}
            className="text-sm"
          >
            {t('inventory.addItem')}
          </Button>
        </div>
        <ItemList
          items={backpack}
          onRemove={onRemoveItem}
          onEquipWeapon={onEquipWeapon}
        />
      </div>
    </div>
  );
}