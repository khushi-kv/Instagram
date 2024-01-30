// Navigation/AuthStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginscreen from '../screens/Loginscreen';
import Tabs from './BottomTabs';
import BlogDetailscreen from '../screens/BlogDetailscreen';
import Homescreen from '../screens/Homescreen';
import Gridscreen from '../screens/Gridscreen';
// import Profilereelscreen from '../screens/profilereelscreen';

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
      {/* <Stack.Screen name="Grid" component={Gridscreen} /> */}
      {/* <Stack.Screen name="Reels" component={Profilereelscreen} /> */}
    </Stack.Navigator>
  );
}

export default AuthStack;
