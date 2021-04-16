import * as types from '../types';
import { alphabet } from '../../constants';


const letters = alphabet.map(letter => ({name: letter, complete: false}));
let counter = 0;

const initialState = {
    current: letters[counter],
    counter,
    length: letters.length
}

export const lettersReducer = (state=initialState, action) => {
    switch (action.type){
        case types.LETTERS_NEXT: {
            if (counter < letters.length - 1){
                counter++;
            }
            return {...state, current: letters[counter], counter};
        }
        case types.LETTERS_PREV: {
            if (counter > 0){
                counter--;
            }
            return {...state, current: letters[counter], counter};
        }
        case types.LETTER_COMPLETE: {
            letters[counter].complete = true;
            return {...state, current: letters[counter]};
        }
        default: return state;
    }
}