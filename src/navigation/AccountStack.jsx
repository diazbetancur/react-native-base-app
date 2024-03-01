import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../presentation/screens/AccountScreen/Account';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
   <Stack.Navigator>
        <Stack.Screen 
        name="home" 
        component={Account}
        options={{
            title:"Inicio"
        }}/>
   </Stack.Navigator>
  );
}