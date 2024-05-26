import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import '@tamagui/core/reset.css';
import { SafeAreaView } from "react-native-safe-area-context";

const SignInPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('./background.png')}  // Ensure this path is correct relative to your file location
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '60%',
    backgroundColor: "#FFFFFF"
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,  // Adjust as needed
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#800080',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButton: {
    marginTop: '30%',
    backgroundColor: '#4B0082',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4B0082',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#4B0082',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInPage;
