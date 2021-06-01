import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { beginTraining } from './../../redux/actions'

import { faGift, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { getItemFromFirestore } from './../../services/firebase'

import ActionIcon from './../common/ActionIcon';
import ShadowText from './../common/ShadowText';

export default function Letter(){
    const letter = useSelector(state => state.letters.current);
    const dispatch = useDispatch();
    const [gifUrl, setGifUrl] = useState();
    useEffect(()=>{
        const path = !letter.complete ? 'gifts/default.gif' : `gifts/${letter.name}.gif`;
        getItemFromFirestore(path).then(
            url => setGifUrl(url)
        ).catch(
            error => setGifUrl(null)
        )
    }, [letter])
    return(
        <View style={styles.letterView}>
            <ShadowText text={letter.name} color={letter.color} size={160}/>
            {
                !letter.complete ? 
                <TouchableOpacity onPress={()=>dispatch(beginTraining(letter.name))}>
                    <Image source={gifUrl ? {uri: gifUrl} : require('./../../assets/gifs/error.gif')} style={{width: 150, height: 150 }}/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={()=>dispatch(beginTraining(letter.name))}>
                    <Image source={gifUrl ? {uri: gifUrl} : require('./../../assets/gifs/error.gif')} style={{width: 150, height: 150 }}/>
                </TouchableOpacity>
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