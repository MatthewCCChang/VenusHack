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
        <TouchableOpacity onPress={nextStep} style={styles.arrowButton2}>
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
  optionsContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 40,
  },
  optionButton: {
    width: "70%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
  },
  selectedOptionButton: {
    backgroundColor: "#3A15CE",
    borderColor: "#3A15CE",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'black', // Unselected text color
    fontFamily: 'Avenir',
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
    width: "70%",
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: "#3A15CE",
    borderRadius: 10,
    marginTop: 10,
    marginLeft: '50%'
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
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

export default ThirdPage;
