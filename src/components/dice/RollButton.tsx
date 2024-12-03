import React from 'react'
import { Dices } from 'lucide-react'
import { DiceRoller } from './DiceRoller'
import Button from '../ui/Button'

export const RollButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button icon={Dices} onClick={() => setIsOpen(true)}>
        Roll
      </Button>
      {isOpen && <DiceRoller onClose={() => setIsOpen(false)} />}
    </>
  )
}
