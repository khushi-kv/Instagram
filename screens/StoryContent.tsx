import React from 'react';
import {Image, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

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
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
        onError={error => console.error('Image Error:', error)}
      />
    </View>
  );
}

export default StoryContent;
