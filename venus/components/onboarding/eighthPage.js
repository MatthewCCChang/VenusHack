import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
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
      <Text style={styles.headerText}>Welcome to Luna Gym!</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.arrowButton}>
          <Icon name="long-arrow-alt-left" style={styles.arrowButtonText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFinalSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  submitButton: {
    width: "35%",
    padding: 12,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    fontSize: 18,
    color: "#A9A9A9",
  },
  arrowButton: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#A9A9A9",
    borderRadius: 5,
  },
  arrowButtonText: {
    fontSize: 24,
    color: "#A9A9A9",
  },
});

export default EigthPage;
