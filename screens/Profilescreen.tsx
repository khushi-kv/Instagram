import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {Box, Image, VStack, Button, MenuItem} from '@gluestack-ui/themed';
import {CommonActions} from '@react-navigation/native';
import profiledata from '../data/profile.json';
import {HStack} from '@gluestack-ui/themed';
function Profilescreen({navigation}: any) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {profiledata.map(item => {
        return (
          <>
            <HStack p={8}>
              <Text style={styles.Username}>{item.name}</Text>
              <Image
                source={require('../public/Images/add.png')}
                style={{
                  position: 'absolute',
                  right: 70,
                  top: 6,
                  width: 25,
                  height: 25,
                  tintColor: '#0f0f10',
                }}
                alt="AddIcon"
              />
              <Image
                source={require('../public/Images/threelinebar.png')}
                style={{
                  position: 'absolute',
                  right: 10,
                  width: 38,
                  height: 38,
                }}
                alt="three line"
              />
            </HStack>
            <HStack marginTop={20}>
              <VStack>
                <Image
                  source={{
                    uri: 'https://as2.ftcdn.net/v2/jpg/04/78/48/71/1000_F_478487125_LgvcBMZ9MTNqhbD7owSLb3YMZSKWmrT4.jpg',
                  }}
                  width={80}
                  height={80}
                  left={10}
                  alt="UserImage"
                  rounded="$full"
                />
                <Text
                  style={{marginLeft: 6, fontWeight: '600', color: 'black'}}>
                  {item.name}
                </Text>
              </VStack>
              <Box display="flex" flexDirection="row" pl={35} p={24} gap={35}>
                <Box>
                  <Text style={styles.text}>{item.posts}</Text>
                  <Text style={{color: 'black'}}>posts</Text>
                </Box>
                <Box>
                  <Text style={styles.text}>{item.followers}</Text>
                  <Text style={{color: 'black'}}>followers</Text>
                </Box>
                <Box>
                  <Text style={styles.text}>{item.following}</Text>
                  <Text style={{color: 'black'}}>following</Text>
                </Box>
              </Box>
            </HStack>
            <HStack space="xs" pl={8} marginTop={25}>
              <Button
                backgroundColor="#F0F0F0"
                rounded="$lg"
                paddingHorizontal={40}
                height={30}
                p={1}>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Edit profile
                </Text>
              </Button>
              <Button
                backgroundColor="#F0F0F0"
                rounded="$lg"
                paddingHorizontal={30}
                height={30}>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Share profile
                </Text>
              </Button>
              <Button backgroundColor="#F0F0F0" rounded="$lg" height={30}>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-11-512.png',
                  }}
                  width={20}
                  height={20}
                  alt="UserImage"
                  rounded="$lg"
                />
              </Button>
            </HStack>
            <Box p={10} marginTop={10}>
              <Text style={{fontWeight: '600', color: 'black'}}>
                Story highlights
              </Text>
              <Text style={{color: 'black'}}>
                Keep your favourite stories on your profile
              </Text>
              {/* <Button backgroundColor=''>
                <Image
                source={{
                  uri:'https:ddd',
                }}
                width={5}
                height={5}
                alt="UserImage"
                rounded="$full"
                borderColor='black'
                borderWidth={1}
                padding={40}
                />
              </Button> */}
            </Box>
          </>
        );
      })}

      {/* <Button
        title="Logout"
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Login',
            })
          );
        }}
      /> */}
    </ScrollView>
  );
}

export default Profilescreen;
const styles = StyleSheet.create({
  Username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
