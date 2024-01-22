import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';

function Loginscreen({navigation}: any) {
  const [username, setUsername] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const isValidUsername = (username: string) => {
    return username.length > 3;
  };

  const handleLogin = () => {
    if (isValidUsername(username)) {
      navigation.navigate('Home');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter a valid username');
    }
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 350,
            height: 100,
            marginTop: 40,
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
          }}
          source={{
            uri: 'https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png',
            alt: 'Logo',
            alignSelf: 'center',
          }}
        />
        <Input
          variant="outline"
          width={'75%'}
          height={'$10'}
          marginTop={'$10'}
          alignSelf="center"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          backgroundColor="#FAFAFA">
          <InputField
            placeholder="Phone number, username, or email"
            fontSize={14}
            value={username}
            onChange={e => setUsername(e.nativeEvent.text)}
          />
        </Input>
        <VStack space="lg" pt="$10">
          <Button
            width={'75%'}
            height={'$10'}
            alignSelf="center"
            rounded={8}
            onPress={handleLogin}>
            <ButtonText bold>Log in</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Loginscreen;
