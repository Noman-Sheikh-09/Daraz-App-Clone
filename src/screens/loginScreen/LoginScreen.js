import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoginScreenStyle';
export default function LoginScreen() {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("/Home")} >

      <Text>
Show

      </Text>
      </TouchableOpacity>

    </View>
  )
}