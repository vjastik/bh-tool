import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Item } from '../../../types/character';
import Button from '../../ui/Button';

interface AddItemDialogProps {
  onAdd: (item: Item) => void;
  onClose: () => void;
}

export default function AddItemDialog({ onAdd, onClose }: AddItemDialogProps) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'common' | 'weapon' | 'pocket'>('common');
  const [damage, setDamage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: crypto.randomUUID(),
      name,
      description,
      type,
      ...(type === 'weapon' ? { damage } : {}),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-dark-400 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('inventory.addItem')}</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('inventory.itemType.label')}
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as 'common' | 'weapon')}
              className="w-full bg-dark-300 border border-dark-100 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500"
            >
              <option value="common">{t('inventory.itemType.common')}</option>
              <option value="weapon">{t('inventory.itemType.weapon')}</option>
              <option value="pocket">{t('inventory.itemType.pocket')}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('common.name')}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-dark-300 border border-dark-100 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              {t('common.description')}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-dark-300 border border-dark-100 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500 min-h-[80px]"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={onClose}
              type="button"
            >
              {t('common.cancel')}
            </Button>
            <Button type="submit">
              {t('common.add')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}