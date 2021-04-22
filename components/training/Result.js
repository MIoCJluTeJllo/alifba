import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { faSmileBeam, faSadTear } from '@fortawesome/free-regular-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { letterComplete } from './../../redux/actions';

import ActionIcon from '../common/ActionIcon';

export default function Restart(){
    const success = useSelector(state => state.training.success);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (success){
            dispatch(letterComplete())
        }
    }, [success])
    return (
        <Image 
            style={styles.resultImageView}
            source={success ? require('./../../assets/success.gif') : require('./../../assets/loss.gif')}/>
    )
}

const styles = StyleSheet.create({
    resultImageView: {
        width: 124, 
        height: 124,
        alignSelf: 'center'
    }
})