import React, {useState} from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {useData} from '../context/DataContext'; // Import the useData hook from your context file
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';
import {v4 as uuidv4} from 'uuid';
function Addpost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();
  const {feeds, updateFeeds} = useData(); // Destructure feeds and updateFeeds from useData()
  const {profile, updateProfiles} = useData();
  // const {v4: uuidv4} = require('uuid');
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
    const profilePost = {
      id: Date.now().toString(36),
      Url: image,
      Width: 127,
      Height: 127,
      caption: content,
      date: new Date().toISOString(),
    };

    updateFeeds((prevFeeds: any) => [newPost, ...prevFeeds]); // Use updateFeeds to update the feed state
    updateProfiles((prevProfiles: any) => {
      return {...prevProfiles, Profile: [profilePost, ...prevProfiles.Profile]};
    });
    setTitle('');
    setContent('');
    setImage(null);
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
