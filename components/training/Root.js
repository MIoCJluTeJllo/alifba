import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import ActionIcon from './../common/ActionIcon';
import Progress from './Progress';
import Letters from './Letters';

import {useSelector, useDispatch} from 'react-redux'
import {endTraining} from '../../redux/actions'

export default function Root(){
    const start = useSelector(state => state.training.beginTraining)
    const dispatch = useDispatch()
    const finish = () => {
        dispatch(endTraining())
    }
    return(
        <Modal onRequestClose={()=>finish()} visible={start}>
            <View style={styles.modalView}>
                <View style={styles.headerView}>
                    <ActionIcon size={40} icon={faTimesCircle} action={finish}/>
                    <Progress/>
                </View>
                <View style={styles.bodyView}>
                </View>
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