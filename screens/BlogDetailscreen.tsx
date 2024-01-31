import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import profiledata from '../data/profile.json';
import {Box, HStack, VStack} from '@gluestack-ui/themed';

function BlogDetailscreen({route}: any) {
  const {imageId, imageUrl} = route.params;
  const [data, setData] = useState(profiledata);

  // Create a state to manage edit state and edited caption for each post
  const [editStates, setEditStates] = useState(
    data.map(item => ({
      edit: false,
      editcaption: item.Profile.map((post: any) => post.caption),
    })),
  );

  const handleDelete = (postId: string) => {
    const updatedData = data.map(item => ({
      ...item,
      Profile: item.Profile.filter((post: any) => post.id !== postId),
    }));

    setData(updatedData);
  };

  const handleSaveEdit = (id: string, index: number) => {
    const updatedData = data.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          Profile: item.Profile.map((post: any, j) => {
            if (post.id === id) {
              return {...post, caption: editStates[index].editcaption[j]};
            }
            return post;
          }),
        };
      }
      return item;
    });

    setData(updatedData);

    // Update the edit state for the specific post to hide the edit mode
    setEditStates(prevStates =>
      prevStates.map((prevState, i) =>
        i === index ? {...prevState, edit: false} : prevState,
      ),
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <Box top={20}>
          <View>
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
          </View>

          <Image
            source={{uri: imageUrl}}
            style={{width: 400, height: 300, top: 10}}
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
          <Text style={{color: 'black', left: 7}}>
            Liked by jenn_hann and others
          </Text>
          <HStack p={4}>
            <Text style={styles.Username}>{'AndrewJason'}</Text>
            <Text style={styles.caption}>{'Art of nature is beautiful'}</Text>
          </HStack>
          <Text style={styles.comment}>View all comments</Text>
        </Box>

        <Box>
          {data.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {item.Profile.filter((data: any) => data.Url !== imageUrl).map(
                (data: any, imageIndex: number) => (
                  <React.Fragment key={imageIndex}>
                    <HStack>
                      {/* <Text marginTop={4} left={16}>
                        {'Andrew Jason'}
                      </Text> */}

                      <TouchableOpacity onPress={() => handleDelete(data.id)}>
                        {/* /*dot icon*/}
                        
                      </TouchableOpacity>
                    </HStack>

                    {/* Edit and Save buttons */}
                    {/* {editStates[index].edit ? (
                      <Button
                        title="Save"
                        onPress={() => handleSaveEdit(data.id, index)}></Button>
                    ) : (
                      <Button
                        title="Edit"
                        onPress={() => {
                          // Set edit state for the specific post to show the edit mode
                          setEditStates(prevStates =>
                            prevStates.map((prevState, i) =>
                              i === index
                                ? {...prevState, edit: true}
                                : prevState,
                            ),
                          );
                        }}></Button>
                    )} */}

                    {/* Text input or text display based on edit mode */}
                    {/* <View style={{marginTop: 10, marginBottom: 10}}>
                      {editStates[index].edit ? (
                        <TextInput
                          value={editStates[index].editcaption[imageIndex]}
                          onChangeText={text => {
                            setEditStates(prevStates =>
                              prevStates.map((prevState, i) =>
                                i === index
                                  ? {
                                      ...prevState,
                                      editcaption: prevState.editcaption.map(
                                        (caption, j) =>
                                          j === imageIndex ? text : caption,
                                      ),
                                    }
                                  : prevState,
                              ),
                            );
                          }}
                        />
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}>
                          {item.Profile[imageIndex].caption}
                        </Text>
                      )}
                    </View> */}
                    <HStack top={25}>
                      <Image
                        source={{
                          uri: 'https://as2.ftcdn.net/v2/jpg/04/78/48/71/1000_F_478487125_LgvcBMZ9MTNqhbD7owSLb3YMZSKWmrT4.jpg',
                        }}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          left: 3,
                          top:20
                        }}
                        alt="Profile"
                      />

                      <Text marginTop={20} left={14}>
                        {'Andrew Jason'}
                      </Text>
                      {/* <TouchableOpacity onPress={() => handleDelete(data.id)}> */}
                      <Image
                        source={{
                          uri: 'https://static.vecteezy.com/system/resources/previews/021/190/333/original/more-vertical-three-dots-settings-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg',
                        }}
                        width={30}
                        height={30}
                        alt="Icon"
                        
                        position="absolute"
                        right={10}
                        top={20}
                      />
                      {/* </TouchableOpacity> */}
                    </HStack>
                    <Image
                      key={imageIndex}
                      source={{uri: data.Url}}
                      style={{width: 450, height: 450, top: 50}}
                      alt="BlogDetailImage"
                    />
                  </React.Fragment>
                ),
              )}
            </React.Fragment>
          ))}
        </Box>
      </View>
    </ScrollView>
  );
}
export default BlogDetailscreen;
const styles = StyleSheet.create({
  Username: {
    fontWeight: '500',
    color: 'black',
  },
  caption: {
    color: 'black',
    marginLeft: 7,
    fontSize: 13,
    paddingRight: 12,
    maxWidth: 320,
    flexWrap: 'wrap',
  },
  comment: {
    left: 8,

    color: 'gray',
  },
});
