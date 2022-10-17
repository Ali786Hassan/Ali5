import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './App/Screens/Dashboard';
import LS from './App/Screens/LS';
import Service from './App/Screens/Service';
import AccountScreen from './App/Screens/AccountScreen';
import Addstudents from './App/Screens/Addstudents';
const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
                <Stack.Screen name='AccountScreen' component={AccountScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;