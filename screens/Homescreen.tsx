import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {Image, Box, HStack} from '@gluestack-ui/themed';
// @ts-ignore
import {SliderBox} from 'react-native-image-slider-box';
import feeds from '../data/feed.json';
import {styles} from '../styles/HomescreenStyle';

// @ts-ignore
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
// @ts-ignore

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let feed = [...feeds];
function Homescreen() {
  const [visibleFeedCount, setVisibleFeedCount] = useState(2);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const handleEndReached = () => {
    console.log('visibleFeedCount:', visibleFeedCount);
    console.log('feed.length:', feed.length);
    // Load more content when the end is reached
    if (visibleFeedCount < feed.length && !loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleFeedCount(prevCount => prevCount + 1);
        setLoadingMore(false);
        console.log('End reached! Loading more content...');
      }, 1000);
    } else {
      console.log('End reached, but no more content to load.');
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const shuffledFeed = shuffleArray(feed);
    setVisibleFeedCount(2);
    feed = shuffledFeed;
    setRefreshing(false);
  }, []);
  const renderLoader = () => (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="small" color="#15ccf9" />
      <Text style={styles.loaderText}>Loading more content...</Text>
    </View>
  );
  const renderHeader = () => (
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

      {/* <AntdesignIcon
        name="codepen"
        size={50}
        position="absolute"
        left={220}
        top={10}
        color="#232222"
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
    </View>
  );
  const NewPostFAB = ({onPress}: any) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fab} onPress={onPress}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const handleNewPost = () => {
    // Implement the logic to open a new post form or navigate to a new post screen
    console.log('Adding a new blog/post!');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={styles.headerContainer}
        data={feed.slice(0, visibleFeedCount)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: feedItem, index}) => (
          <Box marginTop={30}>
            <Box top={20}>
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
                  <Text marginTop={4} left={16} style={styles.Username}>
                    {feedItem.Username}
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
                  images={feedItem.Images.map(image => image.Url)}
                  dotColor="#15ccf9"
                  inactiveDotColor="grey"
                  dotStyle={{
                    top: 30,
                    height: 5,
                    width: 5,
                  }}
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
                <Text style={styles.Username}>{feedItem.Username}</Text>
                <Text style={styles.Content}>{feedItem.Content}</Text>
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
              <Text style={styles.Date}>{feedItem.Date}</Text>
            </Box>
          </Box>
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loadingMore ? renderLoader : null}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

export default Homescreen;
