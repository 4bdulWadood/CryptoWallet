import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import colors from '../configs/colors.js';
import GlobalStyles from '../configs/styles.js';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function SignUp({navigation}) {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const pressHandler = (screen) => {
      navigation.navigate(screen);
    }

  return (
    <View style={styles.container}>
            <View style={styles.backButton}><Ionicons onPress={e=>pressHandler("Splash")} size={30} color="grey" name={"arrow-back-outline"}> </Ionicons></View>
            <Image style={{width: "55%", height: "36%", marginRight: "5%", marginTop: "-20%" }} source={require('../assets/images/SignUpGraphic.png')} />
            <View style={styles.textArea}>
                <Text style={[GlobalStyles.headerStyle, {marginBottom: "5%"}]}>
                Sign Up
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Full Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
        <Text style={[GlobalStyles.subtextStyle, {color: "black", marginTop: "10%", marginBottom: "-6%"}]}>
           By signing up, you are agreeing to our <Text style={{color: colors.primaryColor}}>Terms & Conditions</Text> and <Text style={{color: colors.primaryColor}}>Privacy Policy</Text>
        </Text>
        <View style={{width: "70%" }}><Button onPress={e=>pressHandler("PostAuth")} title="Join" type="Dark"/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: "5%",
    overflow: "hidden",
  },
  textArea: {
    width: "100%",
    fontWeight: "10px",
    marginTop: "10%",
    marginLeft: "15%"
  },
  backButton: {
    marginRight: "75%",
    paddingBottom: "17%"
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 0,
    marginRight: "20%",
    marginLeft: "10%",
    borderBottomWidth: 1
  }
});