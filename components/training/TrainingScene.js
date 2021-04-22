import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { closeTraining } from '../../redux/actions';

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import ActionIcon from '../common/ActionIcon';
import Progress from './Progress';
import AnimLetters from './AnimLetters';
import Result from './Result';

export default function TriningScene(){
    const begin = useSelector(state => state.training.begin);
    const end = useSelector(state => state.training.end);
    const dispatch = useDispatch();
    const close = () => {
        dispatch(closeTraining())
    }
    return(
        <Modal visible={begin} onRequestClose={()=>close()} transparent={true}>
                <View style={styles.headerView}>
                    <ActionIcon size={40} icon={faTimesCircle} action={close}/>
                    <Progress/>
                </View>
                <View style={styles.bodyView}>
                    { begin && !end && <AnimLetters/>}
                    { end && <Result/> }
                </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    headerView: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },
    bodyView: {
        flex: 20,
    }
})