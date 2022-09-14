import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './App/Screens/Register';
import Dashboard from './App/Screens/Dashboard';
import ClassIX from './App/Screens/ClassIX';
import ClassX from './App/Screens/ClassX';
import Teachers from './App/Screens/Teachers';
import AccountScreen from './App/Screens/AccountScreen';
import Welcome from './App/Screens/Welcome';
import LS from './App/Screens/LS';
import Home from './App/Screens/Home';
import Details from './App/Screens/Details';
// import { AuthProvider } from './Navigation/AuthProvider';
// import Routes from './Navigation/Routes';
const Stack = createNativeStackNavigator();


const App = () => {

  return (
    
    //  <AuthProvider>
    //   <Routes/>
    //  </AuthProvider>
    <NavigationContainer>
       {<Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
       <Stack.Screen name='Welcome' component={Welcome}></Stack.Screen>
       <Stack.Screen name='LS' component={LS}></Stack.Screen>
       <Stack.Screen name='Register' component={Register}></Stack.Screen>
       <Stack.Screen name='AccountScreen' component={AccountScreen}></Stack.Screen>
        <Stack.Screen name='Dashboard' component={Dashboard}></Stack.Screen>
        <Stack.Screen name='ClassIX' component={ClassIX}></Stack.Screen>
        <Stack.Screen name='ClassX' component={ClassX}></Stack.Screen>
        <Stack.Screen name='Teachers' component={Teachers}></Stack.Screen>
     </Stack.Navigator>}
     </NavigationContainer>
   );
  
  }
export default App;
