import React from 'react'
import {View, StyleSheet} from 'react-native'

import { faChevronLeft, faChevronRight, faGift } from '@fortawesome/free-solid-svg-icons'

import Letter from './Letter';
import LetterProgress from './LetterProgress';
import ActionIcon from './ActionIcon';
import TrainingModal from './TrainingModal';

import { useSelector, useDispatch } from 'react-redux'
import { nextLetter, prevLetter, beginTraining } from './../redux/actions'

export default function Alphabet(){
    const currentLetter = useSelector(state => state.letters.current)
    const dispatch = useDispatch()
    return(
        <View>
            <View style={styles.topView}>
                <ActionIcon icon={faChevronLeft} action={()=>dispatch(prevLetter())}/>
                <Letter name={currentLetter.name}/>
                <ActionIcon icon={faChevronRight} action={()=>dispatch(nextLetter())}/>
            </View>
            <View style={styles.bottomView}>
                <LetterProgress level={currentLetter.level}/>
                <ActionIcon size={80} icon={faGift} action={()=>dispatch(beginTraining(currentLetter.name))}/>
            </View>
            <TrainingModal/>
        </View>
    );
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
    },
    bottomView: {
        alignItems: 'center'
    }
})