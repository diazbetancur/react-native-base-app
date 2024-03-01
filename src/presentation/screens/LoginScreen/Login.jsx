import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { styles } from './../../../assets/styles'

export default function Login() {
  return (
    <View>
        <Image source={require('./../../../assets/images/logoChangeLogin.jpeg')} style={style.loginImage} />
        <View>
            <Text style={styles.textTitle}>
                Username:
                <TextInput placeholder="Username"/>
            </Text>
            <Text style={styles.textTitle}>
                Password:
                <TextInput secureTextEntry={true} placeholder="Password"/>
            </Text>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    loginImage:{
        width:200,
        height:200
    }
})