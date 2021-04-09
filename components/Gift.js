import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

export default function Gift({action}){
    return(
        <TouchableOpacity onPress={()=>action()}>
            <FontAwesomeIcon icon={faGift} size={80}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})