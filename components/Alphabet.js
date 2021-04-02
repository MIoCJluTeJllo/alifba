import React from 'react'
import {View, StyleSheet, useWindowDimensions} from 'react-native'

import {letters} from './../constants'
import Letter from './Letter'

export default function Alphabet(){
    const itemSize = {
        width: useWindowDimensions().width / 6,
        height: useWindowDimensions().height / 10
    }
    return(
        <View style={styles.apphabetView}>
            {letters.map((letter, i) => 
                <Letter
                    size={itemSize}
                    title={letter}
                    key={i}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    apphabetView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})