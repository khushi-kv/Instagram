import React, {useEffect, useState} from 'react';
import {Text, ScrollView, TouchableOpacity, RefreshControl} from 'react-native';
import {Box, Image, VStack, Button, MenuItem} from '@gluestack-ui/themed';
import {CommonActions} from '@react-navigation/native';
import profiledata from '../data/profile.json';
import {HStack} from '@gluestack-ui/themed';
import {styles} from '../styles/ProfilescreenStyle';
function Profile({navigation}: any) {
  const [currentMode, setCurrentMode] = useState('grid');
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {}, [currentMode]);
  const handleModeChange = (mode: string) => {
    setCurrentMode(mode);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const handleImagePress = (imageUrl: string, index: number) => {
    navigation.navigate('BlogDetailscreen', {imageUrl, index});
  };
  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {profiledata.map((item: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <HStack p={8}>
              <Text style={styles.Username}>{item.name}</Text>
              <Image
                source={require('../public/Images/add.png')}
                style={{
                  position: 'absolute',
                  right: 70,
                  top: 6,
                  width: 25,
                  height: 25,
                  tintColor: '#0f0f10',
                }}
                alt="AddIcon"
              />
              <Image
                source={require('../public/Images/threelinebar.png')}
                style={{
                  position: 'absolute',
                  right: 10,
                  width: 38,
                  height: 38,
                }}
                alt="three line"
              />
            </HStack>
            <HStack marginTop={20}>
              <VStack>
                <Image
                  source={{
                    uri: 'https://as2.ftcdn.net/v2/jpg/04/78/48/71/1000_F_478487125_LgvcBMZ9MTNqhbD7owSLb3YMZSKWmrT4.jpg',
                  }}
                  width={80}
                  height={80}
                  left={10}
                  alt="UserImage"
                  rounded="$full"
                />
                <Text
                  style={{marginLeft: 6, fontWeight: '600', color: 'black'}}>
                  {item.name}
                </Text>
              </VStack>
              <Box display="flex" flexDirection="row" pl={35} p={24} gap={35}>
                <Box>
                  <Text style={styles.text}>{item.posts}</Text>
                  <Text style={{color: 'black'}}>posts</Text>
                </Box>
                <Box>
                  <Text style={styles.text}>{item.followers}</Text>
                  <Text style={{color: 'black'}}>followers</Text>
                </Box>
                <Box>
                  <Text style={styles.text}>{item.following}</Text>
                  <Text style={{color: 'black'}}>following</Text>
                </Box>
              </Box>
            </HStack>
            <HStack space="xs" pl={8} marginTop={25}>
              <Button
                backgroundColor="#F0F0F0"
                rounded="$lg"
                paddingHorizontal={40}
                height={30}
                p={1}>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Edit profile
                </Text>
              </Button>
              <Button
                backgroundColor="#F0F0F0"
                rounded="$lg"
                paddingHorizontal={30}
                height={30}>
                <Text style={{color: 'black', fontWeight: '500'}}>
                  Share profile
                </Text>
              </Button>
              <Button backgroundColor="#F0F0F0" rounded="$lg" height={30}>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-11-512.png',
                  }}
                  width={20}
                  height={20}
                  alt="UserImage"
                  rounded="$lg"
                />
              </Button>
            </HStack>
            <Box p={10} marginTop={10}>
              <Text style={{fontWeight: '600', color: 'black'}}>
                Story highlights
              </Text>
              <Text style={{color: 'black'}}>
                Keep your favourite stories on your profile
              </Text>
              <HStack >
                <Button backgroundColor="#ffffff">
                  <Image
                    source={{
                      uri: 'https://static.thenounproject.com/png/103484-200.png',
                    }}
                    width={0}
                    height={0}
                    position="absolute"
                    left={0}
                    top={8}
                    alt="UserImage"
                    rounded="$full"
                    borderColor="black"
                    borderWidth={1}
                    padding={20}
                  />
                </Button>
                <Button
                  position="absolute"
                  left={60}
                  top={8}
                  backgroundColor="lightgray"
                  alt="UserImage"
                  rounded="$full"
                  padding={20}
                />
                <Button
                  position="absolute"
                  left={120}
                  top={8}
                  backgroundColor="lightgray"
                  alt="UserImage"
                  rounded="$full"
                  padding={20}
                />
                <Button
                  position="absolute"
                  left={180}
                  top={8}
                  backgroundColor="lightgray"
                  alt="UserImage"
                  rounded="$full"
                  padding={20}
                />
                <Button
                  position="absolute"
                  left={250}
                  top={8}
                  backgroundColor="lightgray"
                  alt="UserImage"
                  rounded="$full"
                  padding={20}
                />
              </HStack>
              <Text style={{color: 'black', top: 10, left: 5}}>New</Text>

              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between">
                <TouchableOpacity onPress={() => handleModeChange('grid')}>
                  <Image
                    source={{
                      uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAD6+vqsrKzw8PBbW1tfX1+FhYUVFRV3d3cMDAzDw8OPj4+AgIDd3d3h4eGbm5sfHx9SUlLn5+dRUVG/v79mZmZLS0s+Pj5DQ0PJycmYmJjY2Nhvb2+MjIx1dXWqtFQLAAABvklEQVR4nO3a227aQBSGUQKlJCRASs6H0vd/y940s+fKG6XD2LLWuv5t6ZMvPJK9WAAAAAAAAAAAAABT8eO4Ptfxn8f0kvOXxeZyhVfTsJ594U+FChWOTqHCcwqfN8N2ZflySqbbr+Vrsjy99Sx8z6ZleZctr7+WN9ly07PwNlkuL1G4U/j/FAaFFYVBYQMKg8KKwqCwAYVBYUVhUNiAwqCwojAobEBhUFhRGBQ2oDAorEy0cP5f127uh32U5TpZ3pcvpC/Z8rHcs0PhuI6zL5z/M1SoUOH45l/Y422xzXxjmU7LsMcznP+pbf4nb4UKKwqDwgYUBoUVhUFhAwqDworCoLABhUFhRWFQ2IDCoLCiMChsQGFQWFEYFDYQhavDftBnWe6S5b4UPifLw++ehePyT5RCheNTqFDh+Hq8D1cPh0H7stwly0OcaZLlQ9czzfzPpQoVVhQGhQ0oDAorCoPCBhQGhRWFQWEDCoPCisKgsAGFQWFFYVDYgMKgsKIwKGwgCp8Wy0GxPCXLZSn8kyz7Fl7/Snxjuc2W256F41KoUOH4FCqcfuHl/olarqbh6WKFAAAAAAAAAAAATMtfP5xfCK+KBBMAAAAASUVORK5CYII=',
                    }}
                    width={35}
                    height={35}
                    alt="GridIcon"
                    rounded="$lg"
                    top={30}
                    left={20}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleModeChange('reels')}>
                  <Image
                    source={require('../public/Images/reels.png')}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: currentMode === 'reels' ? '#0f0f10' : 'gray',
                    }}
                    top={34}
                    alt="Reels"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleModeChange('tagged')}>
                  <Image
                    source={{
                      uri: 'https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_tagged-512.png',
                    }}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: currentMode === 'tagged' ? '#0f0f10' : 'gray',
                    }}
                    top={30}
                    right={50}
                    alt="TaggedIcon"
                  />
                </TouchableOpacity>
              </HStack>
              {currentMode === 'grid' && (
                <Box style={styles.profileImages}>
                  {item.Profile &&
                    item.Profile.length > 0 &&
                    item.Profile.map((data: any, index: number) => (
                      <Box key={index}>
                        <TouchableOpacity
                          onPress={() => handleImagePress(data.Url, data.id)}>
                          <Image
                            source={{uri: data.Url}}
                            style={{width: data.Width, height: data.Height}}
                            alt="profileImage"
                            key={index}
                          />
                        </TouchableOpacity>
                      </Box>
                    ))}
                </Box>
              )}
              {currentMode === 'reels' && (
                <Text
                  style={{color: 'black', textAlign: 'center', marginTop: 40}}>
                  Reels content goes here !
                </Text>
              )}
              {currentMode === 'tagged' && (
                <Text
                  style={{color: 'black', textAlign: 'center', marginTop: 40}}>
                  Tagged content goes here !
                </Text>
              )}
            </Box>
          </React.Fragment>
        );
      })}

      {/* <Button
        title="Logout"
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Login',
            })
          );
        }}
      /> */}
    </ScrollView>
  );
}

export default Profile;
