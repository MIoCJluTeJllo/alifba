import * as types from '../types'
import {alphabet} from '../../constants'

const initLetters = alphabet.map(letter => ({'name': letter, 'level': 0, 'complete': false}))

const initialState = {
    letters: initLetters,
    current: initLetters[0]
}

let counter = 0

export const lettersReducer = (state=initialState, action) => {
    const {letters, current} = state
    switch (action.type){
        case types.LETTERS_NEXT: {
            if (counter < letters.length - 1){
                counter++
            }
            return {...state, 'current': letters[counter]}
        }
        case types.LETTERS_PREV: {
            if (counter > 0){
                counter--
            }
            return {...state, 'current': letters[counter]}
        }
        case types.LEVEL_UP: {
            if (!letters[counter].complete){
                letters[counter].level++
                if (letters[counter].level == 2){
                    letters[counter].complete = true
                }
            }
            return state
        }
        default: return state
    }
}