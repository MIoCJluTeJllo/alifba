import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import {useSelector} from 'react-redux'

export default function Progress(){
    const progress = useSelector(state => state.training.progress)
    return(
        <View style={styles.gameProgressView}>
            {
                progress.map((color, index) => (
                    <FontAwesomeIcon 
                        color={color}
                        key={index+color} 
                        icon={faSquare}
                        style={{'borderWidth': 1, 'border': 'solid 1px black'}} 
                        size={40}/>
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