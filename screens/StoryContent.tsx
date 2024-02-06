import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HStack} from '@gluestack-ui/themed';

interface StoryProps {
  route: RouteProp<
    {
      StoryContent: {
        imageUrl: string;
        username: string;
        isStoryscreen?: boolean;
      };
    },
    'StoryContent'
  >;
}
function StoryContent({route}: StoryProps) {
  console.log('Storycontent');
  console.log('Route:', route);
  const imageUrl = route?.params?.imageUrl;
  const username = route?.params?.username;
  const isStoryscreen = route?.params?.isStoryscreen;
  // console.log('ImageUrl', imageUrl);
  return (
    <View
      style={[styles.container, isStoryscreen ? styles.blackBackground : null]}>
      <>
        <HStack top={5}>
          <Image
            source={{
              uri: imageUrl,
            }}
            width={30}
            height={30}
            left={10}
            alt="UserImage"
            borderRadius={100}
          />
          <Text style={styles.text}>{username}</Text>
          <Text style={styles.hours}>11h </Text>
          {isStoryscreen && (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfD5w1dSUhGmYifAznYNrDuHhXHo09EzLe7D3qdI0yWw&s',
              }}
              width={25}
              height={25}
              top={5}
              alt="Icon"
              position="absolute"
              right={10}
            />
          )}
        </HStack>
        <Image
          source={{uri: imageUrl}}
          style={{width: '100%', height: '85%', top: 10}}
          resizeMode="cover"
          onError={error => console.error('Image Error:', error)}
        />
      </>
      {isStoryscreen && (
        <HStack space="lg">
          <TextInput
            placeholder="Send a message"
            style={styles.placeholder}
            placeholderTextColor="white"
            placeholderStyle={{left: 10}}
          />
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            width={20}
            height={20}
            top={24}
          />
          <Image
            source={{
              uri: 'https://techchahiye.com/wp-content/uploads/2020/04/Instagram-Direct-available-desktop-1200x900.png',
            }}
            width={30}
            height={30}
            top={20}
          />
        </HStack>
      )}
    </View>
  );
}

export default StoryContent;
const styles = StyleSheet.create({
  blackBackground: {
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 16,
    left: 20,
    top: 6,
  },
  hours: {
    color: 'white',
    fontSize: 14,
    left: 30,
    top: 8,
  },
  placeholder: {
    padding: 5,
    height: 45,
    width: 300,
    top: 16,

    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#272626',
    color: 'white',
    fontSize: 16,
  },
});
