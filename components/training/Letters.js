import React, {useState, useEffect} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

import Letter from './Letter';
import {alphabet} from '../../constants';

export default function Letters({letter}){
    const {width, height} = useWindowDimensions();
    const [letters, setLetters] = useState([]);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            const left = Math.random() * width - 120;
            const name = (Math.random() * 10 > 3) ? letter : alphabet[Math.floor(Math.random() * alphabet.length)]
            setLetters(prev => [...prev, {left, name}]);
        }, 500);
        return () => clearInterval(timerId);
    }, [])
    return(
        <View style={styles.gamView}>
            {
                letters.map(letter => 
                    <Letter
                        animTime={3000}
                        key={letter.left}
                        onDestroy={()=>setLetters(prev => prev.filter(l => l !== letter))}
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