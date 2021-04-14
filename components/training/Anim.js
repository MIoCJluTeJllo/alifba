import React, {useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { generateLetter } from '../../redux/actions';

import AnimLetter from './AnimLetter';

export default function Anim({run}){
    const width = useWindowDimensions().width;
    //const letters = useSelector(state => state.training.letters);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(generateLetter(width))
        /*
        if (run){
            const timerID = setInterval(()=>{
                dispatch(generateLetter(width))
            }, 500)
            return () => clearInterval(timerID) 
        }*/
    }, [])
    return(
        <View style={styles.animView}>{
                new Array(10).fill().map((a, i) =>
                    <AnimLetter delay={(i+1)*100} width={width}/>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    animView: {
        flex: 1,
    }
})