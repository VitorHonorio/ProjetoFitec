import React from "react";
import { Text, View, container, StyleSheet } from "react-native";

export default function home (){
    return(
        <View>
            <Text>Bem vindo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fles:1,
        justifyContent: "center",
        alignItems: "center"
    }
});