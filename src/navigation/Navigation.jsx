import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name="account" 
            component={AccountStack} 
            options={{
              title: "Cuenta"
            }} />
            <Tab.Screen 
            name="home" 
            component={HomeStack} 
            options={{
              title: "Inicio"
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}