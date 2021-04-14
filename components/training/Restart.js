import React from 'react';
import { StyleSheet, View } from 'react-native';

import { faSmileBeam, faSadTear } from '@fortawesome/free-regular-svg-icons';
import ActionIcon from '../common/ActionIcon';

import { useSelector, useDispatch } from 'react-redux';

export default function Restart(){
    const success = useSelector(state => state.training.success);
    return (
        <View style={styles.restartModalView}>
            <ActionIcon icon={success ? faSmileBeam : faSadTear} size={60}/>
        </View>
    )
}

const styles = StyleSheet.create({
    restartModalView: {
        top: 200,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 250,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
    }
})