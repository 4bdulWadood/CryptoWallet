import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import SwitchToggle from "react-native-switch-toggle";
import colors from '../configs/colors';

const SettingsItem = ({iconName, title}) => {
  var [toggle, setToggle] = useState(true)

  return (
    <TouchableOpacity>
        <View style={styles.container}>
        <View style={styles.leftBox}><Ionicons size={30} color="white" name={iconName}/></View>
        <Text style={styles.textStyle}>{title}</Text>
        {
            title==="Push Notifications" ?
            <View style={{
                marginLeft:"7%",
                marginBottom: "5%"
            }}>
            <SwitchToggle
                switchOn={toggle}
                onPress={() => setToggle(!toggle)}
                circleColorOff='#C4C4C4'
                circleColorOn="white"
                backgroundColorOn='#D941FF'
                backgroundColorOff='#FFFFFF'
                containerStyle={{
                    marginTop: 16,
                    width: 60,
                    height: 35,
                    borderRadius: 20,
                    padding: 5,
                }}
                circleStyle={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    marginVertical: "5%"
                }}
            />
            </View>
            : 
            null
        }
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "68%",
        backgroundColor: colors.primaryColor,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "-100%"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: "20px"
    },
    leftBox: {
        marginLeft: "5%",
        marginRight: "3%"
    }
})


export default SettingsItem