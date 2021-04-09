import React, {useRef, useEffect} from 'react'
import {StyleSheet, Animated} from 'react-native'

import {catchLetter} from './../redux/actions'
import {useDispatch} from 'react-redux'

export default function AnimLetter({letter, animTime=2000, onDestroy=()=>{}}){
    const dispatch = useDispatch()
    const fadeValue = useRef(new Animated.Value(1)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;
    const spinAnim = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const anim = useRef(
        Animated.parallel([
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: animTime
            }),
            Animated.timing(fadeValue, {
                toValue: 0,
                duration: animTime
            })])
    ).current;
    useEffect(()=>anim.start(()=>onDestroy(letter)), [])
    const onCatch = () => {
        dispatch(catchLetter(letter))
    }
    return(
        <Animated.Text 
            onPress={()=>onCatch()}
            style={
                [styles.letterView, {
                    'left': letter.left,
                    'transform': [{rotate: spinAnim}],
                    'opacity': fadeValue}]}>
            {letter.name}
        </Animated.Text>
    );
}

const styles = StyleSheet.create({
    letterView: {
        fontSize: 120,
    }
})