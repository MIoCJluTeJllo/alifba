import React from 'react'
import {TouchableOpacity} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function ActionIcon({size=40, icon, action=()=>{}}){
    return(
        <TouchableOpacity onPress={()=>action()}>
            <FontAwesomeIcon size={size} icon={icon}/>
        </TouchableOpacity>
    );
}