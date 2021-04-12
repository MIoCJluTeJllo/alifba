import React from 'react'
import {View, StyleSheet} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux'

import Header from './components/Header';
import Alphabet from './components/Alphabet';

import {rootReducer} from './redux/rootReducer'

export default function App(){
    const store = createStore(rootReducer)
    return(
        <Provider store={store}> 
            <View style={styles.appView}>
                <View style={styles.topView}>
                    <Header/>
                </View>
                <View style={styles.bodyView}>
                    <Alphabet/>
                </View>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    appView: {
        top: 10,
        flex: 1,
    },
    topView: {
        borderColor: 'red',
        flex: 1,
    },
    bodyView: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})