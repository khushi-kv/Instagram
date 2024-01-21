import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Homescreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to home screen...</Text>
    </View>
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
