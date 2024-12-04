import React from 'react'
import { Translation } from '@/types/i18n'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCondition } from '../../../store/characterSlice'

type Props = {
  name: string
  id: string
  color: string
}

export const ConditionItem: React.FC<Props> = props => {
  const { name, id, color } = props

  const { id: characterId } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const remove = () => {
    dispatch(deleteCondition({ characterId, conditionId: id }))
  }

  return (
    <button className='flex p-2 rounded' style={{ background: color }} onClick={remove}>
      {name}
    </button>
  )
}
