import React from 'react'
import { Text, Button } from 'react-native'
import Estilo from './Estilo'

export default () => {

    function executar() {
        console.warn('Que bom que você está feliz!')
    }

    return (
            <Button
                title="Feliz"
                onPress={executar}
            />
    )
}