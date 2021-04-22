import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { getRandomColor } from './../../utils'

export default function ShadowText({text, size}){
    return(
        <TouchableOpacity>
            <Text style={[styles.letterText, { color: getRandomColor(), fontSize: size }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    letterText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 160,
        color: 'blue',
        textShadowColor: 'black', 
        textShadowOffset: { width: -5, height: 5 },
        textShadowRadius: 10,
        fontWeight: 'bold'
    }
})