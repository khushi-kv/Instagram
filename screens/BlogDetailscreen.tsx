import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  
} from 'react-native';
import { styles } from '../styles/BlogDetailStyle';
import {Box, HStack} from '@gluestack-ui/themed';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useData} from '../context/DataContext';
const BlogDetailscreen = React.memo(({route}: any) => {
  const { imageUrl} = route.params;
  const [editedImageId, setEditedImageId] = useState<string | null>(null);
  // console.log("Blog image id",imageId);
  const {data, setData} = useData();
  const [edit, setEdit] = useState(false);
  const [caption, setCaption] = useState('');

  const handleDelete = (imageId: string) => {
    console.log('PostId', imageId);

    // Map through profiles and filter out the post with the given imageId
    const updatedData = data.map(profile => {
      const updatedProfile = {
        ...profile,
        Profile: profile.Profile.filter(post => post.id !== imageId),
      };

      // If any post was removed, return the updated profile, otherwise, return the original profile
      return updatedProfile.Profile.length !== profile.Profile.length
        ? updatedProfile
        : profile;
    });

    console.log('Updated Data:', updatedData);

    setData(updatedData);
  };
  const handleSaveEdit = (postId: string) => {
    const updatedData = data.map(profile => ({
      ...profile,
      Profile: profile.Profile.map(post =>
        post.id === postId ? {...post, caption} : post,
      ),
    }));

    setData(updatedData);

    setEdit(false);
    setCaption('');
  };

  useEffect(() => {
    console.log('Context data updated:', data);
  }, [data]);

  const handleMenuItemSelect = (menuItem: string, id: string) => {
    if (menuItem === 'Edit') {
      // Set the Image ID to enable editing only for this post
      setEditedImageId(id);
      setEdit(true);
      const postToEdit = data.reduce(
        (
          foundPost: {
            id: string;
            Url: string;
            caption: string;
            date: string;
          } | null,
          profile,
        ) => {
          const post = profile.Profile.find(post => post.id === id);
          return foundPost || (post ? {...post} : null);
        },
        null,
      );

      // Set the initial caption for editing
      setCaption(postToEdit?.caption || '');
    }

    if (menuItem === 'Delete') {
      handleDelete(id);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 10,
        }}>
        <Box top={20}>
          {data.map((item, index) => (
            <>
              <React.Fragment key={index}>
                {item.Profile.filter((data: any) => data.Url === imageUrl).map(
                  (post: any) => (
                    <React.Fragment key={post.id}>
                      <HStack>
                        <Image
                          source={{
                            uri: 'https://as2.ftcdn.net/v2/jpg/04/78/48/71/1000_F_478487125_LgvcBMZ9MTNqhbD7owSLb3YMZSKWmrT4.jpg',
                          }}
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 50,
                            left: 3,
                          }}
                          alt="Profile"
                        />

                        <Text marginTop={4} left={14}>
                          {'Andrew Jason'}
                        </Text>

                        <Menu>
                          <MenuTrigger>
                            <Image
                              source={{
                                uri: 'https://static.vecteezy.com/system/resources/previews/021/190/333/original/more-vertical-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
                              }}
                              width={30}
                              height={30}
                              alt="Icon"
                              style={{
                                left: 230,
                              }}
                            />
                          </MenuTrigger>
                          <MenuOptions>
                            <MenuOption
                              onSelect={() =>
                                handleMenuItemSelect('Edit', post.id)
                              }>
                              <Text>Edit</Text>
                            </MenuOption>
                            <MenuOption
                              onSelect={() =>
                                handleMenuItemSelect('Delete', post.id)
                              }>
                              <Text>Delete</Text>
                            </MenuOption>
                          </MenuOptions>
                        </Menu>
                        {/* </TouchableOpacity> */}
                      </HStack>
                      <View key={post.id}>
                        <Image
                          source={{uri: imageUrl}}
                          style={{
                            width: 400,
                            height: 400,
                            marginTop: 10,
                          }}
                          alt="Post"
                        />

                        <HStack p={6} marginTop={10} gap={14}>
                          <Image
                            source={{
                              uri: 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png',
                            }}
                            width={23}
                            height={23}
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
                            top={2}
                            alt="Icon"
                          />
                        </HStack>
                        <HStack p={4}>
                          <Text style={styles.Username}>{'AndrewJason'}</Text>
                          {edit && editedImageId === post.id ? (
                            <>
                              <TextInput
                                style={{
                                  backgroundColor: 'green',
                                  color: 'black',
                                  left: 20,
                                  height: 40,
                                  width: '50%',
                                  paddingHorizontal: 10,
                                  borderRadius: 8,
                                }}
                                onChangeText={(
                                  text: React.SetStateAction<string>,
                                ) => setCaption(text)}
                                value={caption}
                              />
                              <TouchableOpacity
                                onPress={() => handleSaveEdit(post.id)}>
                                <Text style={{left: 0, top: 50}}>Save</Text>
                              </TouchableOpacity>
                            </>
                          ) : (
                            <Text style={{color: 'black', left: 7}}>
                              {item.Profile.filter(
                                (data: any) => data.Url === imageUrl,
                              ).map((post: any) => post.caption)}
                            </Text>
                          )}
                        </HStack>
                        <Text style={styles.comment}>View all comments</Text>
                        <Text style={styles.date}>{'1 hour ago'}</Text>
                      </View>
                    </React.Fragment>
                  ),
                )}
              </React.Fragment>
            </>
          ))}
        </Box>

        <Box>
          {data.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {item.Profile.filter((data: any) => data.Url !== imageUrl).map(
                (data: any, imageIndex: number) => (
                  <React.Fragment key={data.id}>
                    <HStack top={35}>
                      <Image
                        source={{
                          uri: 'https://as2.ftcdn.net/v2/jpg/04/78/48/71/1000_F_478487125_LgvcBMZ9MTNqhbD7owSLb3YMZSKWmrT4.jpg',
                        }}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          left: 3,
                          top: 20,
                        }}
                        alt="Profile"
                      />

                      <Text marginTop={24} left={14}>
                        {'Andrew Jason'}
                      </Text>

                      <Menu>
                        <MenuTrigger>
                          <Image
                            source={{
                              uri: 'https://static.vecteezy.com/system/resources/previews/021/190/333/original/more-vertical-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
                            }}
                            width={30}
                            height={30}
                            alt="Icon"
                            style={{
                              left: 230,
                            }}
                          />
                        </MenuTrigger>
                        <MenuOptions>
                          <MenuOption
                            onSelect={() =>
                              handleMenuItemSelect('Edit', data.id)
                            }>
                            <Text>Edit</Text>
                          </MenuOption>
                          <MenuOption
                            onSelect={() =>
                              handleMenuItemSelect('Delete', data.id)
                            }>
                            <Text>Delete</Text>
                          </MenuOption>
                        </MenuOptions>
                      </Menu>
                    </HStack>
                    <Image
                      key={imageIndex}
                      source={{uri: data.Url}}
                      style={{width: 450, height: 450, top: 50}}
                      alt="BlogDetailImage"
                    />
                    <Box top={20}>
                      <HStack p={6} marginTop={30} gap={14}>
                        <Image
                          source={{
                            uri: 'https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png',
                          }}
                          width={23}
                          height={23}
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
                          top={2}
                          alt="Icon"
                        />
                      </HStack>
                      <Text style={{color: 'black', left: 7}}>
                        Liked by jenn_hann and others
                      </Text>
                      <HStack p={4}>
                        <Text style={styles.Username}>{'AndrewJason'}</Text>

                        {edit && editedImageId === data.id ? (
                          <>
                            <TextInput
                              style={{
                                backgroundColor: 'red',
                                color: 'black',
                                left: 20,
                                height: 40,
                                width: '50%',
                                paddingHorizontal: 10,
                                borderRadius: 8,
                              }}
                              onChangeText={(
                                text: React.SetStateAction<string>,
                              ) => setCaption(text)}
                              value={caption}
                            />
                            <TouchableOpacity
                              onPress={() => handleSaveEdit(data.id)}>
                              <Text style={{left: 0, top: 50}}>Save</Text>
                            </TouchableOpacity>
                          </>
                        ) : (
                          <Text style={{color: 'black', left: 7}}>
                            {data.caption}
                          </Text>
                        )}
                      </HStack>
                      <Text style={styles.comment}>View all comments</Text>
                      <Text style={styles.date}>{data.date}</Text>
                    </Box>
                  </React.Fragment>
                ),
              )}
            </React.Fragment>
          ))}
        </Box>
      </View>
    </ScrollView>
  );
});
export default BlogDetailscreen;

