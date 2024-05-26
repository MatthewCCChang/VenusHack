import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Image, StatusBar, Animated } from 'react-native';

const Start = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Start at opacity 1
  const scaleAnim = useRef(new Animated.Value(1)).current; // Start at scale 1

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Start fade-out and zoom-in animation after a delay
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Navigate to SignIn page after animation completes
        navigation.navigate('SignIn');
      });
    }, 2000); // Adjust the delay as needed (2000ms = 2 seconds)

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={require('./background1.png')} // Ensure this path is correct relative to your file location
        style={styles.image}
        resizeMode="cover" // Adjust resizeMode if needed
      />
    </Animated.View>
  );
};

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
