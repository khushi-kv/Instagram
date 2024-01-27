// Navigation/AuthStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginscreen from '../screens/Loginscreen';
import Tabs from './Tabs';
import BlogDetailscreen from '../screens/BlogDetailscreen';
import Homescreen from '../screens/Homescreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BlogDetailscreen" component={BlogDetailscreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
