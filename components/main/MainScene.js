import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux';
import { nextLetter, prevLetter } from '../../redux/actions';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ActionIcon from '../common/ActionIcon';
import Counter from './Counter';
import Letter from './Letter';
import TrainingScene from '../training/TrainingScene';

export default function MainScene(){
    const dispatch = useDispatch();
    return(
        <View style={styles.mainSceneView}>
            <Counter/>
            <View style={styles.letter}>
                <ActionIcon icon={faChevronLeft} action={()=>dispatch(prevLetter())}/>
                <Letter/>
                <ActionIcon icon={faChevronRight} action={()=>dispatch(nextLetter())}/>
            </View>
            <TrainingScene/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainSceneView: {
        alignItems: 'center'
    },
    letter: {
        flexDirection: 'row',
    }
})