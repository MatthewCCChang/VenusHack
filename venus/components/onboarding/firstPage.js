import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const FirstPage = ({ goBack, profileData, handleChange, nextStep, prevStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Let's Set Up Your Account!</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goBack} style={styles.arrowButton}>
        <Icon name="long-arrow-alt-left" style={styles.arrowButtonText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={nextStep} style={styles.arrowButton}>
        <Icon name="long-arrow-alt-right" style={styles.arrowButtonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // marginTop: "60%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 30,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  },
  arrowButton: {
    width: 75,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  arrowButtonText: {
    fontSize: 20,
    color: "#A9A9A9",
  },
});

export default FirstPage;
