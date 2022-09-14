import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ClassIX from '../App/Screens/ClassIX';
import ClassX from '../App/Screens/ClassX';
import Home from '../App/Screens/Home';
import Teachers from '../App/Screens/Teachers'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
     headerShown: false}} >
    
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ClassIX" component={ClassIX} />
      <Stack.Screen name="ClassX" component={ClassX} />
      <Stack.Screen name="Teachers" component={Teachers} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}