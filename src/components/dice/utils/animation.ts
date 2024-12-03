export const getRandomValue = (max: number): number => {
  return Math.floor(Math.random() * max) + 1
}

export const generateSpinSequence = (
  currentValue: number,
  targetValue: number,
  maxValue: number
): { value: number; speed: number }[] => {
  const sequence: { value: number; speed: number }[] = []

  // Initial very fast spins
  for (let i = 0; i < 20; i++) {
    sequence.push({
      value: getRandomValue(maxValue),
      speed: 1
    })
  }

  // Fast spins
  for (let i = 0; i < 15; i++) {
    sequence.push({
      value: getRandomValue(maxValue),
      speed: 5 // Very fast
    })
  }

  // Medium speed spins
  for (let i = 0; i < 10; i++) {
    sequence.push({
      value: getRandomValue(maxValue),
      speed: 10 + (i * 5) // Gradually slowing
    })
  }

  // Final approach with dramatic slowdown
  for (let i = 0; i < 8; i++) {
    sequence.push({
      value: getRandomValue(maxValue),
      speed: 15 + (i * 80) // Dramatically slower
    })
  }

  // Target value with pause
  sequence.push({
    value: targetValue,
    speed: 10 // Longer final pause
  })

  return sequence
}

export const generateSpinValues = (maxValue: number): number[] => {
  const values: number[] = []
  for (let i = 0; i < 8; i++) {
    values.push(getRandomValue(maxValue))
  }
  return values
}