import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button } from "react-native";

export default function login({ navigation }) {
  return(
    <KeyboardAvoidingView style={styles.background} >
      <View style={styles.containerLogo}>
        </View>

        <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChargeText={()=> {}}
          />

           <TextInput
           style={styles.input}
           placeholder="Email"
           secureTextEntry={true}
           autoCorrect={false}
           onChargeText={()=> {}}
           />
           <TextInput
           style={styles.input}
           placeholder="Senha"
           secureTextEntry={true}
           autoCorrect={false}
           onChargeText={()=> {}}
           />
           <TouchableOpacity style={styles.btnRegister}>
             <Text style={styles.registerText}>Cadastrar Conta</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btnvoltar} onPress={() => navigation.navigate('login')}>
        
             <Text style={styles.registerText}>Voltar para tela de login</Text>
           </TouchableOpacity>
          </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#191919",
    },
    submitText:{
        color: "#FFF",
        fontSize: 18
      },
      container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingBottom: 50
        
      },
      input:{
        backgroundColor: "#FFF",
        width: "90%",
        marginBottom:15,
        color: "#222",
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
      },
      btnRegister:{
        marginTop: 10,
      },
      registerText:{
        color: "#FFF"
      },
      btnvoltar: {
        width: '100%',
        height: 50,
        //backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      },
      
})