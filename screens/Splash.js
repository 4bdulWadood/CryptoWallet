import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../configs/colors.js';
import GlobalStyles from '../configs/styles.js';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native';

export default function Splash({navigation}) {
  const pressHandler = (screen) => {
    navigation.navigate(screen);
  }


  return (
    <View style={styles.container}>
        <Image style={{width: "35%", height: "35%", marginBottom: "10%"}} source={require('../assets/images/splashScreenGraphic.png')} />
        <Text style={GlobalStyles.headerStyle}>
          Welcome!
        </Text>
        <View style={styles.subtitle}>
            <Text style={GlobalStyles.subtextStyle}>
            Welcome to CryptoWorld your one-stop shop for all crypto statistics and transactions. 
            </Text>
        </View>
        <Button onPress={e=>pressHandler("SignUp")} title="Get Started" type="dark"/>

            <TouchableOpacity onPress={e=>pressHandler("SignIn")}>
                <View style={styles.subtitle2}>
                <Text style={[GlobalStyles.subtextStyle, {color: "grey"}]}>
                Allready have an account?
                </Text>
                </View>
            </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: "20%",
    paddingTop: "10%"
  },
  subtitle: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  subtitle2: {
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%"

  }
});
