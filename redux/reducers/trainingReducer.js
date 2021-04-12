import * as types from './../types'
import {levelUp} from './../actions'

const initialState = {
    beginTraining: false,
    progress: Array(7).fill('white'),
    levelUp: false
}

let progressCounter = 0

export const trainingReducer = (state=initialState, action) => {
    const {progress, needLetter} = state
    switch (action.type){
        case types.TRAINING_BEGIN: {
            return {...state, 'beginTraining': true, 'needLetter': needLetter, 'progress': Array(7).fill('white')}
        }
        case types.TRAINING_END: {
            return {...state, 'beginTraining': false}
        }
        case types.LETTER_CATH: {
            if (progressCounter < progress.length){
                progress[progressCounter] = action.catchLetter == needLetter ? "green" : "red"
                progressCounter++
                if (progressCounter == progress.length){
                    progressCounter = 0
                    if (progress.filter(color => color == 'red').length < 3){
                        levelUp(needLetter)
                    }
                    return {...state, 'beginTraining': false, 'levelUp': true}
                }
            }
            return {...state, 'progress': progress.slice()}
        }
        default: return state
    }
}