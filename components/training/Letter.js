import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

import {useDispatch} from 'react-redux';
import {catchLetter, destroyLetter} from '../../redux/actions';

const size = 120

export default function Letter({letter, animTime=2000}){
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
    useEffect(()=>anim.start(()=>dispatch(destroyLetter(letter))), [])
    return(
        <Animated.Text 
            onPress={()=>{
                dispatch(catchLetter(letter.name))
                anim.stop()
            }}
            style={{'left': letter.left - size,
                    'transform': [{rotate: spinAnim}],
                    'fontSize': size}}>
            {letter.name}
        </Animated.Text>
    );
}