import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const EigthPage = ({ profileData, handleSubmit, prevStep }) => {
  const validateFields = () => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      age,
      gender,
      gymTime,
      howOften,
      phone,
      instagram,
      interests,
      fitnessGoals,
    } = profileData;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !gymTime ||
      !phone ||
      !interests ||
      !fitnessGoals
    ) {
      Alert.alert("Error", "All fields are required.");
      return false;
    }
    return true;
  };

  const handleFinalSubmit = () => {
    if (validateFields()) {
      handleSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to</Text>
      <Text style={styles.lunaGymText}>LunaGym!</Text>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../app/(tabs)/logo.png')} // Ensure this path is correct relative to your file location
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.arrowButton}>
          <Icon name="long-arrow-alt-left" style={styles.arrowButtonText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFinalSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: -4,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Avenir',
  },
  lunaGymText: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 34,
    fontWeight: 'bold',
    color: '#3A15CE',
    fontFamily: 'Avenir',
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    marginBottom: 40,
  },
  logo: {
    width: '140%',
    height: '140%',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
    marginTop: 50,
  },
  submitButton: {
    width: 120,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A15CE",
    borderColor: "#3A15CE",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  submitButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Avenir'
  },
  arrowButton: {
    width: 120,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    elevation: 4, // For Android
  },
  arrowButtonText: {
    fontSize: 38,
    color: "#3A15CE",
  },
});

export default EigthPage;
