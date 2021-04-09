import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Image} from 'react-native'

import {getImgFromFirestore} from '../services/firebase'

export default function LetterOld({path}){
    const [uri, setUri] = useState()
    useEffect(()=>{
        getImgFromFirestore(path).then(result => setUri(result))
    }, [path])
    return(
        <View style={styles.letterView}>
            <Image 
                style={styles.letterImg}
                resizeMode={'stretch'}
                source={{uri}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    letterView: {
        width: 180,
        height: 200,
        borderWidth: 2,
        borderColor: '#8628BF',
        borderRadius: 5,
        margin: 2,
    },
    letterImg: {
        flex: 1,
    }
})