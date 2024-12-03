import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import { CharacterFeature } from '../../../types/character';
import FeatureListItem from './FeatureListItem';
import Button from '../../ui/Button';

interface FeatureListProps {
  features: CharacterFeature[];
  onFeatureAdd: () => void;
  onFeatureUpdate: (feature: CharacterFeature) => void;
  onFeatureDelete: (id: string) => void;
}

export default function FeatureList({
  features,
  onFeatureAdd,
  onFeatureUpdate,
  onFeatureDelete,
}: FeatureListProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{t('features.title')}</h2>
        <Button
          icon={Plus}
          variant="secondary"
          onClick={onFeatureAdd}
          className="text-sm"
        >
          {t('features.add')}
        </Button>
      </div>
      
      <div className="space-y-3">
        {features.map((feature) => (
          <FeatureListItem
            key={feature.id}
            feature={feature}
            onUpdate={onFeatureUpdate}
            onDelete={onFeatureDelete}
          />
        ))}
        
        {features.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            {t('features.empty')}
          </div>
        )}
      </div>
    </div>
  );
}