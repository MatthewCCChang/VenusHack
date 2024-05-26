import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
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

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    const emptyFields = Object.keys(formData).filter((key) => !formData[key]);

    if (emptyFields.length > 0) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage("");

    // Update profile data and proceed to next step
    Object.keys(formData).forEach((key) => handleChange(key, formData[key]));
    nextStep();
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
        <Icon name="long-arrow-alt-left" style={styles.arrowButtonText} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.arrowButton}>
        <Icon name="long-arrow-alt-right" style={styles.arrowButtonText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: "55%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
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

export default SecondPage;
