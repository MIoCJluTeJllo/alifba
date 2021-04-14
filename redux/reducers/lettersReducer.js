import * as types from '../types'
import {alphabet} from '../../constants'

const initLetters = alphabet.map(letter => ({name: letter, complete: false}))

const initialState = {
    letters: initLetters,
    current: initLetters[0]
}

let counter = 0;

export const lettersReducer = (state=initialState, action) => {
    const {letters} = state
    switch (action.type){
        case types.LETTERS_NEXT: {
            if (counter < letters.length - 1){
                counter++
            }
            return {...state, current: letters[counter]}
        }
        case types.LETTERS_PREV: {
            if (counter > 0){
                counter--
            }
            return {...state, current: letters[counter]}
        }
        case types.COMPLETE: {
            letters = letters.map((letter, index) => index == counter ? ({...letter, complete: true}) : letter)
            return {...state, letters, current: letters[counter]}
        }
        default: return state
    }
}