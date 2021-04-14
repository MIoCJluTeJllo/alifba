import React, {useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

import Letter from './Letter';

import { useSelector, useDispatch } from 'react-redux';
import { generateLetter } from './../../redux/actions';

export default function Letters({begin}){
    const width = useWindowDimensions().width
    const dispatch = useDispatch()
    const letters = useSelector(state => state.training.letters)
    useEffect(()=>{
        if (begin){
            const timerID = setInterval(()=>{
                dispatch(generateLetter(width))
            }, 500)
            return () => clearInterval(timerID) 
        }
    }, [])
    return(
        <View style={styles.lettersView}>
            {
                letters.map(letter => <Letter letter={letter}/>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    lettersView: {
        flex: 1,
    }
})