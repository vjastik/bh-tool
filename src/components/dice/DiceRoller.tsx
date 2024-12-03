import React, { useState, useCallback, useRef, useEffect } from 'react'
import { DICE_CONFIGS } from '../../types/dice'
import { DiceType, Item } from '../../types/character'
import { generateSpinSequence, generateSpinValues } from './utils/animation'
import { DiceSelector } from './DiceSelector'
import { DiceValue } from './DiceValue'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface RollDialogProps {
  onClose: () => void;
}

export const DiceRoller: React.FC<RollDialogProps> = props => {
  const { onClose } = props

  const [diceType, setDiceType] = useState<DiceType>('d6')
  const [currentValue, setCurrentValue] = useState(1)
  const [isRolling, setIsRolling] = useState(false)
  const [spinValues, setSpinValues] = useState<number[]>([])
  const animationTimeoutRef = useRef<number>()
  const { t } = useTranslation()

  useEffect(() => {
    // Update spin values when dice type changes
    const config = DICE_CONFIGS[diceType]
    setSpinValues(generateSpinValues(config.maxValue))
  }, [diceType])

  const rollDice = useCallback(() => {
    if (isRolling) return

    const config = DICE_CONFIGS[diceType]
    const targetValue = Math.floor(Math.random() * config.maxValue) + 1
    const sequence = generateSpinSequence(currentValue, targetValue, config.maxValue)

    setIsRolling(true)
    setSpinValues(generateSpinValues(config.maxValue))

    // Clear any existing timeouts
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    // Play the sequence
    let totalDelay = 0
    sequence.forEach(({ value, speed }, index) => {
      animationTimeoutRef.current = setTimeout(() => {
        setCurrentValue(value)
        if (index === sequence.length - 1) {
          setIsRolling(false)
        }
      }, totalDelay)
      totalDelay += speed
    })
  }, [diceType, isRolling])

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4'>
      <div className='bg-dark-400 rounded-xl p-6 w-full max-w-md'>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('roll.title')}</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className='flex flex-col items-center'>
          <DiceSelector selectedType={diceType} onSelect={setDiceType} />

          <div className='mb-6'>
            <DiceValue
              value={currentValue}
              isRolling={isRolling}
              spinValues={spinValues}
            />
          </div>

          <button
            onClick={rollDice}
            disabled={isRolling}
            className={`
              px-8 py-3 rounded-lg font-semibold text-lg
              transition-all duration-300
              transform hover:scale-105 active:scale-95
              ${isRolling
                  ? 'bg-gray-300 cursor-not-allowed opacity-70'
                  : 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 hover:shadow-lg'
                }
            `}
          >
            {isRolling ? t('roll.rolling') : t('roll.button')}
          </button>
        </div>
      </div>
    </div>
  )
}