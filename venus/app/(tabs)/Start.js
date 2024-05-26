import React from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableOpacity } from 'react-native';

const Start = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SignIn')}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('./gradient.png')}  // Ensure this path is correct relative to your file location
        style={styles.image}
        resizeMode="cover"  // Adjust resizeMode if needed
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Start;
