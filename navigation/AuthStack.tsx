// Navigation/AuthStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginscreen from '../screens/Loginscreen';
import Tabs from './BottomTabs';
import BlogDetailscreen from '../screens/BlogDetailscreen';
import Storyscreen from '../screens/Storyscreen';
import StoryContent from '../screens/StoryContent';

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
      <Stack.Screen name='Storyscreen' component={Storyscreen} />
      <Stack.Screen name="StoryContent" component={StoryContent}/>
    </Stack.Navigator>
  );
}

export default AuthStack;
