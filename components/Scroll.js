import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function Scroll({icon, action}){
    return(
        <TouchableOpacity 
            onPress={()=>action()}
            style={styles.scrollView}>
                <FontAwesomeIcon icon={icon} size={30}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        alignSelf: 'center',
    },
    textView: {
        fontSize: 34,
        textAlign: 'center',
    }
})