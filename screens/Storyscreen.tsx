import {HStack, ScrollView, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import story from '../data/story.json';

function Storyscreen() {
  return (
    <View style={styles.story}>
      <HStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaAsiURlbNIvNkNi5UCRzXStgONEKRH6emg&usqp=CAU',
            }}
            width={59}
            height={59}
            borderRadius={50}
            style={{marginBottom: 5}}
          />
          <VStack alignItems="center" top={35} right={35}>
            <Image
              source={{
                uri: 'https://pngimg.com/d/plus_PNG59.png',
              }}
              width={20}
              height={20}
             left={25}
              borderRadius={50}
            />
          </VStack>
          <Text style={{color: 'black', right: 70,top:55, fontSize: 10}}>
            Your Story
          </Text>
          <HStack>
          {story.map((item, index) => (
            <View key={index} style={{marginLeft: 10}}>
              <Image
                source={{
                  uri: item,
                }}
                width={65}
                height={65}
                alt="UserImage"
                borderRadius={50}
              />
            </View>
          ))}
          </HStack>
        </ScrollView>
      </HStack>
    </View>
  );
}

export default Storyscreen;

const styles = StyleSheet.create({
  story: {
    marginTop: 45,
  },
});
