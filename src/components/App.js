import React from 'react'
import { View, StyleSheet } from 'react-native'

import Principal from '../components/Principal'
import Botao from '../components/Botao'

export default () => (
    <View style={style.App}>
        <Principal />
        <Botao />
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,     
        backgroundColor: '#4682B4'   
    }
})