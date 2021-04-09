import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare as regSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquare as solSquare } from '@fortawesome/free-solid-svg-icons';

import {useSelector} from 'react-redux'

export default function GameProgress(){
    const correct = useSelector(state => state.correct)
    return(
        <View style={styles.gameProgressView}>
            {
                new Array(7).fill('').map(sq => (
                    <FontAwesomeIcon icon={regSquare} size={40}/>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    gameProgressView: {
        paddingLeft: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})