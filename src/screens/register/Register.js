import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './RegisterStyle';
export default function Register() {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={{fontSize: 30, marginLeft: 15}}>.</Text>
      </View>
      <View style={styles.registerContent}>
        <Text style={styles.regHeading}>What's your mobile number?</Text>
      </View>
      <View style={{flex: 5.5}}></View>
      <View style={styles.regNextBtnContainer}>
        <TouchableOpacity>
          <Text style={styles.regNextBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
