import React, { useRef } from 'react';
import {View, StyleSheet, useWindowDimensions, Animated} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { beginTraining } from './../../redux/actions';

export default function AnimLetters(){
    const width = useWindowDimensions().width;
    const letters = useSelector(state => state.training.letters);
    const dispatch = useDispatch()
    const opacity = useRef(new Animated.Value(1)).current;
    const anim = () => {
        Animated.sequence([
            Animated.delay(),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1300,
            })
        ]).start(()=>{
            opacity.setValue(1);
            dispatch(beginTraining())
        })
    }
    return(
        <View style={styles.animLettersView}>{
            letters.map(letter => 
                <Animated.Text 
                    onPress={()=>anim()}
                    style={[styles.animLetterView, {
                        width: width/4,
                        opacity
                    }]}>
                    {letter}
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
        fontSize: 80,
        borderWidth: 1,
        textAlign: 'center',
    }
})