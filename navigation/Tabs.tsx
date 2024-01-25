import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import Searchscreen from '../screens/Searchscreen';
import Addpostscreen from '../screens/Addpostscreen';
import Profilescreen from '../screens/Profilescreen';
import {Image, View} from 'react-native';
const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../public/Images/home.png')}
                style={{
                  width: 25,
                  height: 30,
                  bottom: 10,
                  tintColor: focused ? '#0f0f10' : 'gray',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Searchscreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../public/Images/search.png')}
                style={{
                  width: 25,
                  height: 25,
                  bottom: 10,
                  tintColor: focused ? '#0f0f10' : 'gray',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Add"
        component={Addpostscreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../public/Images/add.png')}
                style={{
                  width: 25,
                  height: 25,
                  bottom: 10,
                  tintColor: focused ? '#0f0f10' : 'gray',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../public/Images/profile.png')}
                style={{
                  width: 35,
                  height: 35,
                  bottom: 10,
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;
