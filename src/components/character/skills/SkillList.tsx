import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus } from 'lucide-react';
import { CharacterSkill } from '../../../types/character';
import SkillListItem from './SkillListItem';
import Button from '../../ui/Button';

interface SkillListProps {
  skills: CharacterSkill[];
  onSkillAdd: () => void;
  onSkillUpdate: (skill: CharacterSkill) => void;
  onSkillDelete: (id: string) => void;
  onSkillUse: (id: string) => void;
  mp: number;
}

export default function SkillList({
  skills,
  onSkillAdd,
  onSkillUpdate,
  onSkillDelete,
  onSkillUse,
  mp,
}: SkillListProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{t('skills.title')}</h2>
        <Button
          icon={Plus}
          variant="secondary"
          onClick={onSkillAdd}
          className="text-sm"
        >
          {t('skills.add')}
        </Button>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillListItem
            key={skill.id}
            skill={skill}
            onUpdate={onSkillUpdate}
            onDelete={onSkillDelete}
            onUse={onSkillUse}
            mp={mp}
          />
        ))}
        
        {skills.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            {t('skills.empty')}
          </div>
        )}
      </div>
    </div>
  );
}