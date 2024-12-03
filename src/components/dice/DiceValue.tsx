import React, { useMemo } from 'react'

interface DiceValueProps {
  value: number;
  isRolling: boolean;
  spinValues: number[];
}

export const DiceValue: React.FC<DiceValueProps> = ({ value, isRolling, spinValues }) => {
  const repeatedValues = useMemo(() => {
    return [...spinValues, ...spinValues, ...spinValues, ...spinValues]
  }, [spinValues])

  return (
    <div className='relative w-64'>
      <div className='slot-container'>
        <div className='relative h-32 overflow-hidden slot-mask'>
          {/* Main frame with 3D effect */}
          <div
            className='absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-950/90 rounded-xl backdrop-blur-sm border border-purple-500/30 shadow-inner' />

          <div className='absolute inset-0 slot-shine pointer-events-none' />

          {isRolling ? (
            // Spinning reel effect
            <div className='relative h-full overflow-hidden'>
              <div className='spin-container'>
                {repeatedValues.map((num, idx) => (
                  <div
                    key={idx}
                    className='h-1/4 flex items-center justify-center spin-blur'
                  >
                    <span className='text-6xl font-bold text-white'>{num}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Final value with bounce effect
            <div className='h-full flex items-center justify-center'>
              <span className={`
                text-6xl font-bold text-white
                ${isRolling ? '' : 'spin-stop'}
              `}>
                {value}
              </span>
            </div>
          )}

          {/* Enhanced lighting effects */}
          <div className='absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-purple-600/20' />
          <div className='absolute inset-0 bg-gradient-to-b from-purple-600/30 via-transparent to-purple-600/20' />

          {/* Inner shadow effect */}
          <div className='absolute inset-0 shadow-inner pointer-events-none' />
        </div>
      </div>

      {/* Enhanced side decorations */}
      <div className='absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-20'>
        <div className='h-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 rounded-full' />
        <div className='absolute inset-0 bg-gradient-to-r from-purple-300/50 to-transparent rounded-full' />
      </div>
      <div className='absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-20'>
        <div className='h-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 rounded-full' />
        <div className='absolute inset-0 bg-gradient-to-l from-purple-300/50 to-transparent rounded-full' />
      </div>
    </div>
  )
}