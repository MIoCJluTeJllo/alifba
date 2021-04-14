import * as types from './types';

export const nextLetter=() => ({'type': types.LETTERS_NEXT});
export const prevLetter=() => ({'type': types.LETTERS_PREV});
export const complete=(letter) => ({'type': types.COMPLETE, letter});

export const beginTraining = (needLetter, width) => ({'type': types.TRAINING_BEGIN, needLetter, width});
export const endTraining = () => ({'type': types.TRAINING_END});
export const catchLetter = (catchLetter) => ({'type': types.LETTER_CATH, catchLetter});
export const destroyLetter = (letter) => ({'type': types.DESTROY_LETTER, letter});
export const generateLetter = (width) => ({'type': types.GENERATE_LETTER, width});
