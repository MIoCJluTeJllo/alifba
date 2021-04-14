import React from 'react'
import {View, StyleSheet} from 'react-native'

import { faChevronLeft, faChevronRight, faGift, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Letter from './letters/Letter';
import ActionIcon from './common/ActionIcon';
import Root from './training/Root';

import { useSelector, useDispatch } from 'react-redux'
import { nextLetter, prevLetter, beginTraining } from '../redux/actions'

export default function Body(){
    const currentLetter = useSelector(state => state.letters.current)
    const dispatch = useDispatch()
    return(
        <View>
            <View style={styles.topView}>
                <ActionIcon icon={faChevronLeft} action={()=>dispatch(prevLetter())}/>
                <Letter name={currentLetter.name}/>
                <ActionIcon icon={faChevronRight} action={()=>dispatch(nextLetter())}/>
            </View>
            <View style={styles.bottomView}>
                <ActionIcon 
                    size={80} 
                    icon={!currentLetter.complete ? faGift : faThumbsUp}
                    action={()=>dispatch(beginTraining(currentLetter.name))}/>
            </View>
            <Root/>
        </View>
    );
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
    },
    bottomView: {
        alignItems: 'center'
    }
})