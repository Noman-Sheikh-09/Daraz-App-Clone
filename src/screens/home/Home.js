import { View, Text, Image } from 'react-native'
import React from 'react'
import Background from '../../assets/background.jpg'

export default function Home() {
  return (
    <View>
      <Image source={Background} style={{width:'70%',height:400,marginLeft:'15%'}} />
      <Text style={{fontSize:24,textAlign:'center',marginTop:200}}>Home</Text>
    </View>
  )
}