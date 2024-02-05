import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HStack} from '@gluestack-ui/themed';

interface StoryProps {
  route: RouteProp<
    {StoryContent: {imageUrl: string; username: string}},
    'StoryContent'
  >;
}
function StoryContent({route}: StoryProps) {
  console.log('Route:', route);
  const imageUrl = route?.params?.imageUrl;
  const username = route?.params?.username;
  console.log('ImageUrl', imageUrl);
  return (
    <View style={styles.container}>
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
      </HStack>
      <Image
        source={{uri: imageUrl}}
        style={{width: '100%', height: '80%', top: 10}}
        resizeMode="cover"
        onError={error => console.error('Image Error:', error)}
      />
      <TextInput placeholder="Send a message" style={styles.placeholder} />
    </View>
  );
}

export default StoryContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131111',
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
    backgroundColor: '#b8aaaa',
    top: 10,
    left: 10,
    fontWeight: 'bold',
    borderColor: '#FFf',
    color: 'white',
    fontSize: 16,
  },
});
