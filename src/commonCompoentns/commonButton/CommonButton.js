import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CommonButton(props) {
  return (
    <>
      <TouchableOpacity>
        <Text>
{props.title}
        </Text>
      </TouchableOpacity>
    </>
  )
}