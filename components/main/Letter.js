import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { beginTraining } from './../../redux/actions'

import { faGift, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import ActionIcon from './../common/ActionIcon';
import ShadowText from './../common/ShadowText';

export default function Letter(){
    const letter = useSelector(state => state.letters.current);
    const dispatch = useDispatch();
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return(
        <View style={styles.letterView}>
            <ShadowText text={letter.name} size={160}/>
            {
                !letter.complete ? 
                <TouchableOpacity onPress={()=>dispatch(beginTraining(letter.name))}>
                    <Image source={require('./../../assets/gift.gif')} style={{width: 150, height: 150 }}/>
                </TouchableOpacity>:
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
        alignItems: 'center',
    }
})