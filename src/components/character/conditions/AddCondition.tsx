import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addCondition } from '../../../store/characterSlice'
import { useParams } from 'react-router-dom'
import Button from '../../ui/Button'

type Props = {
  onClose: () => void;
}

export const AddCondition: React.FC<Props> = props => {
  const { onClose } = props

  const { t } = useTranslation()
  const { id } = useParams()
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleAddCondition = () => {
    let color = '#'
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    dispatch(addCondition({
      characterId: id, condition: {
        id: crypto.randomUUID(),
        name,
        color
      }
    }))
    onClose()
  }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4'>
      <div className='bg-dark-400 rounded-xl p-6 w-full max-w-md'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-xl font-bold'>{t('conditions.add')}</h2>
          <button
            onClick={onClose}
            className='p-1 text-gray-400 hover:text-white transition-colors'
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleAddCondition} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>
              {t('conditions.new.name')}
            </label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full bg-dark-300 border border-dark-100 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500'
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
  )
}