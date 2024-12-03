import React from 'react';
import { useTranslation } from 'react-i18next';
import { PlusCircle, Scroll } from 'lucide-react';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

interface EmptyStateProps {
  onCreateClick: () => void;
}

export default function EmptyState({ onCreateClick }: EmptyStateProps) {
  const { t } = useTranslation();

  return (
    <Card className="flex flex-col items-center justify-center text-center p-8">
      <Scroll className="mx-auto mb-4 text-indigo-400" size={48} />
      <h2 className="text-xl font-semibold mb-2">{t('characters.empty.title')}</h2>
      <p className="text-gray-400 mb-4">{t('characters.empty.description')}</p>
      <Button icon={PlusCircle} onClick={onCreateClick}>
        {t('characters.create')}
      </Button>
    </Card>
  );
}