import {ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import {Text, View, Image} from 'react-native';

function Storyscreen() {
  return (
    <ScrollView horizontal top={30}>
      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaAsiURlbNIvNkNi5UCRzXStgONEKRH6emg&usqp=CAU',
          }}
          width={40}
          height={40}
          left={10}
          top={10}
          alt="UserImage"
          borderRadius={50}
        />
      </View>
    </ScrollView>
  );
}

export default Storyscreen;
