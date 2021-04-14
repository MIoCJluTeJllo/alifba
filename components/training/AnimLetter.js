import React, { useRef, useEffect, useState } from 'react';
import {Animated} from 'react-native';

import {useDispatch} from 'react-redux';
import {catchLetter, destroyLetter} from '../../redux/actions';
import Anim from './Anim';

const size = 120

export default function AnimLetter({width, delay, duration=2000}){
    const rotateValue = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const randLeft = () => {
        const n = Math.random() * width
        return n
    }
    const dispatch = useDispatch();
    const [left, setLeft] = useState(randLeft())

    const spinAnim = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const anim = () => {
        Animated.parallel([
            Animated.delay(delay),
            Animated.timing(rotateValue, {
                toValue: 1,
                duration}),
            Animated.timing(opacity, {
                toValue: 0,
                duration})            
        ]).start(()=>{
            rotateValue.setValue(0)
            opacity.setValue(1)
            setLeft(randLeft());
            anim();
        })

    }

    useEffect(()=>{
        anim()
    }, [])

    return(
        (<Animated.Text 
            onPress={()=>{
                dispatch(catchLetter(letter.name))
                rotateValue.stopAnimation()
            }}
            style={{'left': left - size,
                    'transform': [{rotate: spinAnim}],
                    'fontSize': size,
                    opacity}}>
            {'A'}
        </Animated.Text>)
    )
}