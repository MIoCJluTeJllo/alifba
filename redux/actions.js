import * as types from './types';

export const nextLetter=() => ({'type': types.LETTERS_NEXT});
export const prevLetter=() => ({'type': types.LETTERS_PREV});
export const letterComplete=() => ({'type': types.LETTER_COMPLETE});

export const beginTraining = (needLetter) => ({'type': types.TRAINING_BEGIN, needLetter});
export const closeTraining = () => ({'type': types.TRAINING_CLOSE});
export const catchLetter = (catchLetter) => ({'type': types.LETTER_CATH, catchLetter});
