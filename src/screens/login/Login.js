import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import CommonButton from '../../commonCompoentns/commonButton/CommonButton';
import {styles} from './LoginStyle';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FF4200'}}>
      <View style={styles.closeBtnnLogin}>
        <CommonButton title="X" />
      </View>
      <View style={styles.loginLogoContainer}>
        <Text style={styles.sheikhu}>Xheikh</Text>
        <Text style={styles.loginText}>
          SHOP OVER 20 {'\n'} MILLION PRODUCTS AT {'\n'} UNBEATABLE PRICES
        </Text>
      </View>

      <View style={styles.loginInputContainer}>
        <Text style={styles.regBtnLogin}>
          Register or Login with Mobile Number
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <TextInput
            style={{
              backgroundColor: 'white',
              marginLeft: '7%',
              marginRight: '7%',
              borderRadius: 10,
              marginTop: '5%',
            }}
            pointerEvents="none"
            editable={false}
            placeholder="Enter Your Phone Number"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.BtnLogin}>Login with email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginFooter}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: '30%',
          }}>
          <View
            style={{
              height: 0.5,
              backgroundColor: 'white',
              width: '25%',
            }}></View>
          <Text
            style={{
              color: 'white',
              fontWeight: '200',
              fontSize: 12,
              textAlign: 'center',
            }}>
            Or Continue with
          </Text>
          <View
            style={{
              height: 0.5,
              backgroundColor: 'white',
              width: '25%',
            }}></View>
        </View>
      </View>
    </View>
  );
}
