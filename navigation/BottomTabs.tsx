import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Home';
import Searchscreen from '../screens/Search';
import Addpostscreen from '../screens/Addpost';
import Profilescreen from '../screens/Profile';
import {Image, View} from 'react-native';
import Loginscreen from '../screens/Login';
import Reelscreen from '../screens/Reels';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          title: '',
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

                  tintColor: '#0f0f10',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Searchscreen}
        options={{
          title: '',
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

                  tintColor: '#0f0f10',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Add"
        component={Addpostscreen}
        options={{
          title: '',
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

                  tintColor: '#0f0f10',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Reel"
        component={Reelscreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={require('../public/Images/reels.png')}
                style={{
                  width: 25,
                  height: 25,

                  tintColor: '#0f0f10',
                }}
              />
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}>
              <Image
                source={{
                  uri: 'https://as2.ftcdn.net/v2/jpg/04/78/48/71/1000_F_478487125_LgvcBMZ9MTNqhbD7owSLb3YMZSKWmrT4.jpg',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
                alt="Profile"
              />
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTabs;
