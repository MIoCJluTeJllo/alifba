import {combineReducers} from 'redux';
import {trainingReducer} from './reducers/trainingReducer';
import {lettersReducer} from './reducers/lettersReducer';

export const rootReducer = combineReducers({
    'training': trainingReducer,
    'letters': lettersReducer
})