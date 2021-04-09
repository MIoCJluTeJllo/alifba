import * as types from './types'

const initialState = {

}

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case types.LETTER_CATH: {
            return {...state, 'catchLetter': action.letter}
        }
        case types.GAME_PROGRESS: {
            return {...state, 'correct': action.correct}
        }
        default: return state
    }
}