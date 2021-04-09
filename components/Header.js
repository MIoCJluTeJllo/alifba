import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Header(){
    return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Алифба</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
    },
    headerText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 42,
        color: '#522788'
    }
})