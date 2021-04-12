import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function ActionIcon({size=40, icon, action=()=>{}}){
    return(
        <TouchableOpacity style={styles.actionIconView} onPress={()=>action()}>
            <FontAwesomeIcon size={size} icon={icon}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    actionIconView: {
        justifyContent: 'center'
    }
})