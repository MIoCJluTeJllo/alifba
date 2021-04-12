import * as types from './../types'
import {GAME_PROGRESS_COUNT} from './../../constants'
import {levelUp} from './../actions'

const progressColor = {default: 'white', error: 'red', success: 'green'}
const maxError = 2
let counter = 0

const initialState = {
    complete: false,
    progress: Array(GAME_PROGRESS_COUNT).fill(progressColor.default),
}

export const trainingReducer = (state=initialState, action) => {
    const {progress, needLetter, beginTraining, catchLetter} = state
    switch (action.type){
        case types.TRAINING_BEGIN: {
            return {...state, 'beginTraining': true, 'needLetter': needLetter, 'progress': initialState.progress}
        }
        case types.TRAINING_END: {
            return {...state, 'beginTraining': false}
        }
        case types.LETTER_CATH: {
            if (beginTraining){
                progress[counter] = catchLetter == needLetter ? progressColor.success : progressColor.error
                counter++
                if (counter == progress.length){
                    if (progress.filter(color => color == progressColor.error).length <= maxError){
                        levelUp(needLetter)
                    }
                    counter = 0
                    return initialState
                }
            }
            return state
        }
        default: return state
    }
}