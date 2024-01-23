import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Image, ScrollView, Box, HStack} from '@gluestack-ui/themed';
import feed from '../data/feed.json';
import {SliderBox} from 'react-native-image-slider-box';

// import Swiper from 'react-native-swiper';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
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
        {/* <Image
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
        /> */}

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
        <Box marginTop={50}>
          {feed.map((data, index) => (
            <Box marginTop={10}>
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

                <SliderBox
                  top={6}
                  images={data.Images.map(image => image.Url)}
                  dotColor="#15ccf9"
                  inactiveDotColor="grey"
                  dotStyle={{
                    top: 30,
                    height: 5,
                    width: 5,
                  }}
                  // autoplay={true}
                  // autoplayInterval={4000}
                  // circleLoop={true}
                />
              </View>
              <HStack p={6} left={7} marginTop={10} gap={14}>
                <Image
                  source={require('../public/Images/heart.png')}
                  width={20}
                  height={20}
                  alt="heartIcon"
                />
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq--fJ0Y1HzOEFf2mItD8eYx6QMqrk32A5V6DEmx5FCDkg9rXFDFm9C_Y74G8T3dtfe2A&usqp=CAU',
                  }}
                  width={20}
                  height={20}
                  alt="Icon"
                />
                <Image
                  source={{
                    uri: 'https://static.thenounproject.com/png/2796195-200.png',
                  }}
                  width={25}
                  height={25}
                  position="relative"
                  bottom={2}
                  alt="Icon"
                />
                <Image
                  source={{
                    uri: 'https://img.myloview.com/stickers/save-icon-isolated-on-white-background-bookmark-symbol-modern-simple-vector-for-web-site-or-mobile-app-700-216346253.jpg',
                  }}
                  width={35}
                  height={35}
                  position="absolute"
                  right={10}
                  bottom={5}
                  alt="Icon"
                />
              </HStack>
              <Text left={10}>Liked by jenn_hann and others</Text>
              <HStack p={4} left={7}>
                <Text style={styles.Username}>{data.Username}</Text>
                <Text style={styles.Content}>{data.Content}</Text>
              </HStack>
              <Text style={styles.Comment}>View all comments</Text>
              <HStack>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhOUBC1XrkhE-MNtSOgIDX64EscjPBIeozw&usqp=CAU',
                  }}
                  width={30}
                  height={30}
                  left={10}
                  top={10}
                  alt="UserImage"
                  rounded={'$full'}
                />
                <Text style={styles.AddComment}>Add a comment...</Text>
              </HStack>
              <Text style={styles.Date}>{data.Date}</Text>
            </Box>
          ))}
        </Box>
      </View>
    </ScrollView>
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  Username: {
    fontWeight: '500',
  },
  Feed: {
    top: 10,
  },
  Content: {
    marginLeft: 7,
    fontSize: 13,
    paddingRight: 12,
    maxWidth: 320,
    flexWrap: 'wrap',
  },
  Date: {
    marginTop: 12,
    marginLeft: 8,
    fontSize: 12,
    color: 'gray',
  },
  Comment: {
    left: 10,
    fontSize: 12,
    color: 'gray',
  },
  AddComment: {
    borderWidth: 0,
    top: 20,
    left: 22,
    color: 'gray',
  },
  container: {
    backgroundColor: 'white',
  },
});
