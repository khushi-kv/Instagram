import React, {useState} from 'react';
import {View, TextInput, Button, Image} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';

function Addpostscreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const navigation = useNavigation();

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

  const SavePost = () => {
    const params = {title, body, image};
    console.log(params);
    navigation.navigate('Home', params);
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
        placeholder="Enter body "
        defaultValue={body}
        onChangeText={newbody => setBody(newbody)}
      />
      <Button title="Select Image" onPress={selectImage} />
      {image && (
        <Image source={{uri: image}} style={{width: 200, height: 200}} />
      )}
      <Button title="Save Post" onPress={SavePost}></Button>
    </View>
  );
}

export default Addpostscreen;
