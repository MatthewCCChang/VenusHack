import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const FifthPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [selectedGymTime, setSelectedGymTime] = useState(profileData.gymTime);

  const handleOptionChange = (gymTime) => {
    setSelectedGymTime(gymTime);
    handleChange("gymTime", gymTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        How Long Have You Been Going to the Gym?
      </Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGymTime === 0 && styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange(0)}
        >
          <Text
            style={[
              styles.optionText,
              selectedGymTime === 0 && styles.selectedOptionText,
            ]}
          >
            A Couple Months
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGymTime === 1 && styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange(1)}
        >
          <Text
            style={[
              styles.optionText,
              selectedGymTime === 1 && styles.selectedOptionText,
            ]}
          >
            1 Year
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGymTime === 2 && styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange(2)}
        >
          <Text
            style={[
              styles.optionText,
              selectedGymTime === 2 && styles.selectedOptionText,
            ]}
          >
            2 Years
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGymTime === 3 && styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange(3)}
        >
          <Text
            style={[
              styles.optionText,
              selectedGymTime === 3 && styles.selectedOptionText,
            ]}
          >
            3 Years
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedGymTime === 4 && styles.selectedOptionButton,
          ]}
          onPress={() => handleOptionChange(4)}
        >
          <Text
            style={[
              styles.optionText,
              selectedGymTime === 4 && styles.selectedOptionText,
            ]}
          >
            4+ Years
          </Text>
        </TouchableOpacity>
      </View>

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
    width: "85%",
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

export default FifthPage;
