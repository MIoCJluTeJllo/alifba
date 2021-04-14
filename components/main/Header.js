import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Header(){
    return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Әлифбә</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 42,
        color: '#522788'
    }
})