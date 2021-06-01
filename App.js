import React from 'react';
import {View, StyleSheet, ImageBackground } from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer';

import Header from './components/main/Header';
import MainScene from './components/main/MainScene';

export default function App(){
    const store = createStore(rootReducer);
    return(
        <Provider store={store}> 
            <View style={styles.appView}>
                <ImageBackground
                    style={styles.backgroundImgView}
                    source={require('./assets/background.jpg')}>
                    <View style={styles.headerView}>
                        <Header/>
                    </View>
                    <View style={styles.bodyView}>
                        <MainScene/>
                    </View>
                </ImageBackground>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    appView: {
        flex: 1,
    },
    backgroundImgView: {
        borderWidth: 1,
        flex: 1,
    },
    headerView: {
        flex: 1,
    },
    bodyView: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    }
})