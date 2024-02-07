import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack';
import {DataProvider} from './context/DataContext';
import {MenuProvider} from 'react-native-popup-menu';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <MenuProvider>
      <GluestackUIProvider config={config}>
        <DataProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="AuthStack"
                component={AuthStack}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DataProvider>
      </GluestackUIProvider>
    </MenuProvider>
  );
}
