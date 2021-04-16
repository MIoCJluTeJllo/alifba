import * as types from './../types';
import { alphabet, TRAINING_PROGRESS_COUNT, TRAINING_LETTERS_COUNT, TRAINING_PROGRESS_COLORS, TRAINING_MAX_ERROR_COUNT } from './../../constants';
import { mixArray, getFirstNFromItem } from './../../utils'

const initialState = {
    letters: [],
    begin: false,
    end: false,
    success: false,
    progressColors: new Array(TRAINING_PROGRESS_COUNT).fill(TRAINING_PROGRESS_COLORS.DEFAULT),
}

let counter = 0;

export const trainingReducer = (state=initialState, action) => {
    const { needLetter, progressColors, end } = state;
    switch (action.type){
        case types.TRAINING_BEGIN: {
            return {...initialState, begin: true, needLetter: action.needLetter, letters: mixArray(getFirstNFromItem(TRAINING_LETTERS_COUNT, action.needLetter, alphabet))}
        }
        case types.TRAINING_CLOSE: {
            return {...state, begin: false}
        }
        case types.LETTER_CATH: {
            if (!end){
                const correct = needLetter == action.catchLetter;
                const newColor = correct ? TRAINING_PROGRESS_COLORS.SUCCESS : TRAINING_PROGRESS_COLORS.ERROR;
                const updatedProgressColors = progressColors.map((oldColor, i) => i == counter ? newColor : oldColor);
                counter++;
                const mixLetters = mixArray(getFirstNFromItem(TRAINING_LETTERS_COUNT, needLetter, alphabet));
                if (counter == progressColors.length){
                    const success = TRAINING_MAX_ERROR_COUNT >= progressColors.filter(color => color == TRAINING_PROGRESS_COLORS.ERROR).length
                    counter=0;
                    return {...state, progressColors: updatedProgressColors, success, end: true, letters: mixLetters }
                }
                return {...state, progressColors: updatedProgressColors, letters: mixLetters}
            }
        }
        default: return state
    }
}