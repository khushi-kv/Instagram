import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Image, ScrollView, Box, HStack} from '@gluestack-ui/themed';
import feed from '../data/feed.json';
function Homescreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          size="xs"
          width={'45%'}
          position="absolute"
          top={5}
          left={-16}
          source={{
            uri: 'https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png',
          }}
          alt="Logo"
        />
        <Image
          size="xs"
          width={12}
          height={12}
          position="absolute"
          top={20}
          left={130}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MoCoHaAPT9kmJhBGb2pqu3E4gnbGP3w4Sw&usqp=CAU',
          }}
          alt="Down Arrow"
        />

        <Image
          source={require('../public/Images/heart.png')}
          width={20}
          height={20}
          position="absolute"
          top={9}
          right={60}
          alt="heartIcon"
        />
        <Image
          size="xs"
          width={20}
          position="absolute"
          top={-1}
          right={20}
          source={{
            uri: 'https://st2.depositphotos.com/38069286/42112/v/450/depositphotos_421121214-stock-illustration-direct-messages-button-icon-isolated.jpg',
          }}
          alt="MessageIcon"
        />
        <Box top={60}>
          {feed.map((data, index) => (
            <>
              <View key={index}>
                <HStack>
                  <Image
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaAsiURlbNIvNkNi5UCRzXStgONEKRH6emg&usqp=CAU',
                    }}
                    width={30}
                    height={30}
                    left={10}
                    alt="UserImage"
                    rounded={'$full'}
                  />
                  <Text marginTop={4} left={16}>
                    {data.Username}
                  </Text>
                  <Image
                    source={{
                      uri: 'https://static.vecteezy.com/system/resources/previews/021/190/333/original/more-vertical-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
                    }}
                    width={30}
                    height={30}
                    alt="Icon"
                    position="absolute"
                    right={10}
                  />
                </HStack>

                <ScrollView horizontal top={6}>
                  {data.Images.map((image, i) => (
                    <Image
                      key={i}
                      source={{uri: image.Url}}
                      width={image.Width}
                      height={image.Height}
                      alt="Image"
                    />
                  ))}
                </ScrollView>
              </View>
            </>
          ))}
        </Box>
      </View>
    </ScrollView>
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
