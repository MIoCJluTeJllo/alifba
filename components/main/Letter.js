import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { beginTraining } from './../../redux/actions'

import { faGift, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import ActionIcon from './../common/ActionIcon';

export default function Letter(){
    const letter = useSelector(state => state.letters.current);
    const dispatch = useDispatch();
    return(
        <View style={styles.letterView}>
            <Text style={styles.letterText}>{letter.name}</Text>
            {
                !letter.complete ? 
                <ActionIcon 
                    size={80} 
                    icon={faGift}
                    action={()=>dispatch(beginTraining(letter.name))}/> :
                <ActionIcon 
                    size={80} 
                    icon={faThumbsUp}/>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    letterView: {
        width: 180,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterText: {
        textAlign: 'center',
        fontSize: 140,
    }
})