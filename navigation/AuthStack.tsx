// Navigation/AuthStack.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Tabs from './BottomTabs';
import BlogDetailscreen from '../screens/BlogDetail';
import Story from '../screens/Story';
import StoryContent from '../screens/StoryContent';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false, title: ''}}
      />
      <Stack.Screen
        name="BlogDetailscreen"
        component={BlogDetailscreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen name="Storyscreen" component={Story} />
      <Stack.Screen
        name="StoryContent"
        component={StoryContent}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
