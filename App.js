import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from "./src/login/login";
import home from "./src/components/App"
import cadastro from "./src/cadastro/cadastro"

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } } initialRouteName="login">
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="cadastro" component={cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;