import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from '../styles/BlogDetailStyle';
import {Box, HStack, VStack} from '@gluestack-ui/themed';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {DataContext} from '../context/DataContext';

const BlogDetail = React.memo(({route}: any) => {
  const {index} = route.params;
  const scrollViewRef = useRef<ScrollView>(null);
  useEffect(() => {
    if (scrollViewRef.current && index !== undefined) {
      const yOffset = index * ITEM_HEIGHT;
      scrollViewRef.current.scrollTo({y: yOffset, animated: true});
    }
  }, [index]);

  const [editedImageId, setEditedImageId] = useState<string | null>(null);
  const context = useContext(DataContext);

  const ITEM_HEIGHT = 400;

  const [edit, setEdit] = useState(false);
  const [caption, setCaption] = useState('');

  const handleDelete = (imageId: string) => {
    const updatedData = {
      ...context?.profiles,
      Profile: context?.profiles.Profile.filter(
        (post: {id: string}) => post.id !== imageId,
      ),
    };

    context?.updateProfiles(updatedData);
  };

  const handleSaveEdit = (postId: string) => {
    const updatedData = {
      ...context?.profiles,
      Profile: context?.profiles.Profile.map((post: {id: string}) =>
        post.id === postId ? {...post, caption} : post,
      ),
    };

    context?.updateProfiles(updatedData);

    setEdit(false);
    setCaption('');
  };

  const handleMenuItemSelect = (menuItem: string, id: string) => {
    if (menuItem === 'Edit') {
      setEditedImageId(id);
      setEdit(true);
      const postToEdit = context?.profiles.Profile.reduce(
        (
          foundPost: {
            id: string;
            Url: string;
            caption: string;
            date: string;
          } | null,
          profile,
        ) => {
          const post = context?.profiles.Profile.find(
            (post: {id: string}) => post.id === id,
          );
          return foundPost || (post ? {...post} : null);
        },
        null,
      );
      setCaption(postToEdit?.caption || '');
    }

    if (menuItem === 'Delete') {
      handleDelete(id);
    }
  };
  return (
    <ScrollView ref={scrollViewRef}>
      <View style={{backgroundColor: '#fff'}}>
        <Box>
          {context?.profiles.Profile.map((data: any, index: number) => (
            <React.Fragment key={index}>
              <React.Fragment key={data.id}>
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
                      top: 20,
                    }}
                    alt="Profile"
                  />
                  <Text marginTop={24} left={14}>
                    {'Andrew Jason'}
                  </Text>
                  <VStack>
                    <Menu style={{left: 230, top: 20}}>
                      <MenuTrigger>
                        <Image
                          source={{
                            uri: 'https://static.vecteezy.com/system/resources/previews/021/190/333/original/more-vertical-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
                          }}
                          width={30}
                          height={30}
                          alt="Icon"
                        />
                      </MenuTrigger>
                      <MenuOptions optionsContainerStyle={styles.menuoptions}>
                        <MenuOption
                          style={{
                            top: 20,
                          }}>
                          <HStack>
                            <Image
                              source={{
                                uri: 'https://cdn.iconscout.com/icon/free/png-256/free-save-3244517-2701888.png?f=webp',
                              }}
                              width={30}
                              height={30}
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontWeight: '500',
                                fontSize: 15,
                              }}>
                              Save
                            </Text>
                          </HStack>
                        </MenuOption>
                        <MenuOption
                          style={{
                            marginTop: 20,
                            right: 5,
                          }}>
                          <HStack>
                            <Image
                              source={{
                                uri: 'https://i.gadgets360cdn.com/large/instagram_archive_android_small_1495535709205.jpg',
                              }}
                              width={40}
                              height={40}
                              alt="Archive icon"
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontWeight: '500',
                                marginTop: 8,
                                fontSize: 15,
                              }}>
                              Archive
                            </Text>
                          </HStack>
                        </MenuOption>
                        <MenuOption
                          onSelect={() =>
                            handleMenuItemSelect('Edit', data.id)
                          }>
                          <HStack>
                            <Image
                              source={{
                                uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/500/458/small/edit-icon-free-vector.jpg',
                              }}
                              width={35}
                              height={30}
                              alt="Edit icon"
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontWeight: '500',
                                top: 5,
                                fontSize: 15,
                              }}>
                              Edit
                            </Text>
                          </HStack>
                        </MenuOption>
                        <MenuOption
                          onSelect={() =>
                            handleMenuItemSelect('Delete', data.id)
                          }>
                          <HStack>
                            <Image
                              source={{
                                uri: 'data:image/png;base64,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',
                              }}
                              width={25}
                              height={25}
                              alt="Delete Icon"
                            />
                            <Text
                              style={{
                                color: 'black',
                                fontWeight: '500',
                                left: 10,
                                fontSize: 15,
                              }}>
                              Delete
                            </Text>
                          </HStack>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                  </VStack>
                </HStack>

                <Image
                  key={index}
                  source={{uri: data.Url}}
                  style={{width: 450, height: 450, top: 10}}
                  alt="BlogDetailImage"
                />

                <Box>
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
                  <Text style={{color: 'black', left: 7}}>
                    Liked by jenn_hann and others
                  </Text>
                  <HStack p={4}>
                    <Text style={styles.Username}>{'AndrewJason'}</Text>
                    {edit && editedImageId === data.id ? (
                      <>
                        <TextInput
                          style={{
                            color: 'black',

                            bottom: 14,
                            paddingHorizontal: 10,
                            borderRadius: 8,
                          }}
                          onChangeText={(text: React.SetStateAction<string>) =>
                            setCaption(text)
                          }
                          value={caption}
                        />
                        <TouchableOpacity
                          onPress={() => handleSaveEdit(data.id)}>
                          <Text style={{left: 0}}>Save</Text>
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
              {/* ))} */}
            </React.Fragment>
          ))}
        </Box>
      </View>
    </ScrollView>
  );
});

export default BlogDetail;
