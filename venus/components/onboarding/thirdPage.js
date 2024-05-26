import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ThirdPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [showTextInput, setShowTextInput] = useState(false);
  const [customGender, setCustomGender] = useState("");
  const [selectedGender, setSelectedGender] = useState(profileData.gender || '');

  const handleOptionChange = (gender) => {
    setSelectedGender(gender);
    handleChange("gender", gender);
    setShowTextInput(false);
    setCustomGender("");
  };

  const handleOtherOption = () => {
    setShowTextInput(true);
    setSelectedGender("other");
  };

  const handleSubmit = () => {
    handleChange("gender", customGender);
    setSelectedGender(customGender);
    setCustomGender("");
    setShowTextInput(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What is your gender?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGender === "woman" && styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange("woman")}
        >
          <Text
            style={[
              styles.optionText,
              selectedGender === "woman" && styles.selectedOptionText,
            ]}
          >
            Woman
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGender === "gender non-binary" &&
              styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange("gender non-binary")}
        >
          <Text
            style={[
              styles.optionText,
              selectedGender === "gender non-binary" && styles.selectedOptionText,
            ]}
          >
            Non-binary
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGender === "other" && styles.selectedOptionButton,
          ]}
          onPress={handleOtherOption}
        >
          <Text
            style={[
              styles.optionText,
              selectedGender === "other" && styles.selectedOptionText,
            ]}
          >
            Other
          </Text>
        </TouchableOpacity>
      </View>
      {showTextInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your gender"
            value={customGender}
            onChangeText={setCustomGender}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={prevStep} style={styles.arrowButton}>
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
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  optionsContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 40,
  },
  optionButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  selectedOptionButton: {
    backgroundColor: "#FFC0CB",
  },
  optionText: {
    fontSize: 18,
  },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 40,
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: "#FFC0CB",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: '79%'
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
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

export default ThirdPage;
