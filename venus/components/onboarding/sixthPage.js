import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SixthPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [interests, setInterests] = useState(profileData.interests || []);

  const toggleInterest = (interest) => {
    setInterests((prevState) =>
      prevState.includes(interest)
        ? prevState.filter((item) => item !== interest)
        : [...prevState, interest]
    );
  };

  const handleSubmit = () => {
    handleChange("interests", interests);
    nextStep();
  };

  const interestOptions = [
    "Running",
    "Yoga",
    "Swimming",
    "Biking",
    "Martial Arts",
    "Calisthenics",
    "Weight Lifting",
    "Rock Climbing",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What exercises are you interested in?</Text>
      <View style={styles.optionsContainer}>
        {interestOptions.map((interest, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              interests.includes(interest) && styles.selectedOptionButton,
            ]}
            onPress={() => toggleInterest(interest)}
          >
            <Text
              style={[
                styles.optionText,
                interests.includes(interest) && styles.selectedOptionText,
              ]}
            >
              {interest}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={prevStep} style={styles.arrowButton}>
        <Icon name="long-arrow-alt-left" style={styles.arrowButtonText} />
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
  optionsContainer: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  optionButton: {
    width: "45%",
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
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    backgroundColor: 'white',
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

export default SixthPage;
