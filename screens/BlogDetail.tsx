import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {styles} from '../styles/BlogDetailStyle';
import {Box, HStack} from '@gluestack-ui/themed';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useData} from '../context/DataContext';

const BlogDetail = React.memo(({route}: any) => {
  const {imageUrl, index} = route.params;
  const scrollViewRef = useRef<ScrollView>(null);
  useEffect(() => {
    if (scrollViewRef.current && index !== undefined) {
      const yOffset = index * ITEM_HEIGHT;
      scrollViewRef.current.scrollTo({y: yOffset, animated: true});
    }
  }, [index]);

  const [editedImageId, setEditedImageId] = useState<string | null>(null);
  const {data, setData} = useData();
  const ITEM_HEIGHT = 400;

  const [edit, setEdit] = useState(false);
  const [caption, setCaption] = useState('');

  const handleDelete = (imageId: string) => {
    const updatedData = data.map(profile => ({
      ...profile,
      Profile: profile.Profile.filter(post => post.id !== imageId),
    }));

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

  const handleMenuItemSelect = (menuItem: string, id: string) => {
    if (menuItem === 'Edit') {
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
          {data.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {item.Profile.map((data: any, imageIndex: number) => (
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
                    <Menu>
                      <MenuTrigger>
                        <Image
                          source={{
                            uri: 'https://static.vecteezy.com/system/resources/previews/021/190/333/original/more-vertical-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
                          }}
                          width={30}
                          height={30}
                          alt="Icon"
                          style={{left: 230, top: 20}}
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
                              backgroundColor: 'white',
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
              ))}
            </React.Fragment>
          ))}
        </Box>
      </View>
    </ScrollView>
  );
});

export default BlogDetail;
