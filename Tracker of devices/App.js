import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import AdultLoginScreen from './screens/AdultLoginScreen';
import ChildLoginScreen from './screens/ChildLoginScreen';
import ChildScreen from './screens/ChildsScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AdultLoginScreen" component={AdultLoginScreen} />
        <Stack.Screen name="ChildLoginScreen" component={ChildLoginScreen} />
        <Stack.Screen name="ChildScreen" component={ChildScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
