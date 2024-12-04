import React from 'react'
import { useTranslation } from 'react-i18next'
import { Plus } from 'lucide-react'
import Button from '../../ui/Button'
import { ConditionItem } from './ConditionItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { AddCondition } from './AddCondition'
import { useParams } from 'react-router-dom'

export const ConditionsList = () => {
  const { id } = useParams()
  const { conditions } = useSelector((state: RootState) => state.characters.characters.find((char) => char.id === id))
  const [open, setOpen] = React.useState(false)
  const { t } = useTranslation()

  const handleToggle = (value: boolean) => () => {
    setOpen(value)
  }

  return (
    <>
      <div className='space-y-4'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-xl font-bold'>{t('conditions.title')}</h2>
          <Button
            icon={Plus}
            variant='secondary'
            onClick={handleToggle(true)}
            className='text-sm'
          >
            {t('conditions.add')}
          </Button>
        </div>

        <div className='flex gap-2 flex-wrap'>
          {conditions.map((item) => (
            <ConditionItem
              key={item.id}
              name={item.name}
              id={item.id}
              color={item.color}
            />
          ))}

          {conditions.length === 0 && (
            <div className='w-full text-center py-8 text-gray-400'>
              {t('conditions.empty')}
            </div>
          )}
        </div>
      </div>
      {open && <AddCondition onClose={handleToggle(false)} />}
    </>
  )
}