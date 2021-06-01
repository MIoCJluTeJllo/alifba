import React, { useRef } from 'react';
import {View, StyleSheet, useWindowDimensions, Animated} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { catchLetter } from './../../redux/actions';

import ShadowText from './../common/ShadowText'
import { getRandomColor } from './../../utils'

export default function AnimLetters(){
    const width = useWindowDimensions().width;
    const letters = useSelector(state => state.training.letters);
    const dispatch = useDispatch()
    const opacity = useRef(new Animated.Value(1)).current;
    const anim = (letter) => {
        Animated.sequence([
            Animated.delay(50),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
            })
        ]).start(()=>{
            opacity.setValue(1);
            dispatch(catchLetter(letter));
        })
    }
    return(
        <View style={styles.animLettersView}>{
            letters.map(letter => 
                <Animated.Text 
                    key={letter}
                    style={[styles.animLetterView, {width: width/5, opacity, backgroundColor: getRandomColor()}]}>
                    <ShadowText 
                        action={()=>anim(letter)}
                        text={letter} 
                        size={50}/>
                </Animated.Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    animLettersView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center'
    },
    animLetterView: {
        fontSize: 50,
        textAlign: 'center',
        borderWidth: 1,
        backgroundColor: 'red',
        margin: 3,
    }
})