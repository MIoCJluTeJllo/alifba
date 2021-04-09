import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'

import { faChevronLeft, faChevronRight, faGift } from '@fortawesome/free-solid-svg-icons'

import {db, listFilesAndDirectories} from './../services/firebase'

import Scroll from './Scroll'
import Letter from './Letter'
import Progress from './Progress'
import ActionIcon from './ActionIcon'
import Training from './Training'

import {alphabet} from './../constants'

export default function Alphabet(){
    const [letters, setLetters] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [beginTrain, setBeginTrain] = useState(false)
    useEffect(() => {
        setLetters(alphabet)/*
        listFilesAndDirectories(db).then((r) => {
            setLetters(r.items.map(item => item.location.path).sort())
        });*/
    }, [])
    const leftScroll = () => {
        if (currentIndex){
            setCurrentIndex(currentIndex-1)
        }
    }
    const rightScroll = () => {
        if (currentIndex < letters.length){
            setCurrentIndex(currentIndex+1)
        }
    }
    return(
        <View style={styles.apphabetView}>
            <View style={styles.topView}>
                <Scroll icon={faChevronLeft} action={leftScroll}/>
                <Letter name={letters[currentIndex]}/>
                <Scroll icon={faChevronRight} action={rightScroll}/>
            </View>
            <View style={styles.bottomView}>
                <Progress/>
                <ActionIcon size={80} icon={faGift} action={()=>setBeginTrain(true)}/>
            </View>
            <Training letter={letters[currentIndex]} visible={beginTrain} onClose={()=>setBeginTrain(false)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    apphabetView: {
    },
    topView: {
        flexDirection: 'row',
    },
    bottomView: {
        alignItems: 'center'
    }
})