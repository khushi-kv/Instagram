import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </>
  );
}
