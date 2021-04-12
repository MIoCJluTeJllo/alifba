import * as types from './types'

export const nextLetter=() => ({'type': types.LETTERS_NEXT})
export const prevLetter=() => ({'type': types.LETTERS_PREV})
export const levelUp=(letter) => ({'type': types.LEVEL_UP, letter})

export const beginTraining = (needLetter) => ({'type': types.TRAINING_BEGIN, needLetter})
export const endTraining = () => ({'type': types.TRAINING_END})
export const catchLetter = (catchLetter) => ({'type': types.LETTER_CATH, catchLetter})
