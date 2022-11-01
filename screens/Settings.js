import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SettingsItem from '../components/SettingsItem';
import SwitchToggle from "react-native-switch-toggle";

const Settings = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.CategoryHeader}>Account</Text>
            <SettingsItem iconName="wallet" title="Manage Wallet"/>
            <SettingsItem iconName="send" title="Transaction History"/>
            <Text style={[styles.CategoryHeader]}>Notifications</Text>
            <SettingsItem iconName="notifications" title="Push Notifications"/>
            <Text style={[styles.CategoryHeader]}>Support</Text>
            <SettingsItem iconName="help-circle" title="Help"/>
            <View style={{marginTop: "10%"}}><SettingsItem iconName="wallet" title="Help"/></View>
            <Text style={[ styles.CategoryHeader, {marginTop: "-10%"}]}>Log Out</Text>
            <SettingsItem iconName="log-out" title="Log Out"/>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    CategoryHeader: {
        color: "grey",
        fontSize: 15,
        fontWeight: "bold",
        
    },

});