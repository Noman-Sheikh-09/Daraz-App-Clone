import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import Register from '../screens/register/Register';
export default function Navigation() {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register"  component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}