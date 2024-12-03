import React from 'react'
import { DICE_CONFIGS } from '../../types/dice'
import { DiceType } from '../../types/character'
import { Dices as Dice } from 'lucide-react'

interface DiceSelectorProps {
  selectedType: DiceType;
  onSelect: (type: DiceType) => void;
}

export const DiceSelector: React.FC<DiceSelectorProps> = props => {
  const {
    selectedType,
    onSelect
  } = props
  return (
    <div className='flex justify-center gap-2 mb-6 flex-wrap'>
      {Object.keys(DICE_CONFIGS).map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type as DiceType)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg 
            transition-all duration-300
            backdrop-blur-sm
            ${
            selectedType === type
              ? 'bg-purple-600/90 text-white shadow-lg shadow-purple-500/25'
              : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/40'
          }
          `}
        >
          <Dice className='w-4 h-4' />
          <span className='font-medium'>{type.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}