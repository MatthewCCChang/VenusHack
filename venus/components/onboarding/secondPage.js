import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SecondPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize formData with profileData on mount and when profileData changes
  useEffect(() => {
    if (profileData) {
      setFormData({
        firstName: profileData.firstName || "",
        lastName: profileData.lastName || "",
        username: profileData.username || "",
        phone: profileData.phone || "",
        email: profileData.email || "",
        password: profileData.password || "",
      });
    }
  }, [profileData]);

  const handleInputChange = (name, value) => {
    // Validate phone number input
    if (name === "phone") {
      const cleanedValue = value.replace(/[^0-9]/g, '');
      if (cleanedValue.length <= 10) {
        setFormData((prevState) => ({ ...prevState, [name]: cleanedValue }));
        handleChange(name, cleanedValue); // Update profile data on every change
      }
      return;
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    handleChange(name, value); // Update profile data on every change
  };

  const handleSubmit = () => {
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);

    if (emptyFields.length > 0) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Validate phone number length
    if (formData.phone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    // Validate email format
    if (!formData.email.includes('@')) {
      setErrorMessage("Email must contain an '@' symbol.");
      return;
    }

    setErrorMessage("");
    nextStep(); // Proceed to next step
  };

  const inputFields = [
    { placeholder: "First Name", value: formData.firstName, name: "firstName" },
    { placeholder: "Last Name", value: formData.lastName, name: "lastName" },
    {
      placeholder: "Username",
      value: formData.username,
      name: "username",
      autoCapitalize: "none",
    },
    {
      placeholder: "Phone",
      value: formData.phone,
      name: "phone",
      autoCapitalize: "none",
      keyboardType: "numeric",
      
    },
    {
      placeholder: "Email",
      value: formData.email,
      name: "email",
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
    {
      placeholder: "Password",
      value: formData.password,
      name: "password",
      secureTextEntry: true,
      autoCapitalize: "none",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter your details</Text>
      <View style={styles.inputContainer}>
        {inputFields.map((field, index) => (
          <TextInput
            key={index}
            style={styles.textInput}
            placeholder={field.placeholder}
            placeholderTextColor="#666"
            value={field.value}
            onChangeText={(text) => handleInputChange(field.name, text)}
            keyboardType={field.keyboardType}
            autoCapitalize={field.autoCapitalize}
            secureTextEntry={field.secureTextEntry}
          />
        ))}
      </View>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevStep} style={styles.arrowButton}>
          <Text style={styles.inputText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.arrowButton2}>
          <Icon name="long-arrow-alt-right" style={styles.arrowButtonText2} />
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
  },
  headerText: {
    fontSize: 24,
    width: '80%',
    textAlign: "center",
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Avenir',
  },
  inputContainer: {
    width: "70%",
    marginBottom: 20,
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  inputText: {
    fontWeight: 'bold',
    color: '#3A15CE',
    
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

export default SecondPage;
