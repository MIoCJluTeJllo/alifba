import React, {useEffect, useState} from 'react'
import {Modal, StyleSheet, View} from 'react-native'

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import ActionIcon from './ActionIcon'
import GameProgress from './GameProgress'
import Game from './Game'

import {fillGameProgress} from './../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

export default function Taining({letter, visible=false, onClose}){
    const catchLetter = useSelector(state => state.catchLetter)
    const dispatch = useDispatch()
    useEffect(()=>{
        fillGameProgress(catchLetter == letter)
    }, [catchLetter])
    return(
        <Modal visible={visible} style={styles.modalWindow}>
            <View style={styles.modalView}>
                <View style={styles.menuView}>
                    <ActionIcon size={40} icon={faTimesCircle} action={()=>onClose()}/>
                    <GameProgress/>
                </View>
                <View style={styles.gameView}>
                    <Game letter={letter}/>
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