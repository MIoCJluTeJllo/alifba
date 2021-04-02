import React from 'react'
import {View, StyleSheet} from 'react-native'

import Alphabet from './components/Alphabet'

export default function App(){
    return(
        <View style={styles.appView}>
            <Alphabet/>
        </View>
    );
}

const styles = StyleSheet.create({
    appView: {
        paddingVertical: 30,
        paddingHorizontal: 10,
    }
})