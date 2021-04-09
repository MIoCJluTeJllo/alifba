import React from 'react'
import {View, StyleSheet} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as defaultStart } from '@fortawesome/free-regular-svg-icons';
import { faStar as completeStart } from '@fortawesome/free-solid-svg-icons';

export default function Progress(){
    const icon = defaultStart
    return(
        <View style={styles.scrollView}>
            <FontAwesomeIcon icon={icon} size={40}/>
            <FontAwesomeIcon icon={icon} size={50}/>
            <FontAwesomeIcon icon={icon} size={40}/>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})