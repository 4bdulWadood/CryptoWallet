import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import colors from '../configs/colors.js';
import GlobalStyles from '../configs/styles.js';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function SignUp({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const pressHandler = () => {
        navigation.navigate('Splash');
      }

  return (
    <View style={styles.container}>
        <View style={styles.backButton}><Ionicons onPress={pressHandler} size={30} color="grey" name={"arrow-back-outline"}> </Ionicons></View>
        <Image style={{width: "55%", height: "38%", marginRight: "5%" }} source={require('../assets/images/SignUpGraphic.png')} />
        <View style={styles.textArea}>
            <Text style={[GlobalStyles.headerStyle, {marginBottom: "5%"}]}>
            Sign In
            </Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
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
            <Text style={{color: colors.primaryColor}}>Forget Password?</Text>
        </Text>
        <View style={{width: "70%" }}><Button title="Sign In" type="Dark"/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: "20%",
    overflow: "hidden",
  },
  textArea: {
    width: "100%",
    fontWieght: "10px",
    marginTop: "10%",
    marginLeft: "15%"
  },
  backButton: {
    marginRight: "75%"
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