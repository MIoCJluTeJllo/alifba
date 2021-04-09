import React, {useState, useRef, useEffect} from 'react'
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native'

import AnimLetter from './AnimLetter'
import {alphabet} from './../constants'

export default function Game({letter}){
    const {width, height} = useWindowDimensions();
    const [letters, setLetters] = useState([]);
    useEffect(()=>{
        const timerId = setInterval(()=>{
            const left = Math.random() * width - 120;
            let name
            if (Math.random() * 10 > 6){
                name = letter
            } else {
                name = alphabet[Math.floor(Math.random() * alphabet.length)]
            }
            setLetters(prev => [...prev, {left, name}]);
        }, 500);
        return () => clearInterval(timerId);
    }, [])
    const removeLetter = (letter) => {
        setLetters(prev => prev.filter(l => l !== letter));
    }
    return(
        <View style={styles.gamView}>
            {
                letters.map(letter => 
                    <AnimLetter
                        animTime={3000}
                        key={letter.left}
                        onDestroy={removeLetter}
                        parrentHeight={height}
                        letter={letter}/>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    gamView: {
        flex: 1,
    }
})