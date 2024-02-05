import React from 'react';
import {Image, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {HStack} from '@gluestack-ui/themed';

interface StoryProps {
  route: RouteProp<{StoryContent: {imageUrl: string}}, 'StoryContent'>;
}
function StoryContent({route}: StoryProps) {
  console.log('Route:', route);
  const imageUrl = route?.params?.imageUrl;
  console.log('ImageUrl', imageUrl);
  return (
    <View>
      <Image
        source={{uri: imageUrl}}
        style={{width: '100%', height: '90%'}}
        resizeMode="cover"
        onError={error => console.error('Image Error:', error)}
      />
    </View>
  );
}

export default StoryContent;
