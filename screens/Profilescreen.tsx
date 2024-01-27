// Profilescreen.tsx
import React from 'react';
import { Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
function Profilescreen({ navigation }: any) {
  return (
    <>
      <Text>ProfileScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Login',
            })
          );
        }}
      />
    </>
  );
}

export default Profilescreen;
