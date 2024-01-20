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

function Loginscreen() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Image
          size="lg"
          width={'75%'}
          marginTop={'$8'}
          source={{
            uri: 'https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1',
          }}
          alt="Logo"
          alignSelf="center"
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
            //   onPress={handleLogin}
          >
            <ButtonText>Log in</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Loginscreen;
