import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { getItemFromFirestore } from './../../services/firebase';

import { getSound } from './../../services/audio';

export default function ShadowText({text, size, color="black", action=()=>{}}){
    const [song, setSong] = useState()
    useEffect(()=>{
        getItemFromFirestore(`songs/${text}.mp3`).then(
            url => getSound(url).then(
                sound => setSong(sound)
            )
        )
    }, [text])
    const onPress = async () => {
        if (song) await song.playAsync();
        action();
    }
    return(
        <TouchableOpacity onPress={()=> onPress()}>
            <Text style={[styles.letterText, { fontSize: size, color }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    letterText: {
        padding: 5,
        textAlign: 'center',
        fontSize: 160,
        color: 'blue',
        textShadowColor: 'black', 
        textShadowOffset: { width: -5, height: 5 },
        textShadowRadius: 10,
        fontWeight: 'bold'
    }
})