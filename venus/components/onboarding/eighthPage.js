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
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black',
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
  logoText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  submitButton: {
    width: 80,
    height: 45,
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
  },
  arrowButton: {
    width: 80,
    height: 45,
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
  arrowButton2: {
    width: 80,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A15CE",
    borderColor: "#3A15CE",
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  arrowButtonText2: {
    fontSize: 30,
    color: "white",
  },

  arrowButtonText: {
    fontSize: 30,
    color: "#3A15CE",
    
  },
});

export default EigthPage;
