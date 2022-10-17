import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './App/Screens/Dashboard';
import AccountScreen from './App/Screens/AccountScreen';
import ClassIX from './App/Screens/ClassIX';
import ClassX from './App/Screens/ClassX';
import Teachers from './App/Screens/Teachers';
import Welcome from './App/Screens/Welcome';
import LS from './App/Screens/LS';
import Addstudents from './App/Screens/Addstudents';
import Service from './App/Screens/Service'; 
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
               
               {/* <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen> */}
               <Stack.Screen name='AccountScreen' component={AccountScreen}></Stack.Screen>
               <Stack.Screen name='Service' component={Service}></Stack.Screen>
               <Stack.Screen name='Addstudents' component={Addstudents}></Stack.Screen>
                <Stack.Screen name='LS' component={LS}></Stack.Screen>
                
                
                
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;