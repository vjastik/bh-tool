import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { PlusCircle } from 'lucide-react'
import { RootState } from '../../../store/store'
import { deleteCharacter } from '../../../store/characterSlice'
import EmptyState from './EmptyState'
import CharacterCard from './CharacterCard'
import Button from '../../ui/Button'
import PageContainer from '../../ui/PageContainer'
import { handleCreateNewCharacter } from './utils/handlers'
import LanguageSelector from '../../LanguageSelector'

export default function CharacterList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const characters = useSelector((state: RootState) => state.characters.characters)

  const handleDelete = (id: string) => {
    dispatch(deleteCharacter(id))
  }

  return (
    <PageContainer>
      <div className='flex flex-row justify-between items-center gap-4 mb-8'>
        <h1 className='text-2xl sm:text-3xl font-bold'>{t('characters.title')}</h1>
        <div className="flex gap-4">
          <Button
            icon={PlusCircle}
            onClick={handleCreateNewCharacter}
            fullWidth={false}
          >
            {t('characters.create_char')}
          </Button>
          <LanguageSelector />
        </div>
      </div>

      {characters.length === 0 ? (
        <EmptyState onCreateClick={handleCreateNewCharacter} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => navigate(`/character/${character.id}`)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </PageContainer>
  )
}