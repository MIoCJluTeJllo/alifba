import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

export default function Letter({title, size}){
    return(
        <TouchableOpacity style={[styles.letterView, {'width': size.width, 'height': size.height}]}>
            <Text style={styles.letterImg}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    letterView: {
        borderWidth: 1,
        margin: 1,
    },
    letterImg: {
        textAlign: 'center'
    }
})