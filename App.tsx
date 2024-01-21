import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import Loginscreen from './screens/Loginscreen';
import Homescreen from './screens/Homescreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Loginscreen} />
            <Stack.Screen name="Home" component={Homescreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </>
  );
}
