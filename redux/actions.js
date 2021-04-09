import * as types from './types'

export const catchLetter = (letter) => ({'type': types.LETTER_CATH, letter})
export const fillGameProgress = (correct) => ({'type': types.GAME_PROGRESS, correct})
