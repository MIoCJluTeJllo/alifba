import React, {useEffect, useState} from 'react'
import {Modal, StyleSheet, View} from 'react-native'

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import ActionIcon from './ActionIcon'
import GameProgress from './GameProgress'
import Training from './Training'

import {useSelector, useDispatch} from 'react-redux'
import {endTraining} from './../redux/actions'

export default function TrainingModal(){
    const start = useSelector(state => state.training.beginTraining)
    const dispatch = useDispatch()
    console.log(start)
    const finish = () => {
        dispatch(endTraining())
    }
    return(
        <Modal 
            onRequestClose={()=>finish()}
            visible={start} 
            style={styles.modalWindow}>
            <View style={styles.modalView}>
                <View style={styles.menuView}>
                    <ActionIcon size={40} icon={faTimesCircle} action={finish}/>
                    <GameProgress/>
                </View>
                <View style={styles.gameView}>
                    <Training/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    menuView: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    gameView: {
        flex: 20,
    }
})