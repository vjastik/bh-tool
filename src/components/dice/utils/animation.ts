export const getRandomValue = (max: number): number => {
  return Math.floor(Math.random() * max) + 1
}

export const generateSpinSequence = (
  currentValue: number,
  targetValue: number,
  maxValue: number
): { value: number; speed: number }[] => {
  const sequence: { value: number; speed: number }[] = []

  for (let i = 0; i < 20; i++) {
    sequence.push({
      value: getRandomValue(maxValue),
      speed: 100
    })
  }

  return sequence
}

export const generateSpinValues = (maxValue: number): number[] => {
  const values: number[] = []
  for (let i = 0; i < 8; i++) {
    values.push(getRandomValue(maxValue))
  }
  return values
}