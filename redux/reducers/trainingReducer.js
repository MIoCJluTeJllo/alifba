import * as types from './../types';
import {alphabet} from './../../constants';
import { TRAINING_PROGRESS_COUNT, TRAINING_PROGRESS_COLORS, TRAINING_MAX_ERROR } from './../../constants';
import { complete } from '../actions';

const initialState = {
    begin: false,
    letters: [],
    end: false,
    success: false,
    progressColors: new Array(TRAINING_PROGRESS_COUNT).fill(TRAINING_PROGRESS_COLORS.DEFAULT),
}

let counter = 0;

export const trainingReducer = (state=initialState, action) => {
    const {letters, needLetter, progressColors} = state
    switch (action.type){
        case types.TRAINING_BEGIN: {
            return {...initialState, begin: true, needLetter: action.needLetter}
        }
        case types.TRAINING_END: {
            return {...state, begin: false}
        }
        case types.GENERATE_LETTER: {
            const left = Math.random() * action.width;
            const name = (Math.random() * 10 > 5) ? needLetter : alphabet[Math.floor(Math.random() * alphabet.length)]
            return {...state, letters: [...letters, {left, name}]}
        }
        case types.DESTROY_LETTER: {
            return {...state, letters: letters.filter(letter => letter != action.letter)}
        }
        case types.LETTER_CATH: {
            if (counter < progressColors.length){
                const newProgressColors = progressColors.map((color, index) => 
                    index == counter ? 
                        needLetter == action.catchLetter ? 
                            TRAINING_PROGRESS_COLORS.SUCCESS : 
                            TRAINING_PROGRESS_COLORS.ERROR :
                        color)
                counter++
                if (counter == progressColors.length){
                    const success = TRAINING_MAX_ERROR >= progressColors.filter(color => color == TRAINING_PROGRESS_COLORS.ERROR).length;
                    counter=0;
                    if (success){
                        complete(needLetter)
                    }
                    return {...state, end: true, success, progressColors: newProgressColors}
                }
                return {...state, progressColors: newProgressColors};
            }
        }
        default: return state
    }
}