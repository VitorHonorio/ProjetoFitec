import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{alert("Tenha um ótimo dia!")}}>
          <Image style={styles.button} source={require("../assets/smile.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert("Tenha um ótimo dia!")}}>
          <Image style={styles.button} source={require("../assets/smile.png")}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#4682B4',
    padding: 10,
    marginBottom: 100,
    resizeMode: 'center',
    width: 100,
    height: 50,
  },
});