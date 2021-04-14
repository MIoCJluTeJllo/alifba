import React from 'react';
import {Text, StyleSheet} from 'react-native';

import { useSelector } from 'react-redux';

export default function Counter(){
    const counter = useSelector(state => state.letters.counter);
    const length = useSelector(state => state.letters.length);
    return(
        <Text style={styles.counterTextView}>
            <Text style={styles.counterText}>{counter+1}</Text>/{length}
        </Text>
    );
}

const styles = StyleSheet.create({
    counterTextView: {
        fontSize: 24,
    },
    counterText: {
        fontWeight: 'bold'
    }
})