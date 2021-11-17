import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{alert("Tenha um ótimo dia!")}}>
          <Image style={styles.button} source={require("../assets/smile.png")}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4682B4',
    padding: 10,
    marginBottom: 100,
    resizeMode: 'center',
    width: 50,
    height: 50,
  },
});