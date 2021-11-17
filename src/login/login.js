import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button } from "react-native";

export default function login({ navigation }) {
  return(
    <KeyboardAvoidingView style={styles.background} >
      <View style={styles.containerLogo}>
        <Image
        source={require("../assets/LogoLogin.png")}
        style={styles.Logo}
        />
        </View>

        <View style={styles.container}>
          <TextInput
          style={styles.input}
          placeholder="Email"
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
           
           <TouchableOpacity
            style={styles.btnSubmit} onPress={() => navigation.navigate('home')}>
             <Text style={styles.submitText}>Acessar</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btnRegister}>
             <Text style={styles.registerText}>Criar conta</Text>
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
  containerLogo:{
    flex:1,
    justifyContent: "center",
  },
  Logo:{
    width: 200,
    height: 200,
    borderRadius: 120
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
  btnSubmit:{
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7
  },
  submitText:{
    color: "#FFF",
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: "#FFF"
  },
});
