import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Save, ArrowLeft, Circle } from 'lucide-react';
import { addCharacter } from '../../../store/characterSlice';
import { CharacterStats } from '../../../types/character';
import { getDiceValue, getDiceIndex } from '../../../utils/dice';
import StatsBlock from './StatsBlock';
import StatInput from './StatInput';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import PageContainer from '../../ui/PageContainer';

export default function CharacterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [stats, setStats] = useState<CharacterStats>({
    str: null,
    dex: null,
    int: null,
    con: null,
    wis: null,
  });
  const [hp, setHp] = useState(0);
  const [mp, setMp] = useState(0);
  const [chaos, setChaos] = useState(0);

  useEffect(() => {
    setHp(getDiceValue(stats.con || 'd4'));
    setMp(getDiceIndex(stats.wis || 'd4'));
  }, [stats]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    dispatch(addCharacter({
      id: crypto.randomUUID(),
      name,
      stats,
      hp,
      mp,
      chaos,
      features: [],
      skills: [],
      pockets: [null, null, null, null],
      backpack: [],
      weapon: null,
    }));
    
    navigate('/');
  };

  return (
    <PageContainer>
      <Button
        icon={ArrowLeft}
        variant="secondary"
        onClick={() => navigate('/')}
        className="mb-6 sm:mb-8"
      >
        {t('common.back')}
      </Button>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{t('characters.create')}</h1>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('characters.form.name')}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-dark-300/50 border border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
              required
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Circle size={20} className="text-indigo-400" />
              {t('characters.form.stats')}
            </h2>
            <StatsBlock stats={stats} setStats={setStats} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatInput label={t('stats.hp')} value={hp} />
            <StatInput label={t('stats.mp')} value={mp} />
            <StatInput label={t('stats.chaos')} value={chaos} />
          </div>

          <Button icon={Save} fullWidth type="submit">
            {t('characters.create')}
          </Button>
        </form>
      </Card>
    </PageContainer>
  );
}