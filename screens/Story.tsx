import {HStack, VStack} from '@gluestack-ui/themed';
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import story from '../data/story.json';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import StoryContent from './StoryContent';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import SwipeGesture from 'react-native-swipe-gestures';

interface StoryProps {
  route: {
    params: {
      imageUrl: string;
    };
  };
}

function Story() {
  const navigation = useNavigation();
  const [selectedStory, setSelectedStory] = useState<string>('');
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number>(0);
  const [timerEnabled, setTimerEnabled] = useState(true);

  // Ref for the interval ID
  const intervalRef = useRef<number | NodeJS.Timeout | undefined>(undefined);

  // Function to navigate to the next story
  const navigateToNextStory = () => {
    setSelectedStoryIndex(prevIndex => (prevIndex + 1) % story.length);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current as number);
      }
    };
  }, []); 

  const handleStoryPress = (
    item: string,
    user: string,
    isStoryscreen: boolean,
  ) => {
    setTimerEnabled(false); 
    const params = {imageUrl: item, username: user, isStoryscreen};
    console.log('Params->', params);
    navigation.navigate('StoryContent', params);
    setSelectedStory(item);

    
    setTimeout(() => {
      navigateToNextStory();
    }, 3000);
  };

  return (
    <GestureHandlerRootView style={styles.story}>
      <HStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaAsiURlbNIvNkNi5UCRzXStgONEKRH6emg&usqp=CAU',
            }}
            width={60}
            height={60}
            borderRadius={50}
            style={{marginLeft: 5}}
          />
          <VStack alignItems="center" top={35} right={35}>
            <Image
              source={{
                uri: 'https://pngimg.com/d/plus_PNG59.png',
              }}
              width={20}
              height={20}
              left={26}
              bottom={5}
              borderRadius={50}
            />
          </VStack>
          <Text style={styles.text}>Your Story</Text>

          <HStack space="xs" left={5}>
            {story.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  handleStoryPress(item.image_url, item.username, true)
                }>
                <View>
                  <Image
                    source={{
                      uri: item.image_url,
                    }}
                    width={65}
                    height={65}
                    alt="UserImage"
                    borderRadius={50}
                    borderWidth={2}
                    borderColor={'#f75cae'}
                    position="relative"
                    right={70}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </HStack>
          {selectedStory && <StoryContent imageUrl={selectedStory} />}
        </ScrollView>
      </HStack>
      {selectedStoryIndex !== undefined && (
        <StoryContent imageUrl={story[selectedStoryIndex]} />
      )}
    </GestureHandlerRootView>
  );
}

export default Story;

const styles = StyleSheet.create({
  story: {
    marginTop: 45,

  },
  text: {
    color: 'black',
    fontSize: 12,
    marginTop: 58,
    position: 'relative',
    right: 75,
  },
});
