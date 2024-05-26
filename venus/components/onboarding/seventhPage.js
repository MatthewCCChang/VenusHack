import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const SeventhPage = ({ profileData, handleChange, nextStep, prevStep }) => {
  const [fitnessGoals, setFitnessGoals] = useState(profileData.fitnessGoals || []);

  const toggleGoal = (goal) => {
    setFitnessGoals((prevState) =>
      prevState.includes(goal)
        ? prevState.filter((item) => item !== goal)
        : [...prevState, goal]
    );
  };

  const handleSubmit = () => {
    handleChange("fitnessGoals", fitnessGoals);
    nextStep();
    // actually should create a user
  };

  const fitnessGoalsOptions = [
    "Losing Weight",
    "Gaining Muscle",
    "Improving Endurance",
    "Enhancing Flexibility",
    "Overall Health",
    "Specific Sport Training",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What are your fitness goals?</Text>
      <View style={styles.optionsContainer}>
        {fitnessGoalsOptions.map((goal, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              fitnessGoals.includes(goal) && styles.selectedOptionButton,
            ]}
            onPress={() => toggleGoal(goal)}
          >
            <Text
              style={[
                styles.optionText,
                fitnessGoals.includes(goal) && styles.selectedOptionText,
              ]}
            >
              {goal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
    flex: 1,
    // marginTop: "15%",
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  optionButton: {
    width: "80%",
    padding: 20,
    backgroundColor: "#E4DDFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  selectedOptionButton: {
    backgroundColor: "#3A15CE",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center", // Ensure text is centered
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

export default SeventhPage;
