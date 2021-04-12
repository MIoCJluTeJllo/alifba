import React from 'react';
import {View, StyleSheet} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as star } from '@fortawesome/free-regular-svg-icons';
import { faStar as completeStar } from '@fortawesome/free-solid-svg-icons';

export default function Progress({level}){
    const sizes = [40, 50, 40]
    return(
        <View style={styles.letterProgressView}>
            {
                sizes.map((size, index) => level > index  ? 
                    <FontAwesomeIcon 
                        key={index}
                        color={'gold'}
                        icon={completeStar} 
                        size={size}/>:
                    <FontAwesomeIcon 
                        key={index}
                        icon={star} 
                        size={size}/>)         

            }
        </View>
    );
}

const styles = StyleSheet.create({
    letterProgressView: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})