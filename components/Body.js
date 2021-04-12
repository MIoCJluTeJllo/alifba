import React from 'react'
import {View, StyleSheet} from 'react-native'

import { faChevronLeft, faChevronRight, faGift } from '@fortawesome/free-solid-svg-icons'

import Letter from './letters/Letter';
import Progress from './letters/Progress';
import ActionIcon from './common/ActionIcon';
import TrainingModal from './training/Root';

import { useSelector, useDispatch } from 'react-redux'
import { nextLetter, prevLetter, beginTraining } from '../redux/actions'

export default function Body(){
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
                <Progress level={currentLetter.level}/>
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