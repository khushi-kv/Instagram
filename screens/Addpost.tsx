import React, {useState} from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {useData} from '../context/DataContext'; // Import the useData hook from your context file
// import { writeFile } from 'fs/promises';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Addpost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();
  const {feeds, updateFeeds} = useData(); // Destructure feeds and updateFeeds from useData()

  const selectImage = async () => {
    try {
      const response = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        compressImageQuality: 0.8,
      });

      if (response && response.path) {
        setImage(response.path);
      } else {
        console.log('User cancelled image picker or encountered an error');
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const savePost = async () => {
    const newPost = {
      Title: title,
      Images: [{Url: image || '', Width: 600, Height: 400}],
      Username: 'Khushi',
      Date: new Date().toISOString(),
      Content: content,
    };

    updateFeeds((prevFeeds: any) => [...prevFeeds, newPost]); // Use updateFeeds to update the feed state
    try {
      await AsyncStorage.setItem('feeds', JSON.stringify(feeds));
      console.log('Feed data updated successfully!');
    } catch (error) {
      console.error('Error writing to AsyncStorage:', error);
    }

    // console.log("Feeds:",feeds);
    // setTitle('');
    // setContent('');
    // setImage(null);
    navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Enter title"
        defaultValue={title}
        onChangeText={newtext => setTitle(newtext)}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Enter body"
        defaultValue={content}
        onChangeText={newbody => setContent(newbody)}
      />
      <Button title="Select Image" onPress={selectImage} />
      {image && (
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      )}
      <Button title="Save Post" onPress={savePost}></Button>
    </View>
  );
}

export default Addpost;
