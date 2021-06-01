import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { letterComplete, closeTraining } from './../../redux/actions';


export default function Restart(){
    const success = useSelector(state => state.training.success);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (success){
            dispatch(letterComplete())
        }
    }, [success])
    const close = () => {
        dispatch(closeTraining())
    }
    return (
        <TouchableOpacity onPress={()=>close()}>
            <Image 
                style={styles.resultImageView}
                source={success ? 
                    require(`./../../assets/gifs/success.gif`) : 
                    require(`./../../assets/gifs/loss.gif`)}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    resultImageView: {
        width: 124, 
        height: 124,
        alignSelf: 'center'
    }
})