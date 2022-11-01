import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import Market from './Market';
import Portfolio from './Portfolio';
import Payments from './Payments';
import { Ionicons } from '@expo/vector-icons';
import colors from '../configs/colors'

const Tab = createBottomTabNavigator();

function BottomTabNavigator(){
    return (
        <Tab.Navigator screenOptions={()=>({
            tabBarActiveTintColor: colors.primaryColor,
            tabBarStyle: {
                height: "10%"
            },
            tabBarIconStyle: {
                marginTop: "10%"
            }
        })}>
            <Tab.Screen  options={{ headerShown: false, tabBarIcon: ({color})=>(<Ionicons size={25} color={color} name="pie-chart" />) }} name="Portfolio">{Portfolio}</Tab.Screen>
            <Tab.Screen options={{ tabBarIcon: ({color})=>(<Ionicons size={25} color={color} name="pricetag" />) }} name="Market">{Market}</Tab.Screen>
            <Tab.Screen options={{ tabBarIcon: ({color})=>(<Ionicons size={25} color={color} name="send" />) }} name="Payments">{Payments}</Tab.Screen>
            <Tab.Screen options={{ tabBarIcon: ({color})=>(<Ionicons size={25} color={color} name="settings" />) }} name="Settings">{Settings}</Tab.Screen>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;