import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Letter({name}){
    return(
        <View style={styles.letterView}>
            <Text style={styles.letterText}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    letterView: {
        width: 180,
        height: 200,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    letterText: {
        textAlign: 'center',
        fontSize: 140,
    }
})