import React from 'react';
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
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image
          size="lg"
          width={'75%'}
          marginTop={'$8'}
          source={{
            uri: 'https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration-958x575.png',
          }}
          alt="Logo"
          alignSelf="center"
          backgroundColor="transparent"
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
          <InputField placeholder="Username" fontSize={14} />
        </Input>
        <VStack space="lg" pt="$10">
          <Button
            width={'75%'}
            height={'$10'}
            alignSelf="center"
            rounded={8}
            onPress={() => navigation.navigate('Home')}>
            <ButtonText>Log in</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Loginscreen;
